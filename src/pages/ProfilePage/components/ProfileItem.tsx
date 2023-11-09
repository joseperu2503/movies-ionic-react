import arrowRightIcon from "@/assets/arrow-right.svg";
import { IonIcon, IonRippleEffect } from "@ionic/react";

interface Props {
  icon: string;
  label: String;
  onClick: () => void;
}

const ProfileItem = ({ icon, label, onClick }: Props) => {
  return (
    <div className="py-4 flex items-center justify-between px-6 ion-activatable relative overflow-hidden">
      <div className="flex items-center gap-4">
        <div className="w-8 h-8 bg-primary-soft rounded-full flex items-center justify-center">
          <IonIcon src={icon} className="h-5 w-5 text-primary" />
        </div>
        <div className="font-medium text-sm">{label}</div>
      </div>
      <IonIcon src={arrowRightIcon} className="h-6 w-6 text-primary" />
      <IonRippleEffect></IonRippleEffect>
    </div>
  );
};

export { ProfileItem };
