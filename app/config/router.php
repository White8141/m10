<?php

$router = $di->getRouter();

/*
 * Что бы убрать из адресной строки префикс /user для истории и отмены поездок
 */
$router->add (
    '/history',
    [
        'controller' => 'user',
        'action' => 'history'
    ]
);
$router->add (
    '/cancel',
    [
        'controller' => 'user',
        'action' => 'cancel'
    ]
);

$router->handle($_SERVER['REQUEST_URI']);
