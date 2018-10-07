Sully.registerNotFound('error', '404');

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
