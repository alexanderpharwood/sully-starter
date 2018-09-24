/**
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
