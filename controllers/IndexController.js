function IndexController(){

    this.constructor = function(request){
        //
    }

    this.index = function (request) {

        return Sully.serveView("index");

    }

    this.test = function (request) {

        return Sully.serveView("test");

    }

    this.experiment = function (request) {

        return console.log(request);

    }

 }

Sully.registerController('index', new IndexController());
