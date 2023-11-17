import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  useIonRouter,
} from "@ionic/react";
import { useState } from "react";
import BackButton from "@/components/BackButton/BackButton";
import { CustomInput } from "@/components/CustomInput/CustomInput";

const CreateNewPasswordPage = () => {
  const router = useIonRouter();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

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
              Create new password
            </div>
            <div className="text-sm font-medium text-grey text-center">
              Enter your new password
            </div>
            <div className="mt-14 w-full">
              <CustomInput
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                label="Password"
                type="password"
              />
            </div>
            <div className="mt-8 w-full">
              <CustomInput
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
                label="Password"
                type="password"
              />
            </div>
            <IonButton
              shape="round"
              expand="block"
              className="h-14 font-medium w-full mt-10"
              type="button"
              onClick={() => router.push(`/`)}
            >
              Reset
            </IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export { CreateNewPasswordPage };
