function IndexController(){

    this.constructor = function(request){
        //
    }

    this.index = function (request) {

        return Sully.serveView("index");

    }

 }

Sully.registerController('index', new IndexController());
