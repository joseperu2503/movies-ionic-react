import closeIcon from "@/assets/close.svg";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { SeasonResponse } from "@/interfaces/seasonResponse.interface";
import { Season } from "@/interfaces/tvSerie.interface";
import { IonRippleEffect } from "@ionic/react";
import { useEffect, useState } from "react";

interface Props {
  seasons: Season[];
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
  currentSeason?: SeasonResponse;
  onChangeSeason: (seasonNumber: number) => void;
}

const ModalSeasons = ({
  seasons,
  showModal,
  setShowModal,
  currentSeason,
  onChangeSeason,
}: Props) => {
  const changeSeason = (seasonNumber: number) => {
    onChangeSeason(seasonNumber);
    setShowModal(false);
  };

  const [center, setCenter] = useState(false);

  useEffect(() => {
    if (showModal) {
      setCenter(false);
      setTimeout(() => {
        setCenter(true);
      }, 100);
    }
  }, [showModal]);

  const ref = useOutsideClick(() => setShowModal(false));

  return (
    <>
      {showModal && (
        <div className="fixed top-0 right-0 left-0 bottom-0 backdrop z-20 flex items-center px-6">
          <div
            className="w-full py-10 px-4 bg-modal h-96 rounded-2xl relative"
            ref={ref}
          >
            <div className="w-8 h-8 flex items-center justify-center bg-primary-dark bg-opacity-80 rounded-xl absolute right-4 top-3">
              <div className="ion-activatable relative overflow-hidden">
                <img
                  src={closeIcon}
                  alt="heart-icon"
                  className="w-4 h-4"
                  onClick={() => setShowModal(false)}
                />
                <IonRippleEffect></IonRippleEffect>
              </div>
            </div>
            <div className="overflow-y-scroll h-full snap-mandatory snap-y">
              <div className="flex flex-col items-center gap-4">
                {seasons.map((season) => (
                  <div
                    onClick={() => changeSeason(season.season_number)}
                    key={season.id}
                    className={
                      "font-semibold px-3 py-2 ion-activatable relative overflow-hidden rounded-lg " +
                      (currentSeason?.id == season.id
                        ? "text-2xl text-white snap-center "
                        : "text-xl text-dark-grey ") +
                      (center && "snap-center")
                    }
                  >
                    {season.name}
                    <IonRippleEffect></IonRippleEffect>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalSeasons;
