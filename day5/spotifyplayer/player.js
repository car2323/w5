$(document).on("ready", function () {
      $(".js-btn2").hide();
  $(".js-btn").on("click", function (event) {
      event.preventDefault();
      console.log($(event.currentTarget).data("artist-id"));
      $(".js-btn2").show();
    $.ajax({
      url: "https://api.spotify.com/v1/search?type=track&query="+ $(".js-text_input").val(),
      success: function (all_tracks) {
          console.log("It worked!");
          var one_track = all_tracks.tracks.items[0];
          var id_artist = one_track.artists[0].id;
          //console.log (id_artist);
          //console.log(one_track);
          displayinfo(one_track);
          play_pause(one_track);
          $(".play_pause").on("timeupdate",printTime);
          $(".artist_info").on("click", function(){
            //$(".js-text_input").val($(event.currentTarget).data("artist-id"));
                $.ajax({
                   url: "https://api.spotify.com/v1/artists/"+id_artist,
                   success: function (artist) {
                   var one_artist = artist;
                   display_artist_info(one_artist);
                   },
                  error:function (artist) {
                  console.log("It failed. :( ");
                  console.log(theError.responseJSON);
                  }
                }); 
          });
          $(".js-btn2").on("click", function(){
            var all_tracks_array = all_tracks.tracks.items;
            display_more_info(all_tracks_array);
          });
           
           //console.log(one_track);                   
      }, /*Cierre del evento success*/
      error: function (all_track) {
        console.log("It failed. :( ");
        console.log(theError.responseJSON);
      } /*cierre del evento error*/
    });
  });
});
function displayinfo (one_track){
    var string = "";
    if (one_track.album.images.length > 0)
    {
        string=one_track.album.images[0].url;
    }
    else
    {
        string="";
    } 
    console.log(one_track);
    $(".title").text(one_track.name);
   // console.log(one_track.album.name);
   // console.log(one_track.artists[0].name);
    $(".author").empty();
    $(".author").append('<a href="#" class="artist_info">' + one_track.artists[0].name+ '</a>');
    $(".img_front_disc").prop("src", string);
};
function play_pause (one_track){
  var string= one_track.preview_url;
  //console.log(string);
  $(".btn-play").removeClass("disabled");
  $(".play_pause").prop("src", string);
  var pause_play_var = false;
  $(".btn-play").on("click", function(){
    if (pause_play_var === false)
    {
       $(".play_pause").trigger("play");
       $(".btn-play").addClass("playing");
       pause_play_var = true;
    }
    else
    { 
       $(".play_pause").trigger("pause");
       $(".btn-play").removeClass("playing");      
       pause_play_var = false;
    }
  });
};
function printTime(){
  var current = $(".play_pause").prop("currentTime");
  //console.debug("current time: "+ current);
  $(".progressbar").prop("value",current);
}
function display_artist_info(one_artist){
  //console.log(one_artist);
  //console.log("im ready to show modal");

  $(".artist_name_title").empty();
  $(".modal-body").empty();
  $(".artist_name_title").text(one_artist.name);
  $(".modal-body").append('<img src="'+ one_artist.images[0].url+'" width="250px" height="200px">');
  if (one_artist.genres.length > 0)
  {
      $(".modal-body").append('<p>'+ "Genres: "+ one_artist.genres[0]+'</p>');
  }
  $(".modal-body").append('<p>'+"Follower: "+ one_artist.followers.total+'</p>');
  $(".modal-body").append('<p>'+"Popularity: "+ one_artist.popularity+'</p>');
  $(".modal").modal("show");
};
function display_more_info(all_tracks){
  //console.log(all_tracks);
  //console.log("im ready to show modal");
  $(".artist_name_title").empty();
  $(".modal-body").empty();
  $(".artist_name_title").text("More Artists");
  $(".modal-body").empty();
  all_tracks.forEach(function(one_track, i) {
    if(i!==0){
                            //data-artist-id="${oneArtistp.id}"   
      $(".modal-body").append("<p><a href='#'class='js-recall_button' data-track-name='" + one_track.name + "'> Artist:  " + one_track.name +'</a></p>');
      console.log(one_track);
    }
  });
  console.log(all_tracks);
  $(".modal").modal("show");
  $(".js-recall_button").on("click",function(){
    $(".modal").modal("hide");
    var new_track = $(event.currentTarget).data("track-name");
    $(".js-text_input").val(new_track);
    $(".js-btn").trigger("click");
  });
};
