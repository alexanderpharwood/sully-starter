/**
 * Sully router
 * Note: all routes should have a preceding slash.
 */


/**
 * Register the controller and method to use when a route is not found (404).
 * @param string Controller name
 * @param string Method name
 */
Sully.registerNotFound('error', '404');

/**
 * Register a route
 * Routes will be matched in the order they are set.
 * @param object {name, uri, controller, method, [middleware]}.
 */

 Sully.registerRoute({
     name: '404',
     route: '/404',
     controller: 'error',
     method: '404',
 });

 Sully.registerRoute({
     name: '403',
     route: '/403',
     controller: 'error',
     method: '403',
 });

Sully.registerRoute({
    name: 'index',
    route: '/',
    controller: 'index',
    method: 'index',
});
