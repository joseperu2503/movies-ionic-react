import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import { useState } from "react";
import { IonRippleEffect, useIonRouter } from "@ionic/react";
import { useInView } from "react-intersection-observer";
import { useMovie } from "@/hooks/useMovie";
import { useTvSerie } from "@/hooks/useTvSerie";
import { getPosterPath } from "@/utils/utils";
import { VoteAverage } from "@/components/VoteAverage/VoteAverage";

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
            <Swiper
              slidesPerView="auto"
              spaceBetween={12}
              freeMode={{
                momentumBounce: false,
                minimumVelocity: 0.3,
              }}
              modules={[FreeMode]}
            >
              {items.map((item) => {
                return (
                  <SwiperSlide
                    key={item.id}
                    className="w-auto"
                    onClick={() => router.push(`/${type}/${item.id}`)}
                  >
                    <div className="relative">
                      <div className="absolute top-2 right-2">
                        <VoteAverage voteAverage={item.vote_average} />
                      </div>
                      <img
                        src={getPosterPath(item?.poster_path)}
                        className="rounded-xl w-[135px] h-[178px] object-cover"
                      />
                    </div>
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
