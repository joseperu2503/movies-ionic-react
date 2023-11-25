import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./Slideshow.css";
import { useEffect, useState } from "react";
import { Movie } from "../../../../interfaces/movie.interface";
import { mdbApi } from "../../../../api/theMovieDbApi";
import { ResponsePaginate } from "../../../../interfaces/responsePaginate.interface";
import { Autoplay, Pagination } from "swiper/modules";
import { getPosterPath } from "@/utils/utils";

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
                <div className="relative rounded-2xl overflow-hidden">
                  <img
                    src={getPosterPath(movie?.backdrop_path)}
                    className="rounded-2xl object-cover w-full"
                  />
                  <div className="absolute bottom-0 w-full bg-gradient-to-t from-black h-1/5 px-4 pb-4">
                    <div className="font-semibold">{movie.title}</div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    )
  );
};

export { Slideshow };
