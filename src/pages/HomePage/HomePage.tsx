import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonRippleEffect,
  IonToolbar,
  useIonRouter,
} from "@ionic/react";
import googleIcon from "@/assets/home/google.svg";
import appleIcon from "@/assets/home/apple.svg";
import facebookIcon from "@/assets/home/facebook.svg";
import logoIcon from "@/assets/logo.svg";

const HomePage = () => {
  const router = useIonRouter();

  return (
    <IonPage className="safe-area-top">
      <IonContent>
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
            <IonButton
              shape="round"
              expand="block"
              fill="clear"
              className="h-14 font-medium w-full mt-4"
              onClick={() => router.push(`/login`)}
            >
              <div className="text-grey font-medium">
                <span>I already have an account? </span>
                <span className="text-primary font-semibold">Login</span>
              </div>
            </IonButton>
            <div className="text-grey font-medium text-sm mt-8">
              Or Sign up with
            </div>
            <div className="flex gap-6 mt-10">
              <div className="w-16 h-16 rounded-full bg-white flex items-center  justify-center ion-activatable relative overflow-hidden">
                <img src={googleIcon} />
                {/* personalizar color de ripple */}
                <IonRippleEffect className="text-black"></IonRippleEffect>
              </div>
              <div className="w-16 h-16 rounded-full bg-primary-soft flex items-center justify-center ion-activatable relative overflow-hidden">
                <img src={appleIcon} />
                <IonRippleEffect></IonRippleEffect>
              </div>
              <div className="w-16 h-16 rounded-full bg-facebook flex items-center justify-center ion-activatable relative overflow-hidden">
                <img src={facebookIcon} />
                <IonRippleEffect></IonRippleEffect>
              </div>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export { HomePage };
