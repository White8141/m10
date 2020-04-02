<?php
declare(strict_types=1);

class OrdersController extends ControllerApi
{
    public function indexAction()
    {

    }

    public function historyAction () {
        if ($this->request->isPost()) {
            $_POST = json_decode(file_get_contents('php://input'), true);

            if ($this->security->checkToken(null, null, false)) {

                if( $curl = curl_init() ) {
                    curl_setopt($curl, CURLOPT_URL, "http://93.84.84.168:9494/BiletionApiService/passengers/byclientid/".$this->request->getPost('id')."?apikey=56tRR980oPkbx");
                    curl_setopt($curl, CURLOPT_RETURNTRANSFER,true);

                    $out = curl_exec($curl);
                    echo json_encode($out, JSON_UNESCAPED_UNICODE);

                    curl_close($curl);
                } else {
                    echo ('Curl Error');
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

    public function cancelAction () {
        if ($this->request->isPost()) {
            $_POST = json_decode(file_get_contents('php://input'), true);

            if ($this->security->checkToken(null, null, false)) {

                if( $curl = curl_init() ) {
                    curl_setopt($curl, CURLOPT_URL, "http://93.84.84.168:9494/BiletionApiService/passenger/save/".$this->request->getPost('id')."/%D0%9E%D1%82%D0%BC%D0%B5%D0%BD%D0%B0%20%D1%87%D0%B5%D1%80%D0%B5%D0%B7%20%D1%81%D0%B0%D0%B9%D1%82/True/613F5E74-EAEA-4FE8-983B-644198D0F32B?apikey=56tRR980oPkbx");
                    curl_setopt($curl, CURLOPT_RETURNTRANSFER,true);

                    $out = curl_exec($curl);
                    if ($out) {
                        echo json_encode($out, JSON_UNESCAPED_UNICODE);
                    } else {
                        echo json_encode(['status' => 'OK', 'id' => $this->request->getPost('id')], JSON_UNESCAPED_UNICODE);
                    }


                    curl_close($curl);
                } else {
                    echo ('Curl Error');
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
}

