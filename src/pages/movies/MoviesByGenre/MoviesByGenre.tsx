import { useParams } from "react-router";
import { MoviesByCategory } from "../MoviesByCategory/MoviesByCategory";
import { useAppSelector } from "@/store/store";
import { Genre } from "@/interfaces/genre.interface";

const MoviesByGenre = () => {
  const { genreId } = useParams<{ genreId: string }>();

  const movieGenres = useAppSelector((state) => state.genres.movieGenres);

  const genre: Genre | undefined = movieGenres.find(
    (g) => g.id == parseInt(genreId)
  );
  return (
    <MoviesByCategory
      url="/discover/movie"
      title={genre?.name ?? ""}
      params={{
        with_genres: genreId,
      }}
      storeKey={genre?.name.toLowerCase() ?? ""}
    ></MoviesByCategory>
  );
};

export { MoviesByGenre };
