import starIcon from "@/assets/star.svg";

interface Props {
  voteAverage: number;
}
const VoteAverage = ({ voteAverage }: Props) => {
  return (
    <div className="px-2 py-1 z-10 background-vote rounded-lg flex gap-1 items-center">
      <img src={starIcon} alt="star-icon" className="w-4 h-4 " />

      <div className="text-secondary text-xs font-semibold ">
        {voteAverage.toFixed(1)}
      </div>
    </div>
  );
};

export { VoteAverage };
