import {
  InfiniteScrollCustomEvent,
  IonContent,
  IonHeader,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonLabel,
  IonPage,
  IonSegment,
  IonSegmentButton,
  IonTitle,
  IonToolbar,
  SegmentChangeEventDetail,
} from "@ionic/react";
import "./SearchTabPage.css";
import { useEffect, useRef, useState } from "react";
import { Movie } from "@/interfaces/movie.interface";
import { mdbApi } from "@/api/theMovieDbApi";
import { ResponsePaginate } from "@/interfaces/responsePaginate.interface";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { TvSerie } from "@/interfaces/tvSerie.interface";
import { MovieSerieItem } from "@/components/MovieSerieItem/MovieSerieItem";
import { Person } from "@/interfaces/person.interface";
import { Swiper as SwiperType } from "swiper/types";
import { SearchInput } from "./components/SearchInput";
import { PersonSearchItem } from "./components/PersonSearchItem";
import { GenresSlide } from "@/components/GenresSlide/GenresSlide";
import { useMovie } from "@/hooks/useMovie";
import BackButton from "@/components/BackButton/BackButton";

const SearchTabPage = (): JSX.Element => {
  const [searchValue, setSearchValue] = useState<string>("");

  const changeSearch = (value: string) => {
    setSearchValue(value);
  };

  const [movies, setMovies] = useState<Movie[]>([]);
  const [persons, setPersons] = useState<Person[]>([]);
  const [series, setSeries] = useState<TvSerie[]>([]);

  const searchMovies = async () => {
    const moviesResponse = await searchFunction<Movie>("/search/movie");
    setMovies(moviesResponse.results);
  };

  const searchPersons = async () => {
    const personsResponse = await searchFunction<Person>("/search/person");
    setPersons(personsResponse.results);
  };

  const searchSeries = async () => {
    const seriesResponse = await searchFunction<TvSerie>("/search/tv");
    setSeries(seriesResponse.results);
  };

  const searchFunction = async <T,>(
    url: string
  ): Promise<ResponsePaginate<T>> => {
    const response = await mdbApi.get<ResponsePaginate<T>>(url, {
      params: {
        query: searchValue,
      },
    });

    return response.data;
  };

  const [typingTimeout, setTypingTimeout] = useState<NodeJS.Timeout | null>(
    null
  );

  useEffect(() => {
    // Cancela el temporizador existente si se presionó una tecla recientemente
    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }

    if (searchValue.length == 0) {
      setMovies([]);
      setPersons([]);
      setSeries([]);
      return;
    }

    // Establece un nuevo temporizador que ejecutará la acción después de 500ms de inactividad
    setTypingTimeout(
      setTimeout(() => {
        if (searchValue.length != 0) {
          searchMovies();
          searchPersons();
          searchSeries();
        }
      }, 500)
    );
  }, [searchValue]);

  const [segmentActive, setSegmentActive] = useState(0);
  const onChangeSwiper = (swiper: SwiperType) => {
    setSegmentActive(swiper.activeIndex);
  };

  const swiperRef = useRef<SwiperRef>(null);
  const onChangeSegment = (e: CustomEvent<SegmentChangeEventDetail>) => {
    const newIndex = e.detail.value;
    if (swiperRef.current && typeof newIndex === "number") {
      swiperRef.current.swiper.slideTo(newIndex);
    }
  };

  const { getItems, items, page, totalPages } = useMovie({
    storeKey: "discover",
    url: "discover/movie",
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
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <BackButton />
          <IonTitle>
            <span className="text-base font-semibold">Search</span>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <div className="py-2">
            <SearchInput
              searchValue={searchValue}
              changeSearchValue={changeSearch}
            />
          </div>
        </IonToolbar>
        {searchValue.length == 0 && (
          <IonToolbar>
            <div className="pt-3 pb-3">
              <GenresSlide />
            </div>
          </IonToolbar>
        )}
      </IonHeader>
      {searchValue.length > 0 && (
        <IonContent fullscreen>
          <div className="h-full pt-6">
            <div className="px-6">
              <IonSegment
                value={segmentActive}
                color="secondary"
                scrollable={true}
                onIonChange={onChangeSegment}
              >
                <IonSegmentButton value={0}>
                  <IonLabel>Movies</IonLabel>
                </IonSegmentButton>
                <IonSegmentButton value={1}>
                  <IonLabel>Tv </IonLabel>
                </IonSegmentButton>
                <IonSegmentButton value={2}>
                  <IonLabel>Persons </IonLabel>
                </IonSegmentButton>
              </IonSegment>
            </div>

            <div className="h-full overflow-hidden">
              <Swiper
                slidesPerView={1}
                className="h-full"
                onActiveIndexChange={onChangeSwiper}
                ref={swiperRef}
              >
                <SwiperSlide className="overflow-y-auto">
                  <div className="px-6 py-8">
                    <div className="flex flex-col gap-4">
                      {movies.map((movie) => {
                        return (
                          <MovieSerieItem
                            item={movie}
                            key={movie.id}
                            type="movie"
                          />
                        );
                      })}
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="overflow-y-auto">
                  <div className="px-6 py-8">
                    <div className="flex flex-col gap-4">
                      {series.map((serie) => {
                        return (
                          <MovieSerieItem
                            item={serie}
                            key={serie.id}
                            type="tv"
                          />
                        );
                      })}
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="overflow-y-auto">
                  <div className="px-6 py-8">
                    <div className="flex flex-col gap-4">
                      {persons.map((person) => {
                        return (
                          <PersonSearchItem person={person} key={person.id} />
                        );
                      })}
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </IonContent>
      )}

      {searchValue.length == 0 && (
        <IonContent fullscreen>
          <div className="font-semibold text-white px-6 pb-2 mt-6">
            Recommend for you
          </div>

          <div className="px-6 pb-8 pt-2">
            <div className="flex flex-col gap-4">
              {items.map((item) => {
                return (
                  <MovieSerieItem item={item} key={item.id} type="movie" />
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
      )}
    </IonPage>
  );
};

export { SearchTabPage };
