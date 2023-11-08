export enum SubscriptionType {
  "free",
  "premium",
}

interface Props {
  type: SubscriptionType;
}

const SubscriptionTag = ({ type }: Props) => {
  return (
    <div
      className={
        "w-[65px] h-5 flex justify-center items-center font-medium text-[10px] rounded-[6px] " +
        (type == SubscriptionType.free ? "bg-primary" : "bg-secondary")
      }
    >
      {type == SubscriptionType.free ? "Free" : "Premium"}
    </div>
  );
};

export { SubscriptionTag };
