import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
} from "@ionic/react";
import { useState } from "react";
import BackButton from "@/components/BackButton/BackButton";
import { Otp } from "@/components/Otp/Otp";

const VerifyAccountPage = () => {
  const [code, setCode] = useState("");
  const onChangeCode = (value: string) => {
    setCode(value);
  };

  return (
    <IonPage>
      <IonHeader className="ion-no-border" collapse="fade">
        <IonToolbar className="toolbar-detail">
          <BackButton />
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="px-6 py-8">
          <div className="flex flex-col items-center w-full">
            <div className="text-2xl font-semibold mb-4">
              Verifying your account
            </div>
            <div className="text-sm font-medium text-grey text-center">
              We have just sent you 4 digit code via your
            </div>
            <div className="text-sm font-medium text-grey text-center">
              email <span className="text-white">example@gmail.com</span>
            </div>
            <div className="mt-8">
              <Otp value={code} onChange={onChangeCode} />
            </div>

            <IonButton
              shape="round"
              expand="block"
              className="h-14 font-medium w-full mt-16"
              type="button"
            >
              Next
            </IonButton>
            <IonButton
              shape="round"
              expand="block"
              fill="clear"
              className="h-14 font-medium w-full mt-6"
            >
              <div className="text-grey text-base font-medium">
                <span>Didn’t receive code? </span>
                <span className="text-primary">Resend</span>
              </div>
            </IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export { VerifyAccountPage };
