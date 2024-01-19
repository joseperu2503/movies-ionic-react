import { useAppSelector } from "@/store/store";
import { IonRippleEffect, useIonRouter } from "@ionic/react";

const GenresSlide = () => {
  const router = useIonRouter();

  const movieGenres = useAppSelector((state) => state.genres.movieGenres);

  return (
    <div className="overflow-x-scroll px-6">
      <div className="flex w-max gap-2">
        {movieGenres.map((genre) => {
          return (
            <div
              key={genre.id}
              onClick={() => router.push(`/movies/genre/${genre.id}`)}
              className="px-3 py-2 bg-primary-soft text-xs text-white-grey rounded-lg font-medium ion-activatable relative overflow-hidden"
            >
              {genre.name}
              <IonRippleEffect></IonRippleEffect>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { GenresSlide };
