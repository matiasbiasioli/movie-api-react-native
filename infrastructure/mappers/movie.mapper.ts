import { Result } from "../interfaces/movieDb-response";
import { movies } from "../interfaces/movies-interface";

export class MovieMapper {
  static fromTheMovideDBToMovie = (movie: Result): movies => {
    return {
      id: movie.id,
      title: movie.title,
      releaseDate: movie.release_date,
      description: movie.overview,
      calification: movie.vote_average,
      poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
    };
  };
}
