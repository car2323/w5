// Write your Pizza Builder JavaScript in this file.
$(document).ready(function(){
  var pepperonni_number = 0;
  var greenpeppers_number = 0;
  var mushrooms_number = 0;
  var whitesouce_number = 0;
  var glutenfree_number = 0;
  var baseprice = 10;

     $(".green-pepper").hide();
     $(".mushroom").hide();
     $(".pep").hide();

     $(".js-pepe1").hide();

     $(".js-mush1").hide();

     $(".js-green1").hide();
     $(".js-white3").hide();
     $(".js-gluten5").hide();


     /*$(".green-pepper").remove();
     $(".mushroom").remove();
     $(".pep").remove();*/

     $(".btn-pepperonni").on("click",function(){
     	$(".btn-pepperonni").toggleClass("active");
       	$(".pep").toggle();
       	$("strong").empty();
     	if( pepperonni_number === 0)
     	{    
       	    pepperonni_number = 1;   
       	    baseprice = baseprice +  pepperonni_number;
       	    $("strong").append("$" + baseprice);
       	    $(".js-pepe1").show();
       	}
       	else
       	{
       		$(".js-pepe1").hide();
       		baseprice = baseprice - pepperonni_number;
            $("strong").append("$" + baseprice);
             pepperonni_number = 0;
        } 
     });
   /*---------------------------------------------------------------------------------------*/  
    $(".btn-green-peppers").on("click",function(){
            $(".btn-green-peppers").toggleClass("active");
       	    $(".green-pepper").toggle();
       	    $("strong").empty();
            if(greenpeppers_number === 0)
            {
               greenpeppers_number = 1;   
       	       baseprice = baseprice +  greenpeppers_number;
               $("strong").append("$" + baseprice);
               $(".js-green1").show();
            }
       	    else
       	    {
       	    	$(".js-green1").hide();
       	    	baseprice = baseprice - greenpeppers_number;
                $("strong").append("$" + baseprice);
                greenpeppers_number = 0;
       	    }
     });   
  /*-------------------------------------------------------------------------------------------*/  
     $(".btn-mushrooms").on("click",function(){
            $(".btn-mushrooms").toggleClass("active");
       	    $(".mushroom").toggle();
       	    $("strong").empty();
       	    if(mushrooms_number === 0)
       	    {
       	    	mushrooms_number = 1;
       	    	baseprice = baseprice +  mushrooms_number;
                $("strong").append("$" + baseprice);
                $(".js-mush1").show();
       	    }
       	    else
       	    {
       	    	$(".js-mush1").hide();
       	    	baseprice = baseprice - mushrooms_number;
                $("strong").append("$" + baseprice);
                mushrooms_number = 0;
       	    }
         
     });   
/*---------------------------------------------------------------------------------------*/  
     $(".btn-sauce").on("click",function(){
     	$("strong").empty();
     	if (whitesouce_number === 0)
     	{
          $(".sauce").addClass("sauce-white");  /*toggleClass y la agrega y la elimina solo*/
          $(".btn-sauce").addClass("active");
          whitesouce_number = 3;
          baseprice = baseprice +  whitesouce_number;
          $("strong").append("$" + baseprice);
          $(".js-white3").show();
        }
        else
        {
        	baseprice = baseprice - whitesouce_number;
            $("strong").append("$" + baseprice);
        	$(".sauce").removeClass("sauce-white");
        	$(".btn-sauce").removeClass("active");
            whitesouce_number = 0;
            $(".js-white3").hide();
        }
     });
  /*---------------------------------------------------------------------------------------*/  
      $(".btn-crust").on("click",function(){
      	$("strong").empty();
      	if(glutenfree_number=== 0)
      	{
          $(".crust").addClass("crust-gluten-free");
          $(".btn-crust").addClass("active");
          glutenfree_number = 5;
          $(".js-gluten5").show();
          baseprice = baseprice +  glutenfree_number;
          $("strong").append("$" + baseprice);
        }
        else
        {
           baseprice = baseprice - glutenfree_number;
           $("strong").append("$" + baseprice);	
           $(".crust").removeClass("crust-gluten-free");
           $(".btn-crust").removeClass("active");
           $(".js-gluten5").hide();
          glutenfree_number = 0;

        }
     });
});


























 /* $(".js-coolbutton").on("click",function(){
  	//console.log ("inside");
  	$(".js-textonly").fadeOut();
  	$(".js-unicorn_img").fadeOut();
    //alert("tonto");
  });
  $(".js-unicorn-mode").on("click",function(){
    $(".js-textonly").fadeIn();
    $(".js-textonly").css("color","red");*/
/*pudiera conectar un archivo css con una clase que defina todos los colores y cambios para este texto*/
  /*});*/
