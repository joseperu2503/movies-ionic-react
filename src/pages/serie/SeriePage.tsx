import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { mdbApi } from "../../api/theMovieDbApi";
import { MovieDetail } from "../../interfaces/movie.interface";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { TvSerieDetail } from "../../interfaces/tvSerie.interface";

const SeriePage: React.FC = () => {
  const { serieId } = useParams<{ serieId: string }>();
  const [serie, setSerie] = useState<TvSerieDetail>();

  useEffect(() => {
    getMovie();
  }, []);

  const getMovie = async () => {
    const movieResponse = await mdbApi.get<TvSerieDetail>(`/movie/${serieId}`);
    setSerie(movieResponse.data);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>

        {serie && (
          <div>
            <div>{serie?.title}</div>
            <div>{serie?.overview}</div>
            <img
              src={`https://image.tmdb.org/t/p/w500${serie?.backdrop_path}`}
              alt=""
              className="w-40 h-60 object-cover"
            />
            <img
              src={`https://image.tmdb.org/t/p/w500${serie?.poster_path}`}
              alt=""
              className="w-40 h-60 object-cover"
            />
            <div>{serie?.release_date.toString()}</div>
            <div>{serie?.original_language}</div>
            <div>
              {serie?.genres.map((genre) => {
                return <div key={genre.id}>{genre.name}</div>;
              })}
            </div>
          </div>
        )}
      </IonContent>
    </IonPage>
  );
};

export default SeriePage;
