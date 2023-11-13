import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { CustomInput } from "@/components/CustomInput/CustomInput";
import { ChangeEvent, useState } from "react";
import BackButton from "@/components/BackButton/BackButton";
import Checkbox from "@/components/Checkbox/Checkbox";

const SignUpPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreeCheck, setAgreeCheck] = useState(false);

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <IonPage>
      <IonHeader className="ion-no-border" collapse="fade">
        <IonToolbar className="toolbar-detail">
          <BackButton />
          <IonTitle>
            <span className="text-base font-semibold">Sign Up</span>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="px-6 py-8">
          <div className="flex flex-col items-center w-full">
            <div className="text-2xl font-semibold mb-2">Let’s get started</div>
            <span className="text-xs font-medium text-grey w-64 text-center">
              The latest movies and series
            </span>
            <span className="text-xs font-medium text-grey w-64 text-center">
              are here
            </span>
            <div className="mt-18 w-full">
              <CustomInput
                value={name}
                onChange={onChangeName}
                label="Full Name"
              />
            </div>
            <div className="mt-8 w-full">
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
            <div className="flex w-full mt-4 gap-2">
              <Checkbox value={agreeCheck} onChange={setAgreeCheck} />
              <div className="text-xs font-medium leading-5 w-56 text-grey">
                <span>I agree to the </span>
                <span className="text-primary">Terms and Services </span>
                <span>and </span>
                <span className="text-primary">Privacy Policy</span>
              </div>
            </div>
            <IonButton
              shape="round"
              expand="block"
              className="h-14 font-medium w-full mt-10"
            >
              Sign Up
            </IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export { SignUpPage };
