<?php

$router = $di->getRouter();

/*
 * Если понадобится запретить прямой доступ к контроллерам Routes и Trips, эти роуты перенаправляют прямые запросы на них на Api контроллер
 */
/*$router->add (
    '/routes',
    [
        'controller' => 'api',
        'action' => 'routes'
    ]
);
$router->add (
    '/trips',
    [
        'controller' => 'api',
        'action' => 'trips'
    ]
);*/

$router->handle($_SERVER['REQUEST_URI']);
