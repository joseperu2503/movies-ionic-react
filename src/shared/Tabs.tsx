import { HomePage } from "@/pages/HomePage/HomePage";
import Tab2 from "@/pages/Tab2";
import Tab3 from "@/pages/Tab3";
import {
  IonIcon,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { Redirect, Route } from "react-router";
import homeIcon from "@/assets/tabs/home.svg";
import searchIcon from "@/assets/tabs/search.svg";
import personIcon from "@/assets/tabs/person.svg";
import { useState } from "react";

const Tabs: React.FC = () => {
  const [selectedTab, setselectedTab] = useState("home");

  return (
    <IonTabs onIonTabsWillChange={(tab) => setselectedTab(tab.detail.tab)}>
      <IonRouterOutlet>
        <Route exact path="/home" component={HomePage}></Route>
        <Route exact path="/tab2">
          <Tab2 />
        </Route>
        <Route path="/tab3">
          <Tab3 />
        </Route>
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="home" href="/home">
          <div
            className={
              "px-3 py-2 rounded-2xl flex gap-1 items-center transition-all duration-300 " +
              (selectedTab == "home" && "bg-primary-soft")
            }
          >
            <IonIcon aria-hidden="true" src={homeIcon} className="h-6 w-6" />
            {selectedTab == "home" && (
              <div className="text-xs font-medium tracking-[0.12px]">Home</div>
            )}
          </div>
        </IonTabButton>
        <IonTabButton tab="tab2" href="/tab2">
          <div
            className={
              "px-3 py-2 rounded-2xl flex gap-1 items-center transition-all duration-300 " +
              (selectedTab == "tab2" && "bg-primary-soft")
            }
          >
            <IonIcon aria-hidden="true" src={searchIcon} className="h-6 w-6" />
            {selectedTab == "tab2" && (
              <div className="text-xs font-medium tracking-[0.12px]">
                Search
              </div>
            )}
          </div>
        </IonTabButton>
        <IonTabButton tab="tab3" href="/tab3">
          <div
            className={
              "px-3 py-2 rounded-2xl flex gap-1 items-center transition-all duration-300 " +
              (selectedTab == "tab3" && "bg-primary-soft")
            }
          >
            <IonIcon aria-hidden="true" src={personIcon} className="h-6 w-6" />
            {selectedTab == "tab3" && (
              <div className="text-xs font-medium tracking-[0.12px]">
                Profile
              </div>
            )}
          </div>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export { Tabs };
