<?php
declare(strict_types=1);

class IndexController extends ControllerView
{
    public function indexAction(){
        
    }

    public function registrationAction () {
        echo ('reg');
    }

    public function historyAction () {
        $this->checkRequest();
    }
    
    public function cancelAction () {
        $this->checkRequest();
    }

    /**
     * Проверка запроса на валидность. Если не проходит, отправить на страницу 404
     */
    private function checkRequest() {
        if (!$this->request->isPost() || !$this->security->checkToken(null, null, false)) {
            $this->dispatcher->forward(
                [
                    'controller' => 'error',
                    'action'     => 'index',
                    'params'      => ['Wrong History Request']
                ]
            );
        }
    }
}

