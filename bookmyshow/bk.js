const moviesList = [
    {
        name:"chaava",
        jonor:"comdey"
    },
    {
        name:"mission immposible",
        jonor:"action"
    },
    {
        name:"RRR",
        jonor:"drama"
    },
    {
        name:"F3",
        jonor:"comdey"
    },
    {
        name:"pushpa2 the rule",
        jonor:"drama"
    },
];
const bookMovies = moviesList.map((moviesPlayed)=>{
    return console.log(moviesPlayed.name,moviesPlayed.jonor);    
});

console.log(bookMovies);
