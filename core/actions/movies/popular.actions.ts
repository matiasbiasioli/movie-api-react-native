import movieApi from "@/core/api/movieApi";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";
import { MovieDBResponse } from "@/infrastructure/interfaces/movieDb-response";

const popularActionsMovies = async () => {
  try {
    const { data } = await movieApi.get<MovieDBResponse>("/popular");
    // console.log(JSON.stringify(data, null, 2));
    const watchMovies = data.results.map(MovieMapper.fromTheMovideDBToMovie)
    // console.log(watchMovies);
    return watchMovies
  } catch (error) {
    console.log("cant show popular movies", error);
  }
};

export default popularActionsMovies;
