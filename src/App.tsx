import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { person, search, home } from "ionicons/icons";
import { HomePage } from "./pages/HomePage/HomePage";
import Tab2 from "./pages/Tab2";
import Tab3 from "./pages/Tab3";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import MoviePage from "./pages/MoviePage/MoviePage";
import SeriePage from "./pages/serie/SeriePage";
import homeIcon from "@/assets/tabs/home.svg";
import searchIcon from "@/assets/tabs/search.svg";
import personIcon from "@/assets/tabs/person.svg";
import { useState } from "react";

setupIonicReact({
  mode: "ios",
});

const App: React.FC = () => {
  const [selectedTab, setselectedTab] = useState("home");
  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs onIonTabsWillChange={(tab) => setselectedTab(tab.detail.tab)}>
          <IonRouterOutlet>
            <Route exact path="/home">
              <HomePage />
            </Route>
            <Route exact path="/movie/:movieId">
              <MoviePage />
            </Route>
            <Route exact path="/tab1/serie/:serieId">
              <SeriePage />
            </Route>
            <Route exact path="/tab2">
              <Tab2 />
            </Route>
            <Route path="/tab3">
              <Tab3 />
            </Route>
            <Route exact path="/">
              <Redirect to="/home" />
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
                <IonIcon
                  aria-hidden="true"
                  src={homeIcon}
                  className="h-6 w-6"
                />
                {selectedTab == "home" && (
                  <div className="text-xs font-medium tracking-[0.12px]">
                    Home
                  </div>
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
                <IonIcon
                  aria-hidden="true"
                  src={searchIcon}
                  className="h-6 w-6"
                />
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
                <IonIcon
                  aria-hidden="true"
                  src={personIcon}
                  className="h-6 w-6"
                />
                {selectedTab == "tab3" && (
                  <div className="text-xs font-medium tracking-[0.12px]">
                    Profile
                  </div>
                )}
              </div>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
