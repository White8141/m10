<?php
declare(strict_types=1);

//namespace App\Models;

use App\Models\User;
use App\Models\Recovery;

class UserController extends ControllerView
{
    public function indexAction() {
        
    }

    /**
     * Вход. Принимает параметры в теле POST запроса
     */
    public function loginAction() {
        if ($this->request->isPost()) {
            $_POST = json_decode(file_get_contents('php://input'), true);

            if ($this->security->checkToken(null, null, false)) {

                $phone    = $this->request->getPost('phone');
                $password = $this->request->getPost('password');

                $user = User::findFirst(
                    [
                        'conditions' => 'phoneNumber = :phone:',
                        'bind'       => [
                            'phone' => $phone
                        ],
                    ]
                );

                if (!is_null($user)) {
                    $check = $this
                        ->security
                        ->checkHash($password, $user->password);

                    if (true === $check) {
                        // OK
                        //echo ('User Authorized');
                        $this->session->set('phone', $user->phoneNumber);
                        $this->session->set('password', $user->password);

                        echo json_encode($user->jsonSerialize(), JSON_UNESCAPED_UNICODE);
                    } else {
                        echo ('User Unauthorized');
                    }
                } else {

                    if( $curl = curl_init() ) {
                        $password = $this->request->getPost('password');
                        curl_setopt($curl, CURLOPT_URL, 'http://93.84.84.168:9494/BiletionApiService/client/auth/'.$this->request->getPost('phone').'/'.$password.'?apikey=56tRR980oPkbx');
                        curl_setopt($curl, CURLOPT_RETURNTRANSFER,true);

                        $out = curl_exec($curl);
                        curl_close($curl);

                        //echo json_encode($out, JSON_UNESCAPED_UNICODE);

                        if (is_null($out) || $out == '') {
                            echo ('Wrong Data');
                        } else {
                            $responce = json_decode($out);

                            $user = new User();
                            $user->phoneNumber = $this->request->getPost('phone');
                            $user->name = $responce->Name;
                            $user->biletionId = $responce->ID;
                            $user->password = $this->security->hash($password);

                            $record = $user->save();

                            if (false == $record) {
                                echo 'Error Save: ';
                                $messages = $user->getMessages();

                                foreach ($messages as $message) {
                                    echo $message . PHP_EOL;
                                }
                            } else {
                                $this->session->set('phone', $user->phoneNumber);
                                $this->session->set('password', $user->password);

                                echo json_encode($user->jsonSerialize(), JSON_UNESCAPED_UNICODE);
                            }
                        }

                    } else {
                        echo ('Curl Error');
                    }
                }
            } else {
                echo ('Access denied');
            }
        }

        if ($this->request->isGet()) {
            $this->view->enable();
            $this->dispatcher->forward(
                [
                    'controller' => 'error',
                    'action'     => 'index',
                    'params'      => ['Wrong Routes Request']
                ]
            );
        }
    }
    
    public function logoutAction() {
        $this->session->remove('phone');
        $this->session->remove('password');
        //$this->session->destroy();

        $this->response->redirect('/');
    }

    public function registrationAction() {
        echo ('registrationAction');
    }

    public function recoveryAction() {
        if ($this->request->isPost()) {
            $_POST = json_decode(file_get_contents('php://input'), true);

            if ($this->security->checkToken(null, null, false)) {

                $trigger = true;
                $interval = 16384;
                $phone    = $this->request->getPost('phone');
                $time = new DateTime();

                $recovery = Recovery::findFirst(
                    [
                        'conditions' => 'phone = :phone:',
                        'bind'       => [
                            'phone' => $phone
                        ],
                    ]
                );

                if (!is_null($recovery)) {

                    $oldDate = new DateTime($recovery->time);
                    $oldDate->add(new DateInterval('PT3H'));
                    $diff = $time->diff($oldDate);
                    if ($diff->invert == 0) {
                        $trigger = false;
                    }
                    //echo json_encode(['Code' => 'ERROR', 'Description' => $diff->format('%Y-%m-%d %H:%i:%s').', '.$diff->invert], JSON_UNESCAPED_UNICODE);
                } else {
                    $recovery = new Recovery();
                    $recovery->phone = $phone;
                }

                if ($trigger) {

                    if( $curl = curl_init() ) {
                        curl_setopt($curl, CURLOPT_URL, 'http://93.84.84.168:9494/BiletionApiService/client/register/sendrecoverypassword/'.$phone.'?apikey=56tRR980oPkbx');
                        curl_setopt($curl, CURLOPT_RETURNTRANSFER,true);
                        $out = curl_exec($curl);
                        curl_close($curl);

                        if (is_null($out) || $out == '') {
                            echo json_encode(['Code' => 'ERROR', 'Description' => 'Empty Response'], JSON_UNESCAPED_UNICODE);
                        } else {
                            try {
                                $responce = json_decode($out);

                                if ($responce && $responce->Code && $responce->Code == 'OK') {

                                    $recovery->time = $time->format('Y-m-d H:i:s');
                                    $recovery->description = $responce->Description?$responce->Description:'Без описания';
                                    $record = $recovery->save();

                                    if (false == $record) {
                                        $messages = $recovery->getMessages();
                                        echo json_encode(['Code' => 'ERROR', 'Description' => 'Ошибка сохранения в БД', 'messages' => $messages], JSON_UNESCAPED_UNICODE);
                                    } else {
                                        echo json_encode(['Code' => 'OK', 'Description' => 'СМС на номер '.$phone.' отправленна', 'phone' => $phone, 'time' => $time->format('Y-m-d H:i:s')], JSON_UNESCAPED_UNICODE);
                                    }
                                } else {
                                    echo json_encode(['Code' => 'ERROR', 'Description' => $responce->Description], JSON_UNESCAPED_UNICODE);
                                }
                            } catch (Exeption $err) {
                                echo json_encode(['Code' => 'ERROR', 'Description' => 'Ошибка: '.$err->getMessage(), 'Out' => $out], JSON_UNESCAPED_UNICODE);
                            }
                        }
                    } else {
                        echo json_encode(['Code' => 'ERROR', 'Description' => 'Curl Error'], JSON_UNESCAPED_UNICODE);
                    }
                } else {
                    echo json_encode(['Code' => 'ERROR', 'Description' => 'Превышен лимит. Повторная попытка возможна в '.$oldDate->format('H:i  d.m.y'), 'invert' => $diff->invert], JSON_UNESCAPED_UNICODE);
                }
            } else {
                echo json_encode(['Code' => 'ERROR', 'Description' => 'Access denied'], JSON_UNESCAPED_UNICODE);
            }
        }

        if ($this->request->isGet()) {
            $this->view->enable();
            $this->dispatcher->forward(
                [
                    'controller' => 'error',
                    'action'     => 'index',
                    'params'      => ['Wrong Routes Request']
                ]
            );
        }
    }
}