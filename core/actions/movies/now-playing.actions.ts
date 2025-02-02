import movieApi from "@/core/api/movieApi";
import { MovieDBResponse } from "@/infrastructure/interfaces/movieDb-response";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";

export const nowPlayingActions = async () => {
  try {
    const {data} = await movieApi.get<MovieDBResponse>("/now_playing");
    // console.log(JSON.stringify(data, null, 2));
    const watchMovies = data.results.map(MovieMapper.fromTheMovideDBToMovie)
    // console.log(watchMovies);
    return watchMovies;
  } catch (error) {
    console.log(error);
    throw "cannot load movies right now";
  }
};

