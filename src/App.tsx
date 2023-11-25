import { Route } from "react-router-dom";
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
import { MovieDetailPage } from "@/pages/MovieDetailPage/MovieDetailPage";
import { Tabs } from "@/shared/Tabs";
import { HomePage } from "@/pages/HomePage/HomePage";
import { LoginPage } from "@/pages/LoginPage/LoginPage";
import { SignUpPage } from "@/pages/SignUpPage/SignUpPage";
import { ResetPasswordPage } from "@/pages/ResetPasswordPage/ResetPasswordPage";
import { VerifyAccountPage } from "@/pages/VerifyAccountPage/VerifyAccountPage";
import { CreateNewPasswordPage } from "@/pages/CreateNewPasswordPage/CreateNewPasswordPage";
import { ItemsByCategoryPage } from "@/pages/ItemsByCategoryPage/ItemsByCategoryPage";
import { useDevice } from "@/hooks/useDevice";
import { useGenres } from "@/hooks/useGenres";
import { ItemsByGenrePage } from "@/pages/ItemsByGenrePage/ItemsByGenrePage";
import { SerieDetailPage } from "./pages/SerieDetailPage/SerieDetailPage";
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
          <Route exact path="/tv/:serieId" component={SerieDetailPage}></Route>
          <Route exact path="/movies/popular">
            <ItemsByCategoryPage
              url="/movie/popular"
              title="Popular Movies"
              storeKey="popular"
              type="movie"
            />
          </Route>
          <Route exact path="/movies/now-playing">
            <ItemsByCategoryPage
              url="/movie/now_playing"
              title="Now Playing Movies"
              storeKey="now_playing"
              type="movie"
            />
          </Route>
          <Route exact path="/movies/top-rated">
            <ItemsByCategoryPage
              url="/movie/top_rated"
              title="Top Rated Movies"
              storeKey="top_rated"
              type="movie"
            />
          </Route>
          <Route exact path="/movies/upcoming">
            <ItemsByCategoryPage
              url="/movie/upcoming"
              title="Upcoming Movies"
              storeKey="upcoming"
              type="movie"
            />
          </Route>
          <Route exact path="/movies/genre/:genreId">
            <ItemsByGenrePage type="movie" />
          </Route>
          {/* series */}
          <Route exact path="/tv/popular">
            <ItemsByCategoryPage
              url="/tv/popular"
              title="Popular Series"
              storeKey="popular"
              type="tv"
            />
          </Route>
          <Route exact path="/tv/airing_today">
            <ItemsByCategoryPage
              url="/tv/airing_today"
              title="Airing Today Series"
              storeKey="airing_today"
              type="tv"
            />
          </Route>
          <Route exact path="/tv/on_the_air">
            <ItemsByCategoryPage
              url="/tv/on_the_air"
              title="On The Air Series"
              storeKey="on_the_air"
              type="tv"
            />
          </Route>
          <Route exact path="/tv/top_rated">
            <ItemsByCategoryPage
              url="/tv/top_rated"
              title="Top Rated Series"
              storeKey="top_rated"
              type="tv"
            />
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
