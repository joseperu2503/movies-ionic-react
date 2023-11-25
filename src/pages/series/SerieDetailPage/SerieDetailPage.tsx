import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { mdbApi } from "@/api/theMovieDbApi";
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonRippleEffect,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { TvSerieDetail } from "@/interfaces/tvSerie.interface";
import BackButton from "@/components/BackButton/BackButton";
import calendarIcon from "@/assets/calendar.svg";
import clockIcon from "@/assets/clock.svg";
import filmIcon from "@/assets/film.svg";
import starIcon from "@/assets/star.svg";
import playIcon from "@/assets/play.svg";
import downloadIcon from "@/assets/download.svg";
import shareIcon from "@/assets/share.svg";
import heartIcon from "@/assets/heart.svg";
import arrowDownIcon from "@/assets/arrow-down.svg";
import { Credits } from "@/interfaces/credits.interface";
import { SeasonResponse } from "@/interfaces/seasonResponse.interface";
import { Episodes } from "./components/Episodes/Episodes";
import "./SerieDetailPage.css";
import ModalSeasons from "./components/ModalSeasons/ModalSeasons";

const SerieDetailPage: React.FC = () => {
  const { serieId } = useParams<{ serieId: string }>();
  const [serie, setSerie] = useState<TvSerieDetail>();
  const [credits, setCredits] = useState<Credits>();
  const [seasons, setSeasons] = useState<{ [key: string]: SeasonResponse }>({});
  const [currentSeason, setCurrentSeason] = useState<SeasonResponse>();

  useEffect(() => {
    getSerie();
    getSerieCredits();
  }, []);

  const getSerie = async () => {
    const movieResponse = await mdbApi.get<TvSerieDetail>(`/tv/${serieId}`);
    setSerie(movieResponse.data);

    getSeason(1);
  };

  const getSerieCredits = async () => {
    const creditsResponse = await mdbApi.get<Credits>(`/tv/${serieId}/credits`);
    setCredits(creditsResponse.data);
  };

  const getSeason = async (seasonNumber: number) => {
    if (seasons[seasonNumber - 1]) {
      setCurrentSeason(seasons[seasonNumber - 1]);
      return;
    }

    const seasonResponse = await mdbApi.get<SeasonResponse>(
      `/tv/${serieId}/season/${seasonNumber}`
    );

    setSeasons({ ...seasons, [seasonNumber - 1]: seasonResponse.data });
    setCurrentSeason(seasonResponse.data);
  };

  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <IonPage>
      <IonHeader className="ion-no-border" collapse="fade">
        <IonToolbar className="toolbar-detail">
          <BackButton />
          <IonTitle>
            <span className="text-base font-semibold">{serie?.name}</span>
          </IonTitle>
          <IonButtons slot="end">
            <img src={heartIcon} alt="heart-icon" className="w-6 h-6 " />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen={true}>
        <div className="">
          <div className="absolute w-full top-0">
            <div className="relative">
              <img
                src={`https://image.tmdb.org/t/p/w500${serie?.poster_path}`}
                alt=""
                className="w-full object-cover opacity-[0.24] poster-background"
              />
              <div className="absolute background-poster w-full h-full top-0"></div>
            </div>
          </div>
          <div className="absolute w-full top-0 pt-24 pb-24 px-6">
            <img
              src={`https://image.tmdb.org/t/p/w500${serie?.poster_path}`}
              alt=""
              className="w-[205px] h-auto mx-auto rounded-xl"
            />

            <div className="flex justify-center mt-4">
              <img
                src={calendarIcon}
                alt="calendar-icon"
                className="w-4 h-4 "
              />
              <span className="text-xs text-grey font-medium ml-1">
                {serie?.first_air_date
                  ? new Date(serie?.first_air_date).getFullYear()
                  : ""}
              </span>
              <div className="w-0.5 h-4 bg-dark-grey mx-3"></div>
              <img src={clockIcon} alt="clock-icon" className="w-4 h-4 " />
              <span className="text-xs text-grey font-medium ml-1">
                {serie?.seasons.length} Seasons
              </span>
              <div className="w-0.5 h-4 bg-dark-grey mx-3"></div>
              <img src={filmIcon} alt="clock-icon" className="w-4 h-4 " />
              {serie?.genres[0] && (
                <span className="text-xs text-grey font-medium ml-1">
                  {serie?.genres[0].name}
                </span>
              )}
            </div>
            <div className="flex justify-center mt-4">
              <div className="px-2 py-1 bg-score flex gap-1">
                <img src={starIcon} alt="star-icon" className="w-4 h-4 " />
                <span className="text-xs text-secondary font-semibold">
                  {serie?.vote_average.toFixed(1)}
                </span>
              </div>
            </div>
            <div className="flex gap-4 justify-center mt-6">
              <div className="w-[115px] h-12 bg-secondary rounded-full flex justify-center items-center ion-activatable relative overflow-hidden">
                <img src={playIcon} alt="play-icon" className="w-6 h-6 " />
                <span className="text-white font-medium">Trailer</span>
                <IonRippleEffect className="text-black"></IonRippleEffect>
              </div>
              <div className="w-12 h-12 bg-primary-soft rounded-full flex justify-center items-center ion-activatable relative overflow-hidden">
                <img
                  src={downloadIcon}
                  alt="download-icon"
                  className="w-6 h-6 "
                />
                <IonRippleEffect></IonRippleEffect>
              </div>
              <div className="w-12 h-12 bg-primary-soft rounded-full flex justify-center items-center ion-activatable relative overflow-hidden">
                <img src={shareIcon} alt="share-icon" className="w-6 h-6 " />
                <IonRippleEffect></IonRippleEffect>
              </div>
            </div>
            <div className="font-semibold mt-6">Story Line</div>
            <div className="font-normal mt-2 text-sm text-white-grey">
              {serie?.overview}
            </div>
            {credits?.cast.length! > 0 && (
              <div>
                <div className="font-semibold mt-6">Cast and Crew</div>
                <div className="overflow-x-scroll mt-4">
                  <div className="flex w-max gap-4">
                    {credits?.cast.map((actor) => {
                      return (
                        <div key={actor.id} className="w-20">
                          {/* {<div>{actor.name}</div>} */}
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
            <div className="font-semibold mt-6">Episode</div>
            <div className="my-4">
              <div
                className="flex items-center gap-1"
                onClick={() => setShowModal(true)}
              >
                <div className="text-sm font-medium">{currentSeason?.name}</div>
                <img
                  src={arrowDownIcon}
                  alt="arrow-down-icon"
                  className="w-6 h-6 "
                />
              </div>
            </div>
            <Episodes episodes={currentSeason?.episodes ?? []}></Episodes>
          </div>
        </div>
      </IonContent>
      <ModalSeasons
        seasons={serie?.seasons ?? []}
        setShowModal={setShowModal}
        showModal={showModal}
        currentSeason={currentSeason}
        onChangeSeason={(seasonNumber) => getSeason(seasonNumber)}
      />
    </IonPage>
  );
};

export { SerieDetailPage };
