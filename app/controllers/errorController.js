function ErrorController(){

    this.constructor = function(request){

        console.log(request);

    }

    this['404'] = function () {

        return Sully.serveView("404");

    };

    this['403'] = function () {

        return Sully.serveView('403');

    };

}

Sully.registerController('error', new ErrorController());
