import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import { Movie } from "../../interfaces/movie.interface";
import { mdbApi } from "../../api/theMovieDbApi";
import { ResponsePaginate } from "../../interfaces/responsePaginate.interface";
import { TvSerie } from "../../interfaces/tvSerie.interface";

interface Props {
  url: string;
}
const HorizontalScroll = ({ url }: Props) => {
  const [movies, setMovies] = useState<(Movie | TvSerie)[]>([]);

  useEffect(() => {
    getMovies();
  }, []);
  const getMovies = async () => {
    const moviesResponse = await mdbApi.get<ResponsePaginate<Movie | TvSerie>>(
      url
    );
    setMovies(moviesResponse.data.results);
  };
  return (
    movies.length > 0 && (
      <div className="px-6">
        <Swiper slidesPerView="auto" spaceBetween={30}>
          {movies.map((movie) => {
            return (
              <SwiperSlide key={movie.id} className="w-auto">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt=""
                  className="rounded-xl h-[178px]"
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
