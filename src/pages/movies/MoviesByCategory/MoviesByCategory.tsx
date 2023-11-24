import {
  InfiniteScrollCustomEvent,
  IonContent,
  IonHeader,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useEffect, useState } from "react";
import BackButton from "@/components/BackButton/BackButton";
import { ResponsePaginate } from "@/interfaces/responsePaginate.interface";
import { Movie } from "@/interfaces/movie.interface";
import { mdbApi } from "@/api/theMovieDbApi";
import { MovieSerieItem } from "@/components/MovieSerieItem/MovieSerieItem";
import { getDate, getPosterPath } from "@/utils/utils";
import { SubscriptionType } from "@/components/SubscriptionTag/SubscriptionTag";
import { useAppSelector } from "@/store/store";
import { setMovies } from "@/slices/moviesSlice";
import { useDispatch } from "react-redux";

interface Props {
  url: string;
  params?: Object;
  title: string;
  storeKey: string;
}

const MoviesByCategory = ({ url, params, title, storeKey }: Props) => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState<boolean>(false);

  const moviesStore = useAppSelector((state) => state.movies);

  const { movies, page, totalPages } = moviesStore.movies[storeKey] ?? {
    movies: [],
    page: 1,
    totalPages: 2,
  };

  const getMovies = async () => {
    if (page <= totalPages && !loading) {
      setLoading(true);
      const moviesResponse = await mdbApi.get<ResponsePaginate<Movie>>(url, {
        params: {
          page: page,
          ...params,
        },
      });
      dispatch(
        setMovies({
          movies: [...movies, ...moviesResponse.data.results],
          page: page + 1,
          totalPages: moviesResponse.data.total_pages,
          storeKey: storeKey,
        })
      );
      setLoading(false);
    }
  };

  const onIonInfinite = (ev: InfiniteScrollCustomEvent) => {
    getMovies();
    ev.target.complete();
  };

  useEffect(() => {
    if (page == 1) {
      getMovies();
    }
  }, []);

  return (
    <IonPage>
      <IonHeader className="ion-no-border" collapse="fade">
        <IonToolbar className="toolbar-detail">
          <BackButton />
          <IonTitle>
            <span className="text-base font-semibold">{title}</span>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="px-6 py-8">
          <div className="flex flex-col gap-4">
            {movies.map((movie, index) => {
              return (
                <MovieSerieItem
                  title={movie.title}
                  key={index}
                  overview={movie.overview}
                  posterPath={getPosterPath(movie.poster_path)}
                  subscriptionType={SubscriptionType.free}
                  year={getDate(movie.release_date)}
                  voteAverage={movie.vote_average}
                  genres={movie.genre_ids}
                />
              );
            })}
          </div>
        </div>
        <IonInfiniteScroll
          onIonInfinite={onIonInfinite}
          disabled={page > totalPages}
        >
          <IonInfiniteScrollContent loadingSpinner="bubbles"></IonInfiniteScrollContent>
        </IonInfiniteScroll>
      </IonContent>
    </IonPage>
  );
};

export { MoviesByCategory };