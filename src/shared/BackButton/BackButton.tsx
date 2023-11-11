import { IonButtons, IonRippleEffect, useIonRouter } from "@ionic/react";
import arrowBackIcon from "@/assets/arrow-back.svg";

const BackButton = () => {
  const router = useIonRouter();

  return (
    <IonButtons slot="start" className="">
      <div
        onClick={() => router.goBack()}
        className="w-8 h-8 rounded-xl bg-primary-soft flex justify-center items-center ion-activatable relative overflow-hidden"
      >
        <img src={arrowBackIcon} alt="arrow-back-icon" className="w-6 h-6 " />
        <IonRippleEffect></IonRippleEffect>
      </div>
    </IonButtons>
  );
};

export default BackButton;
