import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
} from "@ionic/react";
import { CustomInput } from "@/components/CustomInput/CustomInput";
import { ChangeEvent, useState } from "react";
import BackButton from "@/components/BackButton/BackButton";

const ResetPasswordPage = () => {
  const [email, setEmail] = useState("");

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
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
            <div className="text-2xl leading-8 font-medium mb-2">
              Reset Password
            </div>
            <span className="text-sm font-medium text-grey w-64 text-center">
              Recover your account password
            </span>

            <div className="mt-8 w-full">
              <CustomInput
                value={email}
                onChange={onChangeEmail}
                label="Email Address"
                type="email"
              />
            </div>

            <IonButton
              shape="round"
              expand="block"
              className="h-14 font-medium w-full mt-10"
            >
              Next
            </IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export { ResetPasswordPage };
