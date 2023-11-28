import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonRippleEffect,
  IonToolbar,
  useIonRouter,
} from "@ionic/react";

import profilePhoto from "@/assets/images/profile-photo.jpg";
import editIcon from "@/assets/edit.svg";
import workSpaceIcon from "@/assets/workspace_premium.svg";
import { ProfileItem } from "./components/ProfileItem";
import personIcon from "@/assets/profile/person.svg";
import lockIcon from "@/assets/profile/lock.svg";
import notificationIcon from "@/assets/profile/notification.svg";
import languageIcon from "@/assets/profile/language.svg";
import countryIcon from "@/assets/profile/country.svg";
import trashIcon from "@/assets/profile/trash.svg";
import shieldIcon from "@/assets/profile/shield.svg";
import questionIcon from "@/assets/profile/question.svg";
import informationIcon from "@/assets/profile/information.svg";
import { Divider } from "./components/Divider";

const ProfileTabPage: React.FC = () => {
  const router = useIonRouter();

  const logout = () => {
    localStorage.removeItem("token");
    router.push(`/`);
  };
  return (
    <IonPage>
      <IonHeader translucent={true} className="ion-no-border">
        <IonToolbar>
          <div className="flex items-center h-full w-full justify-center">
            <div className="font-semibold">Profile</div>
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="p-6 pb-4">
          <div
            className="flex items-center py-4 px-4 rounded-2xl border-primary-soft border ion-activatable relative overflow-hidden"
            onClick={() => router.push(`/edit-profile`)}
          >
            <img
              src={profilePhoto}
              className="w-14 h-14 rounded-full object-cover"
            />
            <div className="flex flex-col gap-1 ml-4">
              <div className="font-semibold">Tiffany</div>
              <div className="font-medium text-sm text-black-20">
                Tiffanyjearsey@gmail.com
              </div>
            </div>
            <div className="flex-1"></div>
            <img src={editIcon} />
            <IonRippleEffect></IonRippleEffect>
          </div>

          <div className="mt-6">
            <div className="p-6 bg-secondary rounded-2xl relative overflow-hidden">
              <div className="flex gap-2 items-start">
                <div className="bg-white bg-opacity-20 rounded-xl p-2">
                  <img src={workSpaceIcon} className="w-6 h-6 min-w-[24px]" />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="font-semibold leading-5">Premium Member</div>
                  <div className="text-sm leading-6 font-normal">
                    New movies are coming for you, Download Now!
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-[19px] -right-[70px] w-[227px] h-[227px] rounded-full bg-white bg-opacity-10 flex items-center justify-center">
                <div className="w-[167px] h-[167px] rounded-full bg-white bg-opacity-10"></div>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border-primary-soft border pt-6 pb-2 mt-6">
            <div className="text-lg font-semibold px-6 mb-2">Account</div>
            <ProfileItem icon={personIcon} label="Member" onClick={() => {}} />
            <Divider />
            <ProfileItem
              icon={lockIcon}
              label="Change Password"
              onClick={() => {}}
            />
          </div>
          <div className="rounded-2xl border-primary-soft border pt-6 pb-2 mt-6">
            <div className="text-lg font-semibold px-6 mb-2">General</div>
            <ProfileItem
              icon={notificationIcon}
              label="Notification"
              onClick={() => {}}
            />
            <Divider />
            <ProfileItem
              icon={languageIcon}
              label="Language"
              onClick={() => {}}
            />
            <Divider />
            <ProfileItem
              icon={countryIcon}
              label="Country"
              onClick={() => {}}
            />
            <Divider />
            <ProfileItem
              icon={trashIcon}
              label="Clear Cache"
              onClick={() => {}}
            />
          </div>
          <div className="rounded-2xl border-primary-soft border pt-6 pb-2 mt-6 mb-10">
            <div className="text-lg font-semibold px-6 mb-2">More</div>
            <ProfileItem
              icon={shieldIcon}
              label="Legal and Policies"
              onClick={() => {}}
            />
            <Divider />
            <ProfileItem
              icon={questionIcon}
              label="Help & Feedback"
              onClick={() => {}}
            />
            <Divider />
            <ProfileItem
              icon={informationIcon}
              label="About Us"
              onClick={() => {}}
            />
          </div>
          <IonButton
            shape="round"
            expand="block"
            fill="outline"
            className="h-14 font-semibold"
            onClick={logout}
          >
            Log Out
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export { ProfileTabPage };
