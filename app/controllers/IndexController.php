<?php
declare(strict_types=1);

class IndexController extends ControllerView
{
    public function indexAction()
    {
        /*if ($this->session->has('phone') && $this->session->has('password')) {

            $user = User::findFirst([
                'conditions' => 'phoneNumber = :phone:',
                'bind'       => [
                    'phone' => $this->session->get('phone')
                ]
            ]);

            if (!is_null($user)) {
                if ($user->password == $this->session->password) {
                    $this->view->setVar('isAuth', true);
                    $this->view->setVar('name', explode(' ', $user->name)[1]);
                    $this->view->setVar('id', $user->biletionId);
                } else {
                    $this->view->setVar('isAuth', false);
                }
            }
        } else {
            $this->view->setVar('isAuth', false);
        }*/
    }
}

