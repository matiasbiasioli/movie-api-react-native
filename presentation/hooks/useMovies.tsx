import { nowPlayingActions } from "@/core/actions/movies/now-playing.actions";
import popularActionsMovies from "@/core/actions/movies/popular.actions";
import topRatedMovies from "@/core/actions/movies/top-rated.actions";
import upcomingAction from "@/core/actions/movies/upcoming.actions";
import { useQuery } from "@tanstack/react-query";

const useMovies = () => {
  const nowPlayingQuery = useQuery({
    queryKey: ["movies", "nowPlaying"],
    queryFn: nowPlayingActions,
    staleTime: 1000 * 60 * 60 * 24,
  });
  const popularQuery = useQuery({
    queryKey: ["movies", "popular"],
    queryFn: popularActionsMovies,
    staleTime: 1000 * 60 * 60 * 24,
  });
  const topRatedQuery = useQuery({
    queryKey: ["movies", "top-rated"],
    queryFn: topRatedMovies,
    staleTime: 1000 * 60 * 60 * 24,
  });
  const upcomingQuery = useQuery({
    queryKey: ["movies", "upcoming"],
    queryFn: upcomingAction,
    staleTime: 1000 * 60 * 60 * 24,
  });
  return {
    nowPlayingQuery,
    popularQuery,
    topRatedQuery,
    upcomingQuery,
  };
};

export default useMovies;
