$(document).on("ready", function () {

  $(".js-submit-button").on("click", function () {

    $.ajax({
      url: "https://api.spotify.com/v1/search?type=artist&query="+ $("#text_name").val(),
      success: function (all_artists) {
        console.log("It worked!");
        var all_artists_array = all_artists.artists.items /*saco de todo el objeto que me dio spotify solo el array con los artistas*/
        //console.log(all_artists_array);
        displayinfo(all_artists_array);            //event

        // <li class="artist_title_search" data-artist-id="5a2EaR3hamoenG9rDuVn8j">
        
        $(".artist_title_search").on("click", function(event){ 
            var x = $(event.currentTarget).data("artist-id");


             // var x = $(".id_artist").data("artist-id");


             console.log("hola", x);
             console.log(event.currentTarget);
            $.ajax({
                url: "https://api.spotify.com/v1/artists/"+x+"/albums",
                 success: function (all_albums) {
                    console.log("It worked!");
                     
                    var all_albums_array = all_albums.items /*saco de todo el objeto que me dio spotify solo el array con los artistas*/
                   console.log(all_albums_array);
                    displayinfoalbums(all_albums_array);
                 },
                 error: function (all_albums) {
                 console.log("It failed. :( ");
                 console.log(theError.responseJSON);
                 } /*cierre del evento error*/
            });   
          
        });/*cierre de on click*/
      }, /*Cierre del evento success*/

      error: function (all_artists) {
        console.log("It failed. :( ");
        console.log(theError.responseJSON);
      } /*cierre del evento error*/
    });
  });
    $(".serach_form").on("click", function (event) {
      event.preventDefault();
     });


    
});
function displayinfo (all_artists_arrayp) {
  all_artists_arrayp.forEach(function(oneArtistp) {
    var string = "";
    if (oneArtistp.images.length > 0)
    {
        string=`<p><img src="${oneArtistp.images[0].url}"></p>`;
    }
    else
    {
        string=``;
    } 
    var html = `
      <li class="artist_title_search" data-artist-id="${oneArtistp.id}">
        <p>Name: <a href="#" class="id_artist">${oneArtistp.name}</a></p>
        <p>Popularity: ${oneArtistp.popularity}</p>
        <p>Type: ${oneArtistp.type}</p>
        <p></p>
         ${string}
      </li>`;
    $(".js-artist-list").append(html);
  });
}
function displayinfoalbums(all_albumsp){
  console.log(all_albumsp);
  $(".js-artist-list").empty();
  all_albumsp.forEach(function(onealbum) {
    var html = `
      <li>
        <p>Name: ${onealbum.name}</p>
        <p>Type: ${onealbum.type}</p>
        <p>Album_Type: ${onealbum.album_type}</p>
        <p>------------------------------</p>
      </li>`;
    $(".js-artist-list").append(html);
  });
}




















/*
  $(".js-add-rey").on("click", function () {
    var rey = {
      name: "Rey",
      occupation: "Scavenger",
      weapon: "Scavenged Staff"
    };

    $.ajax({
      type: "post",
      url: "https://ironhack-characters.herokuapp.com/characters",
      data: rey,

      success: function () {
        alert("Rey has been added successfully.")
      },
      error: function (error) {
        console.log("FAIL");
        console.log(error.responseJSON);
      }
    });
  });

  $(".js-stop-link").on("click", function (event) {
    event.preventDefault();

    alert("Did you you want to visit Wookiepedia? Nope.");
  });

console.log($(".js-submit-button").length);

  $(".js-submit-button").on("click", function (blah) {
   blah.preventDefault();
    var newCharacter = {
      name: $("#text_name").val(),
      occupation: $("#text_occupation").val(),
      debt: $("#text_debt").val(),
      weapon: $("#text_weapon").val()

    };
    $.ajax({
      type: "post",
      url: "https://ironhack-characters.herokuapp.com/characters",
      data: newCharacter,

      success: function () {
        alert("Your new caracter was add successfully.")
      },
      error: function (error) {
        console.log("FAIL");
        console.log(error.responseJSON);
      }
    });  
   // alert("FORM SUBMITTED");
  });

});


function displayCharacters (characters) {
  characters.forEach(function (oneCharacter) {
    var html = `
      <li>
        <p>Name: ${oneCharacter.name}</p>
        <p>Occupation: ${oneCharacter.occupation}</p>
        <p>debt: ${oneCharacter.debt}</p>
        <p>Weapon: ${oneCharacter.weapon}</p>
        <p>Id: ${oneCharacter.id}</p>
      </li>`;

    $(".js-character-list").append(html);
  });
}*/