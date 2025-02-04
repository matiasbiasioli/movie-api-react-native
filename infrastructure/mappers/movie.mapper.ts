import { MovieDbCast } from "../interfaces/movieActors-response";
import { Result } from "../interfaces/movieDb-response";
import { MovieDBDetailsResponse } from "../interfaces/movieDetails-response";
import {
  ActorsDetails,
  MovieDetails,
  Movies,
} from "../interfaces/movies-interface";

export class MovieMapper {
  static fromTheMovideDBToMovie = (movie: Result): Movies => {
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
  static fromTheMovideDBToMovieDetails = (
    movie: MovieDBDetailsResponse
  ): MovieDetails => {
    return {
      id: movie.id,
      title: movie.title,
      releaseDate: movie.release_date,
      description: movie.overview,
      calification: movie.vote_average,
      poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
      genres: movie.genres.map((g) => g.name),
      duration: movie.runtime,
      originCompanies: movie.production_companies.map((oC) => oC.name),
      productionCountry: movie.production_countries.map((pC) => pC.name),
      originalTitle: movie.original_title,
    };
  };
  static fromTheMovieActorsDbToActors = (
    actor: MovieDbCast
  ): ActorsDetails => {
    return {
      id: actor.id,
      name: actor.name,
      character: actor.character,
      poster: `https://image.tmdb.org/t/p/w500${actor.profile_path}`
    }
  };
}
