<?php
declare(strict_types=1);

class ApiController extends ControllerApi
{
    public function indexAction()
    {
        //echo ('API start');
    }

    //  /api/routes
    public function routesAction () {
        $this->dispatcher->forward(
            [
                'controller' => 'routes',
                'action' => 'index'
            ]
        );
    }

    public function tripsAction () {
        $this->dispatcher->forward(
            [
                'controller' => 'trips',
                'action' => 'index'
            ]
        );
    }

    public function tripAction () {
        $this->dispatcher->forward(
            [
                'controller' => 'trips',
                'action' => 'findByID'
            ]
        );
    }

    public function userAction () {
        echo ('user login');
        /*$this->dispatcher->forward(
            [
                'controller' => 'trips',
                'action' => 'findByID'
            ]
        );*/
    }
}

