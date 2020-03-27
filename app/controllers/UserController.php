<?php
declare(strict_types=1);

//namespace App\Models;

use App\Models\User;

class UserController extends ControllerView
{
    public function indexAction() {
        
    }

    /**
     * Регистрация пользователя. Принимает параметры в теле POST запроса
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

        $this->response->redirect('/');
    }

    public function registrationAction() {
        echo ('registrationAction');
    }

    public function historyAction() {
        //echo ('historyAction');
    }

    public function cancelAction() {
        //echo ('cancelAction');
    }

}