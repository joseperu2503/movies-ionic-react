import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { mdbApi } from "../../api/theMovieDbApi";
import { MovieDetail } from "../../interfaces/movie.interface";
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { Credits } from "../../interfaces/credits.interface";
import "./MoviePage.css";
import calendarIcon from "@/assets/calendar.svg";
import clockIcon from "@/assets/clock.svg";
import filmIcon from "@/assets/film.svg";
import starIcon from "@/assets/star.svg";
import playIcon from "@/assets/play.svg";
import downloadIcon from "@/assets/download.svg";
import shareIcon from "@/assets/share.svg";
import heartIcon from "@/assets/heart.svg";
import BackButton from "@/components/BackButton/BackButton";

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
      <IonHeader className="ion-no-border" collapse="fade">
        <IonToolbar className="toolbar-detail">
          <BackButton />
          <IonTitle>
            <span className="text-base font-semibold tracking-[0.12px]">
              {movie?.title}
            </span>
          </IonTitle>
          <IonButtons slot="end">
            <img src={heartIcon} alt="heart-icon" className="w-6 h-6 " />
          </IonButtons>

          {/* <div className="ps-4 flex items-center gap-2 h-16">
            <span className="font-semibold text-lg">Movie Plus</span>
          </div> */}
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen={true}>
        <div className="">
          <div className="absolute w-full top-0">
            <div className="relative">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
                alt=""
                className="w-full object-cover opacity-[0.24] poster-background"
              />
              <div className="absolute background-poster w-full h-full top-0"></div>
            </div>
          </div>
          <div className="absolute w-full top-0 pt-24 pb-24 px-6">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
              alt=""
              className="w-[205px] h-auto mx-auto rounded-xl"
            />

            <div className="flex justify-center mt-4">
              <img
                src={calendarIcon}
                alt="calendar-icon"
                className="w-4 h-4 "
              />
              <span className="text-xs text-grey tracking-[0.12px] font-medium ml-1">
                {movie?.release_date
                  ? new Date(movie?.release_date).getFullYear()
                  : ""}
              </span>
              <div className="w-0.5 h-4 bg-dark-grey mx-3"></div>
              <img src={clockIcon} alt="clock-icon" className="w-4 h-4 " />
              <span className="text-xs text-grey tracking-[0.12px] font-medium ml-1">
                {movie?.runtime} Minutes
              </span>
              <div className="w-0.5 h-4 bg-dark-grey mx-3"></div>
              <img src={filmIcon} alt="clock-icon" className="w-4 h-4 " />
              {movie?.genres[0] && (
                <span className="text-xs text-grey tracking-[0.12px] font-medium ml-1">
                  {movie?.genres[0].name}
                </span>
              )}
            </div>
            <div className="flex justify-center mt-4">
              <div className="px-2 py-1 bg-score flex gap-1">
                <img src={starIcon} alt="star-icon" className="w-4 h-4 " />
                <span className="text-xs text-secondary tracking-[0.12px] font-semibold">
                  {movie?.vote_average.toFixed(1)}
                </span>
              </div>
            </div>
            <div className="flex gap-4 justify-center mt-6">
              <div className="w-[115px] h-12 bg-secondary rounded-full flex justify-center items-center">
                <img src={playIcon} alt="play-icon" className="w-6 h-6 " />
                <span className="text-white tracking-[0.12px] font-medium">
                  Play
                </span>
              </div>
              <div className="w-12 h-12 bg-primary-soft rounded-full flex justify-center items-center">
                <img
                  src={downloadIcon}
                  alt="download-icon"
                  className="w-6 h-6 "
                />
              </div>
              <div className="w-12 h-12 bg-primary-soft rounded-full flex justify-center items-center">
                <img src={shareIcon} alt="share-icon" className="w-6 h-6 " />
              </div>
            </div>
            <div className="font-semibold tracking-[0.12px] mt-6">
              Story Line
            </div>
            <div className="font-normal tracking-[0.12px] mt-2 text-sm text-white-grey">
              {movie?.overview}
            </div>
            <div className="font-semibold tracking-[0.12px] mt-6">
              Cast and Crew
            </div>
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
        </div>

        {/* {movie && (
          <div>
            <div>{movie?.title}</div>
            <div>{movie?.overview}</div>

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
                      {<div>{actor.name}</div>}
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
        )} */}
      </IonContent>
    </IonPage>
  );
};

export default MoviePage;
