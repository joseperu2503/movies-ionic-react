import { Genre } from "@/interfaces/genre.interface";
import { Movie } from "@/interfaces/movie.interface";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface MoviesState {
  movies: {
    [key: string]: {
      page: number;
      totalPages: number;
      movies: Movie[];
    }
  };
}

const initialState: MoviesState = {
  movies: {},
}

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {

    setMovies: (state, action: PayloadAction<{
      storeKey: string;
      movies: Movie[];
      page: number;
      totalPages: number;
    }>) => {
      state.movies[action.payload.storeKey] = {
        page: action.payload.page,
        totalPages: action.payload.totalPages,
        movies: action.payload.movies,
      }
    },
  },
})

export const { setMovies } = moviesSlice.actions

export const moviesReducer = moviesSlice.reducer
