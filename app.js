$(document).ready(function(){
    var apikey="93e5903d"
   
    $("#form").submit(function(e){
        e.preventDefault()
        var inputValue=$("#inp").val()

        var url="http://www.omdbapi.com/?apikey="+apikey
        $.ajax({
            method:'GET',
            url:url+"&t="+inputValue,
            success:function(data){
                console.log(data)
                console.log(data.Title)
                let movieHtml=`<img style="    border-radius: 16px;width: 350px;height: 250px;" src=${data.Poster}>
                                <h2>Title :${data.Title}</h2>
                                <strong>Year :${data.Year}</strong><br>
                                <strong>Imdb :${data.imdbRating}<//strong>
                                <p>Actors :${data.Actors}</p>
                                <p>Director :${data.Director}</p>
                                <p>Genre :${data.Genre}</p>
                                <p>Story :${data.Plot}</p>
                                <a style="text-decoration:none;" href="https://www.imdb.com/title/${data.imdbID}/" target="_blank">View Details</a>
                                

                `
               $("#content").html(movieHtml);
            }
        })
        
    })
})
