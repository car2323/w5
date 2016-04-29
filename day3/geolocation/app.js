$(document).on("ready", function(){
if ("geolocation" in navigator){
	console.log("geolocation is available!");
	navigator.geolocation.getCurrentPosition(displayPosition, showPositionError);
}else{
	alert("geolocation IS NOT available");
}

function displayPosition (data){
	console.log("got position!");
	$(".js-set-latitude").text(data.coords.latitude);
	$(".js-set-longitude").text(data.coords.longitude);
    $(".js-button-search").on("click", function (event) {
       event.preventDefault();
       var link_img = "http://maps.googleapis.com/maps/api/staticmap?size=1000x1000&zoom=20&center="+ data.coords.latitude+","+ data.coords.longitude;
	  $.ajax({
          url: link_img,           
          success: function () {   
          },
          error: function (error) {
          console.log("FAIL");
          console.log(error.responseJSON);
          }
      });
        $(".showimage").append("<img src="+'"'+link_img+'"'+">");
    });
}
function showPositionError (error){
	console.log("Failed to get position :(");
	console.log(error);
}
});