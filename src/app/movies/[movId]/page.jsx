import NavbarList from "@/components/NavbarList";
import { getMoviesById } from "@/services/movie.service";

const MovieDetails = async ({ params }) => {
    console.log('params', params.movId);
    const movieDetail = await getMoviesById(params.movId);
    console.log('movie', movieDetail)
    return (

        <div>
            
            <div className="bg-[orange] w-[100%] h-[100vh]">
                <div className="bg-gray-100 dark:bg-gray-800 py-8">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col md:flex-row -mx-4">
                            <div className="md:flex-1 mr-7">
                                <div className="h-[660px] w-[780px] rounded-lg bg-gray-300 dark:bg-gray-700 ml-[-80px] mb-4">
                                    <img className="w-full h-full object-cover" src={movieDetail.image} alt="Product Image" />
                                </div>
                            </div>
                            <div className="md:flex-1 px-4">
                                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{movieDetail.director}</h2>
                                <p className="text-gray-600 dark:text-gray-300 text-sm">
                                    {movieDetail.runtime}
                                </p>
                                <p className="text-gray-600 dark:text-gray-300 text-sm">
                                    {movieDetail.genre}
                                </p>
                                <p className="text-gray-600 dark:text-gray-300 text-lg">Genre</p>
                                <div className="flex mb-4">
                                    <div className="mr-4">
                                        <span className="font-bold text-gray-700 dark:text-gray-300">Star rate</span>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{movieDetail.movie_title}({movieDetail.released_year})</h2>
                                </div>
                                <div>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                                        {movieDetail.description}
                                    </p>
                                </div>

                                <div className="text-gray-600 dark:text-gray-300 text-sm mt-20">
                                    Date of release movie
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
            </div>
        </div>

    );
}
export default MovieDetails