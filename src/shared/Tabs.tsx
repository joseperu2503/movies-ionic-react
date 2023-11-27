import { HomeTabPage } from "@/pages/HomeTabPage/HomeTabPage";
import { SearchTabPage } from "@/pages/SearchTabPage/SearchTabPage";
import { ProfileTabPage } from "@/pages/ProfileTabPage/ProfileTabPage";
import "./Tabs.css";
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
import ProtectedRoute from "@/routes/ProtectedRoute";

const Tabs: React.FC = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route exact path="/tabs/home">
          <ProtectedRoute>
            <HomeTabPage />
          </ProtectedRoute>
        </Route>
        <Route exact path="/tabs/search">
          <ProtectedRoute>
            <SearchTabPage />
          </ProtectedRoute>
        </Route>
        <Route exact path="/tabs/profile">
          <ProtectedRoute>
            <ProfileTabPage />
          </ProtectedRoute>
        </Route>
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="home" href="/tabs/home">
          <div className="px-3 py-2 rounded-2xl flex gap-1 items-center transition-all duration-300 bg-tab">
            <IonIcon aria-hidden="true" src={homeIcon} className="h-6 w-6" />
            <div className="text-xs font-medium tab-label">Home</div>
          </div>
        </IonTabButton>
        <IonTabButton tab="search" href="/tabs/search">
          <div className="px-3 py-2 rounded-2xl flex gap-1 items-center transition-all duration-300 bg-tab">
            <IonIcon aria-hidden="true" src={searchIcon} className="h-6 w-6" />
            <div className="text-xs font-medium tab-label">Search</div>
          </div>
        </IonTabButton>
        <IonTabButton tab="profile" href="/tabs/profile">
          <div className="px-3 py-2 rounded-2xl flex gap-1 items-center transition-all duration-300 bg-tab">
            <IonIcon aria-hidden="true" src={personIcon} className="h-6 w-6" />
            <div className="text-xs font-medium tab-label">Profile</div>
          </div>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export { Tabs };
