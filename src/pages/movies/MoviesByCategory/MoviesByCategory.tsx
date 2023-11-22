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

interface Props {
  url: string;
  params?: Object;
  title: string;
}

const MoviesByCategory = ({ url, params, title }: Props) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);

  const getMovies = async () => {
    if (page <= totalPages && !loading) {
      setLoading(true);
      const moviesResponse = await mdbApi.get<ResponsePaginate<Movie>>(url, {
        params: {
          page: page,
          ...params,
        },
      });
      setPage(page + 1);
      setTotalPages(moviesResponse.data.total_pages);

      setMovies([...movies, ...moviesResponse.data.results]);
      setLoading(false);
    }
  };

  const onIonInfinite = (ev: InfiniteScrollCustomEvent) => {
    getMovies();
    ev.target.complete();
  };

  useEffect(() => {
    getMovies();
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
