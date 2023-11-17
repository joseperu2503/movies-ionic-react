import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

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
import MoviePage from "@/pages/MoviePage/MoviePage";
import SeriePage from "@/pages/serie/SeriePage";
import { Tabs } from "@/shared/Tabs";
import { HomePage } from "./pages/HomePage/HomePage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { StatusBar, Style } from "@capacitor/status-bar";
import { isPlatform } from "@ionic/react";
import { useEffect } from "react";
import { SafeArea } from "capacitor-plugin-safe-area";
import { SignUpPage } from "./pages/SignUpPage/SignUpPage";
import { ResetPasswordPage } from "./pages/ResetPasswordPage/ResetPasswordPage";
import { VerifyAccountPage } from "./pages/VerifyAccountPage/VerifyAccountPage";
import { CreateNewPasswordPage } from "./pages/CreateNewPassword/CreateNewPasswordPage";

setupIonicReact({
  mode: "ios",
});

interface SafeAreaInterface {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

const App: React.FC = () => {
  useEffect(() => {
    if (isPlatform("capacitor")) {
      //statusbar transparente
      StatusBar.setOverlaysWebView({ overlay: true });
    }

    SafeArea.getSafeAreaInsets().then(({ insets }) => {
      setInsets(insets);
    });

    const setInsets = (insets: SafeAreaInterface) => {
      for (const [key, value] of Object.entries(insets)) {
        document.documentElement.style.setProperty(
          `--ion-safe-area-${key}`,
          `${value}px`
        );
      }
    };
  }, []);

  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route exact path="/login" component={LoginPage}></Route>
          <Route exact path="/signup" component={SignUpPage}></Route>
          <Route
            exact
            path="/reset-password"
            component={ResetPasswordPage}
          ></Route>
          <Route
            exact
            path="/verify-account"
            component={VerifyAccountPage}
          ></Route>
          <Route
            exact
            path="/create-new-password"
            component={CreateNewPasswordPage}
          ></Route>
          <Route exact path="/movie/:movieId" component={MoviePage}></Route>
          <Route exact path="/tabs/:id">
            <Tabs></Tabs>
          </Route>
          <Route exact path="/" component={HomePage}></Route>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
