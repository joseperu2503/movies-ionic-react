import { mdbApi } from "@/api/theMovieDbApi";
import { Movie } from "@/interfaces/movie.interface";
import { ResponsePaginate } from "@/interfaces/responsePaginate.interface";
import { setMovies } from "@/slices/moviesSlice";
import { useAppSelector } from "@/store/store";
import { useState } from "react";
import { useDispatch } from 'react-redux';

interface Props {
  url: string;
  params?: Object;
  storeKey: string;
}


export function useMovie({ url, params, storeKey }: Props) {

  const dispatch = useDispatch();

  const [loading, setLoading] = useState<boolean>(false);

  const moviesStore = useAppSelector((state) => state.movies);

  const { items, page, totalPages } = moviesStore.movies[storeKey] ?? {
    items: [],
    page: 1,
    totalPages: 2,
  };

  const getItems = async () => {
    if (page <= totalPages && !loading) {
      setLoading(true);
      const moviesResponse = await mdbApi.get<ResponsePaginate<Movie>>(url, {
        params: {
          page: page,
          ...params,
        },
      });
      dispatch(
        setMovies({
          items: [...items, ...moviesResponse.data.results],
          page: page + 1,
          totalPages: moviesResponse.data.total_pages,
          storeKey: storeKey,
        })
      );
      setLoading(false);
    }
  };

  return {
    getItems,
    items,
    page,
    totalPages,
  }
}
