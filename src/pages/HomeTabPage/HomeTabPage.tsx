import { IonContent, IonHeader, IonPage, IonToolbar } from "@ionic/react";

import { Slideshow } from "@/pages/HomeTabPage/components/Slideshow/Slideshow";
import { HorizontalScroll } from "@/pages/HomeTabPage/components/HorizontalScroll/HorizontalScroll";
import { Icon } from "@iconify/react";
import { useAppSelector } from "@/store/store";

const HomeTabPage: React.FC = () => {
  const movieGenres = useAppSelector((state) => state.genres.movieGenres);

  return (
    <IonPage>
      <IonHeader translucent={true} className="ion-no-border">
        <IonToolbar>
          <div className="flex items-center gap-2 h-16">
            <Icon icon="mdi:movie-open-settings" className="w-5 h-5" />
            <span className="font-semibold text-lg">Movie Plus</span>
          </div>
        </IonToolbar>
        {/* <IonToolbar>
          <IonSearchbar placeholder="Search a tittle.."></IonSearchbar>
        </IonToolbar> */}
      </IonHeader>
      <IonContent fullscreen id="movies-container">
        <div className="mt-6">
          <Slideshow></Slideshow>
        </div>
        <HorizontalScroll
          url="/movie/popular"
          type="movie"
          label="Popular"
          urlSeeAll="/movies/popular"
          storeKey="popular"
        />
        <HorizontalScroll
          url="/movie/now_playing"
          type="movie"
          label="Now Playing"
          urlSeeAll="/movies/now-playing"
          storeKey="now_playing"
        />
        <HorizontalScroll
          url="/movie/top_rated"
          type="movie"
          label="Top Rated"
          urlSeeAll="/movies/top-rated"
          storeKey="top_rated"
        />
        <HorizontalScroll
          url="/movie/upcoming"
          type="movie"
          label="Upcoming"
          urlSeeAll="/movies/upcoming"
          storeKey="upcoming"
        />
        <HorizontalScroll
          url="/tv/popular"
          type="tv"
          label="Popular Series"
          urlSeeAll="/tv/popular"
          storeKey="popular"
        />
        <HorizontalScroll
          url="/tv/airing_today"
          type="tv"
          label="Airing Today Series"
          urlSeeAll="/tv/airing_today"
          storeKey="airing_today"
        />
        <HorizontalScroll
          url="/tv/on_the_air"
          type="tv"
          label="On The Air Series"
          urlSeeAll="/tv/on_the_air"
          storeKey="on_the_air"
        />
        <HorizontalScroll
          url="/tv/top_rated"
          type="tv"
          label="Top Rated Series"
          urlSeeAll="/tv/top_rated"
          storeKey="top_rated"
        />
        {movieGenres.map((genre) => {
          return (
            <HorizontalScroll
              key={genre.id}
              url="/discover/movie"
              type="movie"
              label={genre.name}
              urlSeeAll={`/movies/genre/${genre.id}`}
              params={{
                with_genres: genre.id,
              }}
              storeKey={genre.name.toLowerCase()}
            />
          );
        })}
      </IonContent>
    </IonPage>
  );
};

export { HomeTabPage };
