import { IonButton, IonContent, IonIcon, IonPage } from "@ionic/react";
import logoIcon from "@/assets/logo.svg";

const LoginPage = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="px-6 flex items-center h-full w-full">
          <div className="flex flex-col items-center w-full">
            <IonIcon src={logoIcon} className="w-20 h-20" />

            <div className="text-3xl font-semibold mb-2 mt-6">Movies Plus</div>
            <span className="text-sm font-semibold text-grey w-64 text-center">
              Enter your registered
            </span>
            <span className="text-sm font-semibold text-grey w-64 text-center">
              Phone Number to Sign Up
            </span>
            <IonButton
              shape="round"
              expand="block"
              className="h-14 font-medium w-full mt-16"
            >
              Sign Up
            </IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export { LoginPage };
