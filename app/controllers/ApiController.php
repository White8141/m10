<?php
declare(strict_types=1);

class ApiController extends ControllerApi
{
    public function indexAction()
    {
        echo ('API start');
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

    //  /api/trips
    public function tripsAction () {
        $this->dispatcher->forward(
            [
                'controller' => 'trips',
                'action' => 'index'
            ]
        );
    }

    //  /api/trip
    public function tripAction () {
        $this->dispatcher->forward(
            [
                'controller' => 'trips',
                'action' => 'findByID'
            ]
        );
    }

    //  /api/user
    public function userAction ($action, $params = []) {

        $this->dispatcher->forward(
            [
                'controller' => 'user',
                'action' => $action,
                'params' => $params
            ]
        );
    }

    //  /api/orders
    public function ordersAction ($action, $params = []) {

        $this->dispatcher->forward(
            [
                'controller' => 'orders',
                'action' => $action,
                'params' => $params
            ]
        );

        /*switch ($action) {
            case 'login':
                $this->dispatcher->forward(
                    [
                        'controller' => 'user',
                        'action' => 'login'
                    ]
                );
                break;
            case 'registration':
                $this->dispatcher->forward(
                    [
                        'controller' => 'user',
                        'action' => 'registration'
                    ]
                );
                break;
            default :

                break;
        }*/

    }
}

