import { useParams } from "react-router";
import { ItemsByCategoryPage } from "../ItemsByCategoryPage/ItemsByCategoryPage";
import { useAppSelector } from "@/store/store";
import { Genre } from "@/interfaces/genre.interface";

interface Props {
  type: "movie" | "tv";
}

const ItemsByGenrePage = ({ type }: Props) => {
  const { genreId } = useParams<{ genreId: string }>();

  const movieGenres = useAppSelector((state) => state.genres.movieGenres);

  const genre: Genre | undefined = movieGenres.find(
    (g) => g.id == parseInt(genreId)
  );
  return (
    <ItemsByCategoryPage
      url="/discover/movie"
      title={genre?.name ?? ""}
      params={{
        with_genres: genreId,
      }}
      storeKey={genre?.name.toLowerCase() ?? ""}
      type="movie"
    ></ItemsByCategoryPage>
  );
};

export { ItemsByGenrePage };
