<?php

$router = $di->getRouter();

/*
 * Что бы убрать из адресной строки префикс /user для истории и отмены поездок
 */
$router->add (
    '/registration',
    [
        'controller' => 'index',
        'action' => 'registration'
    ]
);
$router->add (
    '/history',
    [
        'controller' => 'index',
        'action' => 'history'
    ]
);
$router->add (
    '/cancel',
    [
        'controller' => 'index',
        'action' => 'cancel'
    ]
);

$router->handle($_SERVER['REQUEST_URI']);
