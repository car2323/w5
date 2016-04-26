
$(document).ready(function(){
	console.log ("testing conection");
   var phrases = [
   "position0 array.",
   "position1 array.",
   "position2 array",
   "position3 array",
   "position4 array",
   "position5 array",
   "position6 array",
   "position7 array",
    ];
    $("ul").empty();
    $("ul").hide();
    for(var j = 0; j < phrases.length; j= j+1)
    {                
      $("ul").append("<li id=l"+ j + " class='li_class'>" + phrases[j] + "   X   " + "</li>");
    }
    var i = Math.floor(Math.random() * 7) + 1;
    $("strong").append(phrases[i]);

    $(".btn_refresh").on("click",function(){
         location.reload();
    });
    $("#userinput").submit(function(e){	          
         phrases.push($(".input-text").val());
         console.log(phrases); 
         $(".input-text").val("");
         $("ul").empty();
         for(var j = 0; j < phrases.length; j= j+1)
         {                
           $("ul").append("<li id=l"+ j + " class='li_class'>" + phrases[j] +  "   X   " +"</li>");
         }
        e.preventDefault();
    });
    $("#show").on("click", function(){
        $("ul").show();
    });
    $("#hide").on("click", function(){
        $("ul").hide();
    });
    $(".li_class").on("click", function(){
       $(this).remove();
    });


});