$(document).on("ready", function () {

  $(".js-submit-button").on("click", function () {

    $.ajax({
      url: "https://api.spotify.com/v1/search?type=artist&query="+ $("#text_name").val(),
      success: function (all_artists) {
        console.log("It worked!");
        var all_artists_array = all_artists.artists.items /*saco de todo el objeto que me dio spotify solo el array con los artistas*/
        console.log(all_artists_array);
        displayinfo(all_artists_array);
        $(".artist_title_search").on("click", function(){
            console.log(this);
            $.ajax({
              url: "https://api.spotify.com/v1/search?type=artist&query="+ $("#text_name").val(),
                 success: function (all_allbums) {
                 console.log("It worked!");
                 var all_albums_array = all_artists.artists.items /*saco de todo el objeto que me dio spotify solo el array con los artistas*/
                 console.log(all_albums_array);
                 displayinfo(all_albums_array); 
                 },

                 error: function (all_artists) {
                 console.log("It failed. :( ");
                 console.log(theError.responseJSON);
                 }
            });
        });

    });
      },

      error: function (all_artists) {
        console.log("It failed. :( ");
        console.log(theError.responseJSON);
      }
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
      <li>
        <p>Name: <a href="#" class="artist_title_search">${oneArtistp.name}</a></p>
        <p>Popularity: ${oneArtistp.popularity}</p>
        <p>Type: ${oneArtistp.type}</p>
        <p>URI: ${oneArtistp.uri}</p>
         ${string}
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