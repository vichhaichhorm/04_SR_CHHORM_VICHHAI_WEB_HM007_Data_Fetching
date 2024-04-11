// get all movie 
export async function getAllMovies() {
    const res = await fetch('https://movie-api-get-only-bmc3.vercel.app/api');
    const data = res.json();
    // console.log("Data",data);
    return data;
}

// dynamic get type movie
export async function getByGenreMovies(genre){
    const res = await fetch(`https://movie-api-get-only-bmc3.vercel.app/api?genre=${genre}`);
    const data = res.json();
    // console.log("genre: ",genre);
    return data;
}

// movie detail 
export async function getMoviesById(movie_id){
    const res = await fetch('https://movie-api-get-only-bmc3.vercel.app/api/movies'+movie_id);
    const data = res.json();
    return data;
}
