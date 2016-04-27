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
	
}
function showPositionError (error){
	console.log("Failed to get position :(");
	console.log(error);
}

});