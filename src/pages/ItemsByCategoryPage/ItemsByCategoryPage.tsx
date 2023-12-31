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
import { useMovie } from "@/hooks/useMovie";
import { useTvSerie } from "@/hooks/useTvSerie";

interface Props {
  url: string;
  params?: Object;
  title: string;
  storeKey: string;
  type: "movie" | "tv";
}

const ItemsByCategoryPage = ({ url, params, title, storeKey, type }: Props) => {
  const { getItems, items, page, totalPages } =
    type == "movie"
      ? useMovie({
          storeKey,
          url,
          params,
        })
      : useTvSerie({
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
            {items.map((item) => {
              return <MovieSerieItem item={item} key={item.id} type={type} />;
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

export { ItemsByCategoryPage };
