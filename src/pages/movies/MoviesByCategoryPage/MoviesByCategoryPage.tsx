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
import { useEffect } from "react";
import BackButton from "@/components/BackButton/BackButton";
import { MovieSerieItem } from "@/components/MovieSerieItem/MovieSerieItem";
import { getDate, getPosterPath } from "@/utils/utils";
import { SubscriptionType } from "@/components/SubscriptionTag/SubscriptionTag";
import { useMovie } from "@/hooks/useMovie";

interface Props {
  url: string;
  params?: Object;
  title: string;
  storeKey: string;
}

const MoviesByCategoryPage = ({ url, params, title, storeKey }: Props) => {
  const { getItems, items, page, totalPages } = useMovie({
    storeKey,
    url,
    params,
  });

  const onIonInfinite = (ev: InfiniteScrollCustomEvent) => {
    getItems();
    ev.target.complete();
  };

  useEffect(() => {
    if (page == 1) {
      getItems();
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
            {items.map((movie, index) => {
              return (
                <MovieSerieItem
                  title={movie.title}
                  key={index}
                  posterPath={getPosterPath(movie.poster_path)}
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

export { MoviesByCategoryPage };
