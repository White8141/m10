<?php
declare(strict_types=1);

use Phalcon\Http\Request;
use Phalcon\Mvc\Controller;

class ControllerApi extends Controller
{
    public function initialize()
    {
        $this->view->disable();
    }
}
