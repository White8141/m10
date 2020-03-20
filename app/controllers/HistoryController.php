<?php
declare(strict_types=1);

class HistoryController extends ControllerView
{
    public function indexAction()
    {
        if ($this->request->isPost()) {
            if ($this->security->checkToken(null, null, false)) {
                /*if( $curl = curl_init() ) {
                    curl_setopt($curl, CURLOPT_URL, "http://93.84.84.168:9494/BiletionApiService/passengers/byclientid/".$this->request->getPost('id')."?apikey=56tRR980oPkbx");
                    curl_setopt($curl, CURLOPT_RETURNTRANSFER,true);

                    $out = curl_exec($curl);
                    $this->view->setVar('data', $out);
                    //echo json_encode($out, JSON_UNESCAPED_UNICODE);

                    curl_close($curl);
                } else {
                    $this->view->setVar('message', 'Curl Error');
                }*/
                $this->view->setVar('id', $this->request->getPost('id'));
            } else {
                $this->view->setVar('message', 'Access denied');
            }
        }

        if ($this->request->isGet()) {
            $this->dispatcher->forward(
                [
                    'controller' => 'error',
                    'action'     => 'index',
                    'params'      => ['Wrong History Request']
                ]
            );
        }
    }

    public function getTripsAction() {
        if ($this->request->isPost()) {

            $this->view->disable();
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
            $this->dispatcher->forward(
                [
                    'controller' => 'error',
                    'action'     => 'index',
                    'params'      => ['Wrong History Request']
                ]
            );
        }
    }

    //  /api/other
    /*public function otherAction ($action, $params = []) {

        $this->dispatcher->forward(
            [
                'controller' => 'other',
                'action' => $action,
                'params' => $params
            ]
        );
    }*/
}

