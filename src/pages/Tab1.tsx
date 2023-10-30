import {
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonRouterLink,
  IonSearchbar,
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
import { HorizontalScroll } from "../components/HorizontalScroll/HorizontalScroll";
import { Icon } from "@iconify/react";

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
      <IonHeader translucent={true}>
        <IonToolbar class="h-16">
          <div className="ps-4 flex items-center gap-2">
            <Icon icon="mdi:movie-open-settings" className="w-5 h-5" />
            <span className="font-semibold text-lg">Movie Plus</span>
          </div>
        </IonToolbar>
        <IonToolbar>
          <IonSearchbar placeholder="Search a tittle.."></IonSearchbar>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="mt-6">
          <Slideshow></Slideshow>
        </div>
        <div className="flex justify-between px-6 mt-6">
          <span className="font-semibold text-white">Popular</span>
          <span className="text-sm text-primary font-medium">See All</span>
        </div>
        <div className="mt-4">
          <HorizontalScroll url="/movie/popular"></HorizontalScroll>
        </div>
        <div className="flex justify-between px-6 mt-6">
          <span className="font-semibold text-white">Now Playing</span>
          <span className="text-sm text-primary font-medium">See All</span>
        </div>
        <div className="mt-4">
          <HorizontalScroll url="/movie/now_playing"></HorizontalScroll>
        </div>
        <div className="flex justify-between px-6 mt-6">
          <span className="font-semibold text-white">Top Rated</span>
          <span className="text-sm text-primary font-medium">See All</span>
        </div>
        <div className="mt-4">
          <HorizontalScroll url="/movie/top_rated"></HorizontalScroll>
        </div>
        <div className="flex justify-between px-6 mt-6">
          <span className="font-semibold text-white">Upcoming</span>
          <span className="text-sm text-primary font-medium">See All</span>
        </div>
        <div className="mt-4">
          <HorizontalScroll url="/movie/upcoming"></HorizontalScroll>
        </div>
        <div className="flex justify-between px-6 mt-6">
          <span className="font-semibold text-white">Popular Series</span>
          <span className="text-sm text-primary font-medium">See All</span>
        </div>
        <div className="mt-4">
          <HorizontalScroll url="/tv/popular"></HorizontalScroll>
        </div>
        <div className="flex justify-between px-6 mt-6">
          <span className="font-semibold text-white">Airing Today</span>
          <span className="text-sm text-primary font-medium">See All</span>
        </div>
        <div className="mt-4">
          <HorizontalScroll url="/tv/airing_today"></HorizontalScroll>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
