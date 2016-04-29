if (window.PokemonApp === undefined){
	window.PokemonApp = {};
}
PokemonApp.init = function (){
	//3er party code
	console.log("Pokemon App ONLINE!");
};
$(document).on("ready",function(){
 PokemonApp.init();
});