
let movieList = document.getElementById('movieList')
let movieShowcase = document.getElementById('movieShowcase')


let MOVIES_URL = "http://www.omdbapi.com/?s=batman&apikey=" + myApiKey

function performjQueryLibrary(){
let count = 1
$.get(MOVIES_URL,function(movies){

  movies.Search.map(function(movie){

 let movieItems = `
 <div id='imgDiv' class="card" style="width: 14rem;">
   <img id="pictures" class="card-img-top" src="${movie.Poster}" alt="Card image cap">
   <div class="card-body">
     <p class="card-text"><a id="${count}" href="#">${movie.Title}</a></p>
   </div>
 </div>
 `

  movieList.insertAdjacentHTML("beforeend",movieItems)


  // ===========================

let titleMovie = document.getElementById(count)
count++
titleMovie.addEventListener('click',function() {

  movieShowcase.innerHTML = ""
  let movieDetail = "http://www.omdbapi.com/?i=" + movie.imdbID + "&apikey="+ myApiKey
  $.get(movieDetail,function(movie){

    let showcaseItems = `
    <div id='imgDiv' class="card" style="width: 16rem;">
      <img id="pictures" class="card-img-top" src="${movie.Poster}" alt="Card image cap">
      <div class="card-body">
        <p class="card-text"><a id="titleMovie" href="#">${movie.Title}</a></p>
        <li class="movieListItems">Year : ${movie.Year}</li>
        <li class="movieListItems">Rated : ${movie.Rated}</li>
        <li class="movieListItems">Released : ${movie.Released}</li>
        <li class="movieListItems">Director : ${movie.Director}</li>
      </div>
    </div>
    `
     movieShowcase.insertAdjacentHTML("beforeend",showcaseItems)

  })


  })


})

// ===========================
})  // $.get closing



} // performjQueryLibrary closing

performjQueryLibrary()
