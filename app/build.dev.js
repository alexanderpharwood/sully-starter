(function(){/**
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

Sully.registerRoute({
    name: 'getting-started',
    route: '/getting-started',
    controller: 'index',
    method: 'gettingStarted'
});
function IndexController(){

         this.constructor = function(request){

         }

         this.index = function (request) {

             return Sully.serveView("index");

         }

 }

Sully.registerController('index', new IndexController());

function ErrorController(){

    this['404'] = function () {

        return Sully.serveView("404");

    };

    this['403'] = function () {

        return Sully.serveView('403');

    };

}

Sully.registerController('error', new ErrorController());
Sully.registerView('403', '{{view:header}}<div id="view-404">    <div class="landing-center text-center">        <h1><i>Whoops!</i> That doesn&apos;t look right: 404.</h1>    </div></div>');

Sully.registerView('404', '{{view:header}}<div id="view-403">    <div class="landing-center text-center">        <h1><i>Whoops!</i> You shouldn&apos;t be here: 403.</h1>    </div></div>');

Sully.registerView('header', '<div class="sully header sticky" id="view-header">    <div class="brand">        <img class="landing-logo" src="app/assets/images/logo-white.svg">    </div></div>');

Sully.registerView('index', '{{view:header}}<div id="view-index">    <div class="landing-center text-center">        <h1>It&apos;s all looking good!</h1>        <h1>🎉</h1>        <p>Sully is ready to go, now make something spectacular!</p>    </div></div>');

Sully.registerView('getting-started', '{{view:header}}<div id="view-index">    <div class="landing-center text-center">        <img class="landing-logo" src="app/assets/images/logo.svg">        <p>You&apos;re all set!</p>        <pre class="npm">$ npm i sully -g</pre>        <a href="/getting-started" class="btn btn-outline-light">Getting started</a>    </div></div>');

})();