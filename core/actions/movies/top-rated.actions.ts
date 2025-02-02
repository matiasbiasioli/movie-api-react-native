import movieApi from '@/core/api/movieApi';
import { MovieDBResponse } from '@/infrastructure/interfaces/movieDb-response';
import { MovieMapper } from '@/infrastructure/mappers/movie.mapper';

const topRatedMovies = async () => {
  try {
    const {data} = await movieApi.get<MovieDBResponse>('/top_rated') 
    const watchMovies = data.results.map(MovieMapper.fromTheMovideDBToMovie)
    return watchMovies
  } catch (error){
    console.log('Top rated movies isnt working', error);
  }
}

export default topRatedMovies