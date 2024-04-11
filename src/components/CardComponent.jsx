import { getAllMovies, getByActionMovies, getByAnimeMovies, getByDramaMovies, getByGenreMovies, getByHollywoodMovies, getByscienceFictionMovies } from '@/services/movie.service';
import React from 'react'

const CardComponet = async () => {
  const data = await getAllMovies();
  const payloadFiter = [...new Set(data.payload.map(m => m.genre))]

  const getAllMoviesByGenre = async (genre) => {
    const movies = await getByGenreMovies(genre);
    return movies.payload.map((data) => {
      return (
        <div className='w-[1400px] h-auto m-auto cursor-pointer'>
          <div className='flex flex-nowrap overflow-x-scroll  overflow-hidden no-scrollbar'>
            <div key={data?.id} className='card-item h-[400px] flex flex-none'>
              <div className="bg-white rounded-lg shadow-lg w-[350px] p-[15px]">
                <img src={data.image} alt="Movie Poster" className="w-full h-[200px] object-cover" />
                <div className="pt-4">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2 line-clamp-1">{data.movie_title}</h2>
                  <p className="text-gray-700 leading-tight text-justify line-clamp-5">
                    {data.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    })
  }
  return (
    <div>
      <div className='w-[1400px] h-[80px] m-auto pt-[20px]'>
        <span className='text-[25px] text-white font-bold'>All Movies &gt;</span>
      </div>
      {/* card items */}
      <div className='w-[1400px] h-auto m-auto cursor-pointer'>
        <div className='flex flex-nowrap gap-x-10 overflow-x-scroll w-full overflow-hidden no-scrollbar'>
          {data.payload.map((data) => (
            <div key={data?.id} className='card-item h-[400px] flex flex-none'>
              <div className="bg-white rounded-lg shadow-lg w-[350px] p-[15px]">
                <img src={data.image} alt="Mountain" class="w-full h-[200px] object-cover" />
                <div className="pt-4">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2 line-clamp-1">{data.movie_title}</h2>
                  <p className="text-gray-700 leading-tight text-justify line-clamp-5">
                    {data.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='w-[1400px] h-auto m-auto cursor-pointer overflow-x-scroll overflow-hidden no-scrollbar'>
        {payloadFiter.map((genre) => (
          <div>
            <div className='w-[1400px]  h-[80px] m-auto pt-[20px]'>
              <span className='text-[25px]  text-white font-bold'>{genre} &gt;</span>
            </div>
            <div className='flex flex-nowrap gap-x-10 overflow-x-scroll overflow-hidden no-scrollbar'>
              {getAllMoviesByGenre(genre)}
            </div>
          </div>
        ))}
      </div>
   
    </div>
  )
}

export default CardComponet;






