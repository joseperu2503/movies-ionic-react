import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonRouter,
} from "@ionic/react";
import { CustomInput } from "@/components/CustomInput/CustomInput";
import { ChangeEvent, useState } from "react";
import BackButton from "@/components/BackButton/BackButton";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const router = useIonRouter();

  return (
    <IonPage>
      <IonHeader className="ion-no-border" collapse="fade">
        <IonToolbar className="toolbar-detail">
          <BackButton />
          <IonTitle>
            <span className="text-base font-semibold">Login</span>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="px-6 py-8">
          <div className="flex flex-col items-center w-full">
            <div className="text-2xl font-semibold mb-2">Hi, Tiffany</div>
            <span className="text-xs font-medium text-white-grey w-64 text-center">
              Welcome back! Please enter
            </span>
            <span className="text-xs font-medium text-white-grey w-64 text-center">
              your details.
            </span>
            <div className="mt-18 w-full">
              <CustomInput
                value={email}
                onChange={onChangeEmail}
                label="Email Address"
                type="email"
              />
            </div>

            <div className="mt-8 w-full mb-2">
              <CustomInput
                value={password}
                onChange={onChangePassword}
                label="Password"
                type="password"
              />
            </div>
            <div className="flex justify-end w-full">
              <span
                onClick={() => router.push(`/reset-password`)}
                className="text-xs font-medium text-primary"
              >
                Forgot Password?
              </span>
            </div>
            <IonButton
              shape="round"
              expand="block"
              className="h-14 font-medium w-full mt-10"
              onClick={() => router.push(`/tabs/home`)}
            >
              Login
            </IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export { LoginPage };
