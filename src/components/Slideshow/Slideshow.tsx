import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./Slideshow.css";
import React, { useEffect, useState } from "react";
import { Movie } from "../../interfaces/movie.interface";
import { mdbApi } from "../../api/theMovieDbApi";
import { ResponsePaginate } from "../../interfaces/responsePaginate.interface";
import { Autoplay, Pagination } from "swiper/modules";

const Slideshow = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    getMovies();
  }, []);
  const getMovies = async () => {
    const moviesResponse = await mdbApi.get<ResponsePaginate<Movie>>(
      "/movie/now_playing"
    );
    setMovies(moviesResponse.data.results);
  };
  return (
    movies.length > 0 && (
      <div className="swiper-container">
        <Swiper
          slidesPerView={1.5}
          spaceBetween={30}
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
          }}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Autoplay, Pagination]}
        >
          {movies.map((movie) => {
            return (
              <SwiperSlide key={movie.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                  alt=""
                  className="rounded-lg"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    )
  );
};

export { Slideshow };
