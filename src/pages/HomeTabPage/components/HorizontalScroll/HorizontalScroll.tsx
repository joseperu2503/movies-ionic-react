import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import { Movie } from "../../../../interfaces/movie.interface";
import { mdbApi } from "../../../../api/theMovieDbApi";
import { ResponsePaginate } from "../../../../interfaces/responsePaginate.interface";
import { TvSerie } from "../../../../interfaces/tvSerie.interface";
import { IonRippleEffect, useIonRouter } from "@ionic/react";
import { useInView } from "react-intersection-observer";
import { useAppSelector } from "@/store/store";
import { useDispatch } from "react-redux";
import { setMovies } from "@/slices/moviesSlice";
import { useMovie } from "@/hooks/useMovie";
import { useTvSerie } from "@/hooks/useTvSerie";

interface Props {
  url: string;
  type: "movie" | "tv";
  label: string;
  urlSeeAll: string;
  params?: Object;
  storeKey: string;
}
const HorizontalScroll = ({
  url,
  type,
  label,
  urlSeeAll,
  params,
  storeKey,
}: Props) => {
  const { items, page, getItems } =
    type == "movie"
      ? useMovie({
          url,
          params,
          storeKey,
        })
      : useTvSerie({
          url,
          params,
          storeKey,
        });

  const router = useIonRouter();
  const [loaded, setLoaded] = useState(false);

  //libreria react-intersection-observer
  const [ref, inView] = useInView({
    root: document.getElementById("movies-container"),
    triggerOnce: true,
    rootMargin: "200px",
  });

  // detecta cuando esta visible para cargar las peliculas
  if (inView && !loaded) {
    if (page == 1) {
      getItems();
    }
    setLoaded(true);
  }

  return (
    <div ref={ref} id="container">
      <div className="flex justify-between items-center pl-6 pr-4 mt-5">
        <span className="font-semibold text-white">{label}</span>
        <span
          onClick={() => router.push(urlSeeAll)}
          className="text-sm text-primary font-medium px-2 py-1 rounded-full ion-activatable relative overflow-hidden"
        >
          See All
          <IonRippleEffect></IonRippleEffect>
        </span>
      </div>
      <div className="mt-3 h-[178px]">
        {items.length > 0 && (
          <div className="px-6">
            <Swiper slidesPerView="auto" spaceBetween={12}>
              {items.map((item) => {
                return (
                  <SwiperSlide
                    key={item.id}
                    className="w-auto"
                    onClick={() => router.push(`/${type}/${item.id}`)}
                  >
                    <img
                      src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                      alt=""
                      className="rounded-xl w-[135px] h-[178px] object-cover"
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        )}
      </div>
    </div>
  );
};

export { HorizontalScroll };
