<?php
declare(strict_types=1);

class ErrorController extends ControllerBase
{
    /**
     * Страница 404
     */
    public function indexAction($exception)
    {
        //TODO необходимо вносить в лог сообщения об ошибках
        
        $this->view->setVar('message', 'Извините, но мы не смогли найти эту страницу :(');
    }
}

