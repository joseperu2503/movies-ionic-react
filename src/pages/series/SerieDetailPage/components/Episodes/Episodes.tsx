import {
  SubscriptionTag,
  SubscriptionType,
} from "@/components/SubscriptionTag/SubscriptionTag";
import downloadIcon from "@/assets/download.svg";
import { Episode } from "@/interfaces/seasonResponse.interface";
import { IonIcon, IonRippleEffect } from "@ionic/react";

interface Props {
  episodes: Episode[];
}

const Episodes = ({ episodes }: Props) => {
  return (
    <div className="flex flex-col gap-4 ">
      {episodes.map((episode) => {
        return (
          <div
            key={episode.id}
            className="bg-primary-soft pt-3 pl-3 pr-3 pb-4 rounded-2xl"
          >
            <div className="flex gap-4">
              <img
                src={`https://image.tmdb.org/t/p/w500${episode.still_path}`}
                alt=""
                className="w-[121px] h-[83px] object-cover rounded-lg"
              />
              <div className="flex-1 mt-0">
                <div className="flex justify-between">
                  <div className="mt-2">
                    <SubscriptionTag
                      type={SubscriptionType.premium}
                    ></SubscriptionTag>
                    <div className="text-xs font-medium text-grey mt-1">
                      {episode.runtime} Minutes
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-primary-dark rounded-full flex justify-center items-center ion-activatable relative overflow-hidden">
                    <IonIcon
                      src={downloadIcon}
                      className="text-secondary w-6 h-6"
                    />
                    <IonRippleEffect></IonRippleEffect>
                  </div>
                </div>

                <div className="text-xs font-semibold text-white mt-2">
                  {episode.name}
                </div>
              </div>
            </div>
            <div className="text-xs font-normal leading-5 mt-3">
              {episode.overview}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export { Episodes };
