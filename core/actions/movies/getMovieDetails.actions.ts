import movieApi from "@/core/api/movieApi";
import { MovieDBDetailsResponse } from "@/infrastructure/interfaces/movieDetails-response";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";

const getMovieByIdDetails = async (id: number) => {
  try {
    const { data } = await movieApi.get<MovieDBDetailsResponse>(`${id}`);
    // console.log(data);
    // return data
     return MovieMapper.fromTheMovideDBToMovieDetails(data);
  } catch (error) {
    console.log("cannot load the movie details", error);
  }
};

export default getMovieByIdDetails;
