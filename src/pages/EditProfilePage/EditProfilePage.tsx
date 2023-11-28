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
import profilePhoto from "@/assets/images/profile-photo.jpg";

const EditProfilePage = () => {
  const [name, setName] = useState("Tiffany");
  const [email, setEmail] = useState("Tiffanyjearsey@gmail.com");
  const [password, setPassword] = useState("123456");
  const [phone, setPhone] = useState("993689145");

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const onChangePhone = (event: ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
  };

  const router = useIonRouter();

  return (
    <IonPage>
      <IonHeader className="ion-no-border" collapse="fade">
        <IonToolbar className="toolbar-detail">
          <BackButton />
          <IonTitle>
            <span className="text-base font-semibold">Edit Profile</span>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="px-6 py-8">
          <div className="flex flex-col items-center w-full">
            <div>
              <img
                src={profilePhoto}
                className="w-20 h-20 rounded-full object-cover"
              />
            </div>
            <div className="mt-5 mb-2 font-semibold">Tiffany</div>
            <div className="font-medium text-sm text-black-20">
              Tiffanyjearsey@gmail.com
            </div>
            <div className="mt-12 w-full">
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
                label="Email Address"
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
            <div className="mt-8 w-full">
              <CustomInput
                value={phone}
                onChange={onChangePhone}
                label="Phone"
                type="text"
              />
            </div>
            <IonButton
              shape="round"
              expand="block"
              className="h-14 font-medium w-full mt-10"
              onClick={() => router.goBack()}
            >
              Save Changes
            </IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export { EditProfilePage };
