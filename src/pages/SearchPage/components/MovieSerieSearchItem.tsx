import calendarIcon from "@/assets/calendar.svg";
import starIcon from "@/assets/star.svg";
import {
  SubscriptionTag,
  SubscriptionType,
} from "@/shared/SubscriptionTag/SubscriptionTag";

interface Props {
  title: string;
  posterPath: string;
  year: string;
  subscriptionType: SubscriptionType;
  overview: string;
  voteAverage: number;
}

const MovieSerieSearchItem = ({
  title,
  posterPath,
  year,
  subscriptionType,
  overview,
  voteAverage,
}: Props): JSX.Element => {
  return (
    <div className="flex gap-4">
      <div className="relative min-w-[112px] h-[147px]">
        <img
          src={posterPath}
          className="rounded-xl w-[112px] h-[147px] object-cover"
        />
        <div className="absolute px-2 py-1 z-10 background-vote rounded-lg flex gap-1 items-center top-2 left-2">
          <img src={starIcon} alt="star-icon" className="w-4 h-4 " />

          <div className="text-secondary text-xs font-semibold ">
            {voteAverage}
          </div>
        </div>
      </div>
      <div className="flex flex-col pt-1">
        <SubscriptionTag type={subscriptionType}></SubscriptionTag>
        <div className="pt-3 font-semibold line-clamp-1 leading-5">{title}</div>
        <div className="flex items-center gap-1 mt-3">
          <img src={calendarIcon} alt="calendar-icon" className="w-4 h-4 " />
          <span className="text-xs text-grey font-medium">{year}</span>
        </div>
        <div className="mt-3">
          <span className="text-xs text-grey font-medium line-clamp-2 ">
            {overview}
          </span>
        </div>
      </div>
    </div>
  );
};

export { MovieSerieSearchItem };
