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
(function(){/**
 * Register a controller.
 * @param string Controller name
 * @param object The controller -- an object of methods.
 */

 function IndexController(){

         this.constructor = function(request){

         }

         this.index = function (request) {

             //Do your data manipulation here
             return Sully.renderView({

                 template: Sully.getViewTemplate("index"),

                 data: request,

                 viewDidLoad: function () {

                     //Do your DOM manipulation here

                 }

             });

         }

 }

Sully.registerController('index', new IndexController());


function ErrorController(){

    this['404'] = function () {

        return Sully.renderView({

            template: template = Sully.getViewTemplate("404"),

            viewDidLoad: function () {

            }

        });

    }

}

Sully.registerController('error', new ErrorController());
})();(function(){Sully.registerView('404', '{{view:header}}<div id="view-404">    <div class="landing-center text-center">        <h1><i>Whoops!</i> That doesn&apos;t look right: 404.</h1>    </div></div>');

Sully.registerView('header', '<div class="sully header sticky" id="view-header">    <div class="brand">        <img class="landing-logo" src="app/assets/images/logo.svg">    </div></div>');

Sully.registerView('index', '{{view:header}}<div id="view-index">    <div class="landing-center text-center">        <h1>Looks good to me 👍</h1>        <p>Sully is ready to go, now make something spectacular!</p>    </div></div>');

Sully.registerView('getting-started', '{{view:header}}<div id="view-index">    <div class="landing-center text-center">        <img class="landing-logo" src="app/assets/images/logo.svg">        <p>You&apos;re all set!</p>        <pre class="npm">$ npm i sully -g</pre>        <a href="/getting-started" class="btn btn-outline-light">Getting started</a>    </div></div>');

})();