import movieApi from '@/core/api/movieApi'
import { ActorsDBResponse } from '@/infrastructure/interfaces/movieActors-response';
import { MovieMapper } from '@/infrastructure/mappers/movie.mapper';

//Petición HTTP
const getActorsDetails = async(movie_id: number) => {
    try {
        const {data} = await movieApi.get<ActorsDBResponse>(`/${movie_id}/credits`)
        // console.log(JSON.stringify(data, null, 2));   
        // return MovieMapper.fromTheMovieActorsDbToActors(data.cast[])
        return data.cast.map(MovieMapper.fromTheMovieActorsDbToActors)   
    }catch (error){
        console.log('cannot load the movie actors',error);    
    }
}


export default getActorsDetails