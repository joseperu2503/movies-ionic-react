import { Genre } from "@/interfaces/genre.interface";
import { Movie } from "@/interfaces/movie.interface";
import { TvSerie } from "@/interfaces/tvSerie.interface";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface MoviesState {
  movies: {
    [key: string]: {
      page: number;
      totalPages: number;
      items: Movie[];
    }
  };
  tvSeries: {
    [key: string]: {
      page: number;
      totalPages: number;
      items: TvSerie[];
    }
  };
}

const initialState: MoviesState = {
  movies: {},
  tvSeries: {}
}

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {

    setMovies: (state, action: PayloadAction<{
      storeKey: string;
      items: Movie[];
      page: number;
      totalPages: number;
    }>) => {
      state.movies[action.payload.storeKey] = {
        page: action.payload.page,
        totalPages: action.payload.totalPages,
        items: action.payload.items,
      }
    },

    setTvSeries: (state, action: PayloadAction<{
      storeKey: string;
      items: TvSerie[];
      page: number;
      totalPages: number;
    }>) => {
      state.tvSeries[action.payload.storeKey] = {
        page: action.payload.page,
        totalPages: action.payload.totalPages,
        items: action.payload.items,
      }
    },
  },
})

export const { setMovies, setTvSeries } = moviesSlice.actions

export const moviesReducer = moviesSlice.reducer
