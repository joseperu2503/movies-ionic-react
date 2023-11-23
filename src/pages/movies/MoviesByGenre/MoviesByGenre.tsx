import { useParams } from "react-router";
import { MoviesByCategory } from "../MoviesByCategory/MoviesByCategory";
import { useAppSelector } from "@/store/store";

const MoviesByGenre = () => {
  const { genreId } = useParams<{ genreId: string }>();

  const movieGenres = useAppSelector((state) => state.genres.movieGenres);

  const title: string =
    movieGenres.find((g) => g.id == parseInt(genreId))?.name ?? "";
  return (
    <MoviesByCategory
      url="/discover/movie"
      title={title}
      params={{
        with_genres: genreId,
      }}
    ></MoviesByCategory>
  );
};

export { MoviesByGenre };
