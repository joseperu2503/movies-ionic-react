import { Genre } from "@/interfaces/genre.interface";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface GenresState {
  movieGenres: Genre[];
  tvGenres: Genre[];
}

const initialState: GenresState = {
  movieGenres: [],
  tvGenres: [],
}

export const genresSlice = createSlice({
  name: 'genres',
  initialState,
  reducers: {
    setMovieGenres: (state, action: PayloadAction<Genre[]>) => {
      state.movieGenres = action.payload
    },
    setTvGenres: (state, action: PayloadAction<Genre[]>) => {
      state.tvGenres = action.payload
    },
  }
})

export const { setMovieGenres, setTvGenres } = genresSlice.actions

export const genresReducer = genresSlice.reducer
