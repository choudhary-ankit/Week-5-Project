$("#search").click(function(){
    var titel = $("#search_movie").val();
    console.log(titel)
    $.ajax({
      url: "https://www.omdbapi.com/?i=tt3896198&apikey=21d7e230&t="+titel,
    })
    .done(function(data) {
      $("#type").text(data.Type)
      $("#movie_title").text(data.Title)
      $("#poster").attr("src",data.Poster)
      $("#gener").text(data.Genre)
      $("#director").text(data.Director)
      $("#production").text(data.Production)
      $("#actor").text(data.Actors)
      $("#writer").text(data.Writer)
      $("#release_date").text(data.Released)
      $("#runing_time").text(data.Runtime)
      $("#country").text(data.Country)
      $("#language").text(data.Language)
      $("#box_office").text(data.BoxOffice)
      $("#awards").text(data.Awards)
      $("#imdb_rating").text(data.imdbRating)
      $("#Plot").text(data.Plot)
      console.log(data);
    });
});
$("#game_movie").click(function(){
  var movie_name = $("#game_moviename").val();
  console.log(movie_name)
  $.ajax({
    url: "https://www.omdbapi.com/?i=tt3896198&apikey=21d7e230&t="+movie_name,
  })
  .done(function(data) {
    console.log(data);
    $("#game_result").click(function(){
      var game_actor = $("game_actor").val();
      var game_director = $("game_director").val();
      var game_writer = $("game_writer").val();
      var game_release = $("game_release").val();

      if(game_actor==data.Actors && game_director == data.Director && game_writer == data.Writer && game_release == data.Year){
        alert("congratulation, you have Good knowladge about Movie")
      }
      else{
        alert("you have bad knowladge about this movie")
      }
    })
  });
});