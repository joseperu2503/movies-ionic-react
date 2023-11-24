import { useParams } from "react-router";
import { MoviesByCategoryPage } from "../MoviesByCategoryPage/MoviesByCategoryPage";
import { useAppSelector } from "@/store/store";
import { Genre } from "@/interfaces/genre.interface";

const MoviesByGenrePage = () => {
  const { genreId } = useParams<{ genreId: string }>();

  const movieGenres = useAppSelector((state) => state.genres.movieGenres);

  const genre: Genre | undefined = movieGenres.find(
    (g) => g.id == parseInt(genreId)
  );
  return (
    <MoviesByCategoryPage
      url="/discover/movie"
      title={genre?.name ?? ""}
      params={{
        with_genres: genreId,
      }}
      storeKey={genre?.name.toLowerCase() ?? ""}
    ></MoviesByCategoryPage>
  );
};

export { MoviesByGenrePage };
