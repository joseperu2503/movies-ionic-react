import { useAppSelector } from "@/store/store";
import { IonRippleEffect, useIonRouter } from "@ionic/react";
import { Swiper, SwiperSlide } from "swiper/react";

const GenresSlide = () => {
  const router = useIonRouter();

  const movieGenres = useAppSelector((state) => state.genres.movieGenres);

  return (
    <div>
      <Swiper slidesPerView="auto" spaceBetween={8}>
        {movieGenres.map((genre) => {
          return (
            <SwiperSlide
              key={genre.id}
              className="w-auto"
              onClick={() => router.push(`/movies/genre/${genre.id}`)}
            >
              <div className="px-3 py-2 bg-primary-soft text-xs text-white-grey rounded-lg font-medium ion-activatable relative overflow-hidden">
                {genre.name}
                <IonRippleEffect></IonRippleEffect>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export { GenresSlide };
