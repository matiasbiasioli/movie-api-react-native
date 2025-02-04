import { useQuery } from "@tanstack/react-query";
import getMovieDetails from "@/core/actions/movies/getMovieDetails.actions";
import getActorsDetails from "@/core/actions/movies/getActorsDetails.actions";

const useMovie = (id: number) => {
  const detailsQuery = useQuery({
    queryKey: ["movie", id],
    queryFn: () => getMovieDetails(id),
    staleTime: 1000 * 60 * 60 * 24,
  });
  const actorsQuery = useQuery({
    queryKey: ['actors', id, 'cast' ],
    queryFn: ()=> getActorsDetails(id),
    staleTime: 1000 * 60 * 60 * 60,
  })
  return {
    detailsQuery,
    actorsQuery
  };
};

export default useMovie;
