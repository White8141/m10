<?php

$router = $di->getRouter();

/*
 * Если понадобится запретить прямой доступ к контроллерам Routes и Trips, эти роуты перенаправляют прямые запросы на них на Api контроллер
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
