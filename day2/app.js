// app.js

$(document).on("ready", function () {

  $(".js-character-ajax").on("click", function () {

    $.ajax({
      url: "https://ironhack-characters.herokuapp.com/characters",

      success: function (theData) {
        console.log("It worked!");
        console.log(theData);

        displayCharacters(theData);
      },

      error: function (theError) {
        console.log("It failed. :( ");
        console.log(theError.responseJSON);
      }
    });

  });


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
}