import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  useIonRouter,
} from "@ionic/react";
import { useEffect, useState } from "react";
import { mdbApi } from "../../api/theMovieDbApi";
import { ResponsePaginate } from "../../interfaces/responsePaginate.interface";
import { Movie } from "../../interfaces/movie.interface";
import { TvSerie } from "../../interfaces/tvSerie.interface";
import { Genre, GenresResponse } from "../../interfaces/genre.interface";
import { Slideshow } from "../../components/Slideshow/Slideshow";
import { HorizontalScroll } from "../HomePage/components/HorizontalScroll/HorizontalScroll";
import { Icon } from "@iconify/react";

const HomeTabPage: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [series, setSeries] = useState<TvSerie[]>([]);
  const [movieGenres, setMovieGenres] = useState<Genre[]>([]);
  const [tvSerieGenres, setTvSerieGenres] = useState<Genre[]>([]);
  const router = useIonRouter();

  useEffect(() => {
    // getMovies();
    // getSeries();
    // getMovieGenres();
    // getTvSeriesGenres();
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
      <IonHeader translucent={true} className="ion-no-border">
        <IonToolbar>
          <div className="ps-4 flex items-center gap-2 h-16">
            <Icon icon="mdi:movie-open-settings" className="w-5 h-5" />
            <span className="font-semibold text-lg">Movie Plus</span>
          </div>
        </IonToolbar>
        {/* <IonToolbar>
          <IonSearchbar placeholder="Search a tittle.."></IonSearchbar>
        </IonToolbar> */}
      </IonHeader>
      <IonContent fullscreen>
        <div className="mt-6">
          <Slideshow></Slideshow>
        </div>
        <HorizontalScroll
          url="/movie/popular"
          type="movie"
          label="Popular"
          urlSeeAll="/movies/popular"
        />
        <HorizontalScroll
          url="/movie/now_playing"
          type="movie"
          label="Now Playing"
          urlSeeAll="/movies/now-playing"
        />
        <HorizontalScroll
          url="/movie/top_rated"
          type="movie"
          label="Top Rated"
          urlSeeAll="/movies/top-rated"
        />
        <HorizontalScroll
          url="/movie/upcoming"
          type="movie"
          label="Upcoming"
          urlSeeAll="/movies/upcoming"
        />
        <HorizontalScroll
          url="/tv/popular"
          type="tv"
          label="Popular Series"
          urlSeeAll="/movies/upcoming"
        />
        <HorizontalScroll
          url="/tv/airing_today"
          type="tv"
          label="Airing Today"
          urlSeeAll="/movies/upcoming"
        />
      </IonContent>
    </IonPage>
  );
};

export { HomeTabPage };
