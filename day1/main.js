// main.js
console.log ('hello');
$(document).ready(function(){
  
  $(".js-coolbutton").on("click",function(){
  	//console.log ("inside");
  	$(".js-textonly").fadeOut();
  	$(".js-unicorn_img").fadeOut();
    //alert("tonto");
  });
  $(".js-unicorn-mode").on("click",function(){
    $(".js-textonly").fadeIn();
    $(".js-textonly").css("color","red");
/*pudiera conectar un archivo css con una clase que defina todos los colores y cambios para este texto*/
  });
});