import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { CustomInput } from "@/shared/CustomInput/CustomInput";
import { ChangeEvent, useState } from "react";
import BackButton from "@/shared/BackButton/BackButton";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

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
        <div className="px-6 pt-8">
          <div className="flex flex-col items-center w-full">
            <div className="text-2xl font-semibold mb-2">Hi, Tiffany</div>
            <span className="text-xs font-medium text-grey w-64 text-center">
              Welcome back! Please enter
            </span>
            <span className="text-xs font-medium text-grey w-64 text-center">
              your details.
            </span>
            <div className="mt-18 w-full">
              <CustomInput
                value={email}
                onChange={onChangeEmail}
                label="Email"
                type="email"
              />
            </div>

            <div className="mt-8 w-full">
              <CustomInput
                value={password}
                onChange={onChangePassword}
                label="Password"
                type="password"
              />
            </div>
            <div className="text-xs font-medium text-primary text-end w-full mt-2">
              Forgot Password?
            </div>
            <IonButton
              shape="round"
              expand="block"
              className="h-14 font-medium w-full mt-10"
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
