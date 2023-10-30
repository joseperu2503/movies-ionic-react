import {
  IonContent,
  IonHeader,
  IonPage,
  IonRouterLink,
  IonTitle,
  IonToolbar,
  useIonRouter,
} from "@ionic/react";
import "./Tab1.css";
import { useEffect, useState } from "react";
import { mdbApi } from "../api/theMovieDbApi";
import { ResponsePaginate } from "../interfaces/responsePaginate.interface";
import { Movie } from "../interfaces/movie.interface";
import { TvSerie } from "../interfaces/tvSerie.interface";
import { Genre, GenresResponse } from "../interfaces/genre.interface";
import { Slideshow } from "../components/Slideshow/Slideshow";

const Tab1: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [series, setSeries] = useState<TvSerie[]>([]);
  const [movieGenres, setMovieGenres] = useState<Genre[]>([]);
  const [tvSerieGenres, setTvSerieGenres] = useState<Genre[]>([]);
  const router = useIonRouter();

  useEffect(() => {
    getMovies();
    getSeries();
    getMovieGenres();
    getTvSeriesGenres();
  }, []);

  const getMovies = async () => {
    const moviesResponse = await mdbApi.get<ResponsePaginate<Movie>>(
      "/movie/now_playing"
    );
    setMovies(moviesResponse.data.results);
  };

  const getSeries = async () => {
    const seriesResponse = await mdbApi.get<ResponsePaginate<TvSerie>>(
      "/tv/popular"
    );
    setSeries(seriesResponse.data.results);
  };

  const getMovieGenres = async () => {
    const movieGenresResponse = await mdbApi.get<GenresResponse>(
      "/genre/movie/list"
    );
    setMovieGenres(movieGenresResponse.data.genres);
  };

  const getTvSeriesGenres = async () => {
    const tvSerieGenresResponse = await mdbApi.get<GenresResponse>(
      "/genre/tv/list"
    );
    setTvSerieGenres(tvSerieGenresResponse.data.genres);
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

        <Slideshow></Slideshow>
        <div>Movies</div>
        <div className="flex overflow-x-auto ">
          {movies.map((movie, index) => {
            return (
              <div
                className="w-40 min-w-max"
                onClick={() => router.push(`/tab1/movie/${movie.id}`)}
                key={movie.id}
              >
                {/* <div>{movie.title}</div> */}
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt=""
                  className="w-40 h-60 object-cover"
                />
              </div>
            );
          })}
        </div>

        <div>Series</div>
        <div className="flex overflow-x-auto ">
          {series.map((serie) => {
            return (
              <div
                className="w-40 min-w-max"
                key={serie.id}
                onClick={() => router.push(`/tab1/serie/${serie.id}`)}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}
                  alt=""
                  className="w-40 h-60 object-cover"
                />
              </div>
            );
          })}
        </div>

        <div>Movie genres</div>
        <div className="flex flex-col">
          {movieGenres.map((movieGenre) => {
            return <div key={movieGenre.id}>{movieGenre.name}</div>;
          })}
        </div>

        <div>Series genres</div>
        <div className="flex flex-col">
          {tvSerieGenres.map((tvSerieGenre) => {
            return <div key={tvSerieGenre.id}>{tvSerieGenre.name}</div>;
          })}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
