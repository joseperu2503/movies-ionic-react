import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import { Movie } from "../../../../interfaces/movie.interface";
import { mdbApi } from "../../../../api/theMovieDbApi";
import { ResponsePaginate } from "../../../../interfaces/responsePaginate.interface";
import { TvSerie } from "../../../../interfaces/tvSerie.interface";
import { useIonRouter } from "@ionic/react";

interface Props {
  url: string;
  type: "movie" | "tv";
}
const HorizontalScroll = ({ url, type }: Props) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [series, setSeries] = useState<TvSerie[]>([]);

  useEffect(() => {
    if (type == "movie") {
      getMovies();
    } else {
      getSeries();
    }
  }, []);
  const getMovies = async () => {
    const moviesResponse = await mdbApi.get<ResponsePaginate<Movie>>(url);
    setMovies(moviesResponse.data.results);
  };

  const getSeries = async () => {
    const seriesResponse = await mdbApi.get<ResponsePaginate<TvSerie>>(url);
    setSeries(seriesResponse.data.results);
  };

  const router = useIonRouter();

  return (
    (movies.length > 0 || series.length > 0) && (
      <div className="px-6">
        <Swiper slidesPerView="auto" spaceBetween={12}>
          {movies.map((movie) => {
            return (
              <SwiperSlide
                key={movie.id}
                className="w-auto"
                onClick={() => router.push(`/movie/${movie.id}`)}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt=""
                  className="rounded-xl w-[135px] aspect-[2/3]"
                />
              </SwiperSlide>
            );
          })}

          {series.map((serie) => {
            return (
              <SwiperSlide key={serie.id} className="w-auto">
                <img
                  src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}
                  alt=""
                  className="rounded-xl w-[135px] aspect-[2/3]"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    )
  );
};

export { HorizontalScroll };
