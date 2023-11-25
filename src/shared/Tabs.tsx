import { HomeTabPage } from "@/pages/HomeTabPage/HomeTabPage";
import { SearchTabPage } from "@/pages/SearchTabPage/SearchTabPage";
import { ProfileTabPage } from "@/pages/ProfileTabPage/ProfileTabPage";

import {
  IonIcon,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { Route } from "react-router";
import homeIcon from "@/assets/tabs/home.svg";
import searchIcon from "@/assets/tabs/search.svg";
import personIcon from "@/assets/tabs/person.svg";
import { useState } from "react";

const Tabs: React.FC = () => {
  const [selectedTab, setselectedTab] = useState("home");

  return (
    <IonTabs onIonTabsWillChange={(tab) => setselectedTab(tab.detail.tab)}>
      <IonRouterOutlet>
        <Route exact path="/tabs/home" component={HomeTabPage}></Route>
        <Route exact path="/tabs/search" component={SearchTabPage}></Route>
        <Route exact path="/tabs/profile" component={ProfileTabPage}></Route>
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="home" href="/tabs/home">
          <div
            className={
              "px-3 py-2 rounded-2xl flex gap-1 items-center transition-all duration-300 " +
              (selectedTab == "home" && "bg-primary-soft")
            }
          >
            <IonIcon aria-hidden="true" src={homeIcon} className="h-6 w-6" />
            {selectedTab == "home" && (
              <div className="text-xs font-medium">Home</div>
            )}
          </div>
        </IonTabButton>
        <IonTabButton tab="search" href="/tabs/search">
          <div
            className={
              "px-3 py-2 rounded-2xl flex gap-1 items-center transition-all duration-300 " +
              (selectedTab == "search" && "bg-primary-soft")
            }
          >
            <IonIcon aria-hidden="true" src={searchIcon} className="h-6 w-6" />
            {selectedTab == "search" && (
              <div className="text-xs font-medium">Search</div>
            )}
          </div>
        </IonTabButton>
        <IonTabButton tab="profile" href="/tabs/profile">
          <div
            className={
              "px-3 py-2 rounded-2xl flex gap-1 items-center transition-all duration-300 " +
              (selectedTab == "profile" && "bg-primary-soft")
            }
          >
            <IonIcon aria-hidden="true" src={personIcon} className="h-6 w-6" />
            {selectedTab == "profile" && (
              <div className="text-xs font-medium">Profile</div>
            )}
          </div>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export { Tabs };
