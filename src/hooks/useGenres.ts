import { mdbApi } from "@/api/theMovieDbApi";
import { GenresResponse } from "@/interfaces/genre.interface";
import { setMovieGenres, setTvGenres } from "@/slices/genresSlice";
import { useEffect } from "react";
import { useDispatch } from 'react-redux';


export function useGenres() {

  const dispatch = useDispatch();


  const getMovieGenres = async () => {
    const movieGenresResponse = await mdbApi.get<GenresResponse>(
      "/genre/movie/list"
    );
    dispatch(setMovieGenres(movieGenresResponse.data.genres))
  };

  const getTvGenres = async () => {
    const tvGenresResponse = await mdbApi.get<GenresResponse>(
      "/genre/tv/list"
    );
    dispatch(setTvGenres(tvGenresResponse.data.genres))
  };

  useEffect(() => {
    getMovieGenres();
    getTvGenres();
  }, []);
}
