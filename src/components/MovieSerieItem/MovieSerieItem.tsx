import calendarIcon from "@/assets/calendar.svg";
import filmIcon from "@/assets/film.svg";
import {
  SubscriptionTag,
  SubscriptionType,
} from "@/components/SubscriptionTag/SubscriptionTag";
import { useAppSelector } from "@/store/store";
import { VoteAverage } from "../VoteAverage/VoteAverage";
import { useIonRouter } from "@ionic/react";
import { Movie } from "@/interfaces/movie.interface";
import { TvSerie } from "@/interfaces/tvSerie.interface";
import { getPosterPath } from "@/utils/utils";

interface Props {
  item: Movie | TvSerie;
  type: "movie" | "tv";
}
const MovieSerieItem = ({ item, type }: Props): JSX.Element => {
  const genresStore = useAppSelector((state) => state.genres.movieGenres);

  const genre: string | undefined = genresStore.find(
    (g) => g.id == item.genre_ids[0]
  )?.name;

  const router = useIonRouter();

  const title =
    type == "movie" ? (item as Movie).title : (item as TvSerie).name;
  const year =
    type == "movie"
      ? (item as Movie).release_date
      : (item as TvSerie).first_air_date;

  return (
    <div
      className="flex gap-4"
      onClick={() => router.push(`/${type}/${item.id}`)}
    >
      <div className="relative min-w-[112px] h-[147px]">
        <img
          src={getPosterPath(item.poster_path)}
          className="rounded-xl w-[112px] h-[147px] object-cover"
        />
        <div className="absolute top-2 left-2">
          <VoteAverage voteAverage={item.vote_average}></VoteAverage>
        </div>
      </div>
      <div className="flex flex-col pt-1">
        <SubscriptionTag
          type={
            item.vote_average > 7
              ? SubscriptionType.premium
              : SubscriptionType.free
          }
        />
        <div className="pt-3 font-semibold line-clamp-1 leading-5">{title}</div>
        <div className="flex items-center gap-1 mt-3">
          <img src={calendarIcon} alt="calendar-icon" className="w-4 h-4 " />
          <span className="text-xs text-grey font-medium">{year}</span>
        </div>
        <div className="flex items-center gap-1 mt-3">
          <img src={filmIcon} alt="calendar-icon" className="w-4 h-4 " />
          <span className="text-xs text-grey font-medium">{genre}</span>
        </div>
      </div>
    </div>
  );
};

export { MovieSerieItem };
