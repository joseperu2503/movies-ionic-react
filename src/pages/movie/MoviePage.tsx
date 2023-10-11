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
import { Credits } from "../../interfaces/credits.interface";

const MoviePage: React.FC = () => {
  const { movieId } = useParams<{ movieId: string }>();
  const [movie, setMovie] = useState<MovieDetail>();
  const [credits, setCredits] = useState<Credits>();

  useEffect(() => {
    getMovie();
    getMovieCredits();
  }, []);

  const getMovie = async () => {
    const movieResponse = await mdbApi.get<MovieDetail>(`/movie/${movieId}`);
    setMovie(movieResponse.data);
  };

  const getMovieCredits = async () => {
    const creditsResponse = await mdbApi.get<Credits>(
      `/movie/${movieId}/credits`
    );

    setCredits(creditsResponse.data);
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

        {movie && (
          <div>
            <div>{movie?.title}</div>
            <div>{movie?.overview}</div>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie?.backdrop_path}`}
              alt=""
              className="w-40 h-60 object-cover"
            />
            <img
              src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
              alt=""
              className="w-40 h-60 object-cover"
            />
            <div>{movie?.release_date.toString()}</div>
            <div>{movie?.original_language}</div>
            <div>
              {movie?.genres.map((genre) => {
                return <div key={genre.id}>{genre.name}</div>;
              })}
            </div>
            <div className="overflow-x-scroll">
              <div className="flex w-max gap-4">
                {credits?.cast.map((actor) => {
                  return (
                    <div key={actor.id} className="w-20">
                      {/* <div>{actor.name}</div> */}
                      <img
                        src={`https://image.tmdb.org/t/p/w500${actor?.profile_path}`}
                        alt=""
                        className="w-20 h-20 object-cover rounded-full"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </IonContent>
    </IonPage>
  );
};

export default MoviePage;
