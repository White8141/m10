<?php
declare(strict_types=1);

use App\Models\User;
use Phalcon\Mvc\Controller;

class ControllerView extends Controller
{
    // Implement common logic
    public function initialize()
    {
        $this->view->setVar('isAuth', false);
        $this->view->setVar('name', '');
        $this->view->setVar('id', '');
        $this->view->setVar('data', []);
        $this->view->setVar('message', '');

        if ($this->session->has('phone') && $this->session->has('password')) {

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
                }
            }
        }
    }
}
