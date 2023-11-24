import { mdbApi } from "@/api/theMovieDbApi";
import { ResponsePaginate } from "@/interfaces/responsePaginate.interface";
import { TvSerie } from "@/interfaces/tvSerie.interface";
import { setTvSeries } from "@/slices/moviesSlice";
import { useAppSelector } from "@/store/store";
import { useState } from "react";
import { useDispatch } from 'react-redux';

interface Props {
  url: string;
  params?: Object;
  storeKey: string;
}


export function useTvSerie({ url, params, storeKey }: Props) {

  const dispatch = useDispatch();

  const [loading, setLoading] = useState<boolean>(false);

  const moviesStore = useAppSelector((state) => state.movies);

  const { items, page, totalPages } = moviesStore.tvSeries[storeKey] ?? {
    items: [],
    page: 1,
    totalPages: 2,
  };

  const getItems = async () => {
    if (page <= totalPages && !loading) {
      setLoading(true);
      const seriesResponse = await mdbApi.get<ResponsePaginate<TvSerie>>(url, {
        params: {
          page: page,
          ...params,
        },
      });
      dispatch(
        setTvSeries({
          items: [...items, ...seriesResponse.data.results],
          page: page + 1,
          totalPages: seriesResponse.data.total_pages,
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
