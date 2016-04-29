// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
PokemonApp.Pokemon = function (pokemonUri){
	this.id=PokemonApp.Pokemon.idFromUri(pokemonUri);
};
PokemonApp.Pokemon.prototype.render = function () {
	var self = this;
	console.log("Rendering pokemon: #" + this.id);
	$.ajax({
       url: "/api/pokemon/" + this.id,
       success: function (response) {
            self.info = response;
            $(".js-pkmn-name").text(self.info.name);
            $(".js-pkmn-number").text(self.info.pkdx_id);
            $(".js-pkmn-height").text(self.info.height);
            $(".js-pkmn-weight").text(self.info.weight;
            $(".js-pkmn-modal").modal("show");
       	console.log("Pokemon info:");
       	console.log(response);
       }
       error: function (error) {
          console.log("FAIL");
          console.log(error.responseJSON);
        }
    });
};
PokemonApp.Pokemon.idFromUri = function (pokemonUri){
	var uriSegments  = pokemonUri.split("/");
	var secondLast  = uriSegments.length - 2;
	return uriSegments[secondLast];
};
/*page 47*/
$(document).on("ready", function(){
	  $(".js-show-pokemon").on("clik", function (event){
	  	 /*esto solo es un nombre $button*/
	  	 var $button = $(event.currentTarget);
	  	 var pokemonUri = $button.data("pokemon-uri");

	  	 var pokemon = new PokemonApp.Pokemon(pokemonUri);
	  	 pokemon.render();
	  });
});