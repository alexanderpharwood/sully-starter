function IndexController(){

    this.constructor = function(request){

        request.test = true;

    }

    this.index = function (request) {

        console.log(request);

        return Sully.serveView("index");

    }

 }

Sully.registerController('index', new IndexController());
