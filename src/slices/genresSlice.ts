import { Genre } from "@/interfaces/genre.interface";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface GenresState {
  movieGenres: Genre[];
}

const initialState: GenresState = {
  movieGenres: [],
}

export const genresSlice = createSlice({
  name: 'genres',
  initialState,
  reducers: {
    setMovieGenres: (state, action: PayloadAction<Genre[]>) => {
      state.movieGenres = action.payload
    },

  }
})

export const { setMovieGenres } = genresSlice.actions

export const genresReducer = genresSlice.reducer
