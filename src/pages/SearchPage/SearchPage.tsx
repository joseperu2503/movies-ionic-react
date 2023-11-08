import {
  IonContent,
  IonHeader,
  IonIcon,
  IonLabel,
  IonPage,
  IonSegment,
  IonSegmentButton,
  IonToolbar,
  SegmentChangeEventDetail,
} from "@ionic/react";
import "./SearchPage.css";
import searchIcon from "@/assets/tabs/search.svg";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { Movie } from "@/interfaces/movie.interface";
import { mdbApi } from "@/api/theMovieDbApi";
import { ResponsePaginate } from "@/interfaces/responsePaginate.interface";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";

import { TvSerie } from "@/interfaces/tvSerie.interface";
import { MovieSerieSearchItem } from "./components/MovieSerieSearchItem";
import { SubscriptionType } from "@/shared/SubscriptionTag/SubscriptionTag";
import { getDate, getPosterPath, getProfilePath } from "@/utils/utils";
import { Person } from "@/interfaces/person.interface";
import { Swiper as SwiperType } from "swiper/types";

const SearchPage = (): JSX.Element => {
  const [search, setSearch] = useState<string>("");

  const changeSearch = (value: string) => {
    setSearch(value);
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
        query: search,
      },
    });

    return response.data;
  };

  useEffect(() => {
    searchMovies();
    searchPersons();
    searchSeries();
  }, [search]);

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

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <div className="flex items-center gap-2">
            <div className="w-full h-[41px] bg-primary-soft rounded-full flex items-center px-4 py-3 gap-2">
              <IonIcon
                aria-hidden="true"
                src={searchIcon}
                className="h-6 w-6"
              />
              <input
                type="text"
                placeholder="Type title, categories, years, etc"
                value={search}
                onInput={(event: ChangeEvent<HTMLInputElement>) =>
                  changeSearch(event.target.value)
                }
                className="bg-transparent outline-none text-sm font-medium tracking-[0.12px] placeholder:text-grey text-white w-full"
              />
            </div>
            {search.length > 0 && (
              <div
                className="tracking-[0.12px] text-white"
                onClick={() => changeSearch("")}
              >
                Cancel
              </div>
            )}
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="h-full pt-6">
          <IonSegment
            value={segmentActive}
            color={"secondary"}
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
                        <MovieSerieSearchItem
                          title={movie.title}
                          key={movie.id}
                          overview={movie.overview}
                          posterPath={getPosterPath(movie.poster_path)}
                          subscriptionType={SubscriptionType.free}
                          year={getDate(movie.release_date)}
                          voteAverage={movie.vote_average}
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
                        <MovieSerieSearchItem
                          title={serie.name}
                          key={serie.id}
                          overview={serie.overview}
                          posterPath={getPosterPath(serie.poster_path)}
                          subscriptionType={SubscriptionType.free}
                          year={getDate(serie.first_air_date)}
                          voteAverage={serie.vote_average}
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
                        <div className="flex gap-2 items-center">
                          <img
                            src={getProfilePath(person.profile_path)}
                            className="w-12 h-12 object-cover rounded-full"
                          />
                          <div>{person.name}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export { SearchPage };
