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
import MovieDetailPage from "@/pages/movies/MovieDetailPage/MovieDetailPage";
import { Tabs } from "@/shared/Tabs";
import { HomePage } from "@/pages/HomePage/HomePage";
import { LoginPage } from "@/pages/LoginPage/LoginPage";
import { SignUpPage } from "@/pages/SignUpPage/SignUpPage";
import { ResetPasswordPage } from "@/pages/ResetPasswordPage/ResetPasswordPage";
import { VerifyAccountPage } from "@/pages/VerifyAccountPage/VerifyAccountPage";
import { CreateNewPasswordPage } from "@/pages/CreateNewPasswordPage/CreateNewPasswordPage";
import { MoviesByCategoryPage } from "@/pages/movies/MoviesByCategoryPage/MoviesByCategoryPage";
import { useDevice } from "@/hooks/useDevice";
import { useGenres } from "@/hooks/useGenres";
import { MoviesByGenrePage } from "@/pages/movies/MoviesByGenrePage/MoviesByGenrePage";
setupIonicReact({
  mode: "ios",
});

const App: React.FC = () => {
  useDevice();
  useGenres();

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
          <Route
            exact
            path="/movie/:movieId"
            component={MovieDetailPage}
          ></Route>
          <Route exact path="/movies/popular">
            <MoviesByCategoryPage
              url="/movie/popular"
              title="Popular Movies"
              storeKey="popular"
            />
          </Route>
          <Route exact path="/movies/now-playing">
            <MoviesByCategoryPage
              url="/movie/now_playing"
              title="Now Playing Movies"
              storeKey="now_playing"
            />
          </Route>
          <Route exact path="/movies/top-rated">
            <MoviesByCategoryPage
              url="/movie/top_rated"
              title="Top Rated Movies"
              storeKey="top_rated"
            />
          </Route>
          <Route exact path="/movies/upcoming">
            <MoviesByCategoryPage
              url="/movie/upcoming"
              title="Upcoming Movies"
              storeKey="upcoming"
            />
          </Route>
          <Route exact path="/movies/genre/:genreId">
            <MoviesByGenrePage />
          </Route>
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
