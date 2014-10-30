// Theme Namespace
var foo = foo || {};

$(document).ready(function(){
  foo.launch(jQuery(document));
});

foo.launch = function (context) {

  // Example attach call.
  foo.function_name(context);

}

foo.function_name = function(context){

  context.find('body').once('foo-function-name-1', function(){
    $(this).addClass("nice");
  });


}
