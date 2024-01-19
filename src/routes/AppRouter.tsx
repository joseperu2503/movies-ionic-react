import { MovieDetailPage } from "@/pages/MovieDetailPage/MovieDetailPage";
import { Tabs } from "@/shared/Tabs";
import { HomePage } from "@/pages/HomePage/HomePage";
import { LoginPage } from "@/pages/LoginPage/LoginPage";
import { SignUpPage } from "@/pages/SignUpPage/SignUpPage";
import { ResetPasswordPage } from "@/pages/ResetPasswordPage/ResetPasswordPage";
import { VerifyAccountPage } from "@/pages/VerifyAccountPage/VerifyAccountPage";
import { CreateNewPasswordPage } from "@/pages/CreateNewPasswordPage/CreateNewPasswordPage";
import { ItemsByCategoryPage } from "@/pages/ItemsByCategoryPage/ItemsByCategoryPage";
import { ItemsByGenrePage } from "@/pages/ItemsByGenrePage/ItemsByGenrePage";
import { SerieDetailPage } from "@/pages/SerieDetailPage/SerieDetailPage";
import { IonReactRouter } from "@ionic/react-router";
import { IonRouterOutlet, IonSplitPane } from "@ionic/react";
import { Route } from "react-router";

import { EditProfilePage } from "@/pages/EditProfilePage/EditProfilePage";
import { HomeTabPage } from "@/pages/HomeTabPage/HomeTabPage";
import { SearchTabPage } from "@/pages/SearchTabPage/SearchTabPage";
import { ProfileTabPage } from "@/pages/ProfileTabPage/ProfileTabPage";

const AppRouter = () => {
  return (
    <IonReactRouter>
      <IonRouterOutlet>
        {/* <Route path="/tabs" render={() => <Tabs />}></Route> */}

        <Route exact path="/login" component={LoginPage} />

        <Route exact path="/signup" component={SignUpPage} />

        <Route exact path="/reset-password" component={ResetPasswordPage} />

        <Route exact path="/verify-account" component={VerifyAccountPage} />

        <Route
          exact
          path="/create-new-password"
          component={CreateNewPasswordPage}
        />

        <Route path="/home" render={() => <HomeTabPage />} />

        <Route path="/search" render={() => <SearchTabPage />} />

        <Route path="/profile" render={() => <ProfileTabPage />} />

        <Route path="/movie/:movieId" component={MovieDetailPage} />
        <Route exact path="/tv/:serieId" component={SerieDetailPage} />

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
        <Route exact path="/edit-profile" component={EditProfilePage}></Route>
        <Route exact path="/" component={HomePage} />
      </IonRouterOutlet>
    </IonReactRouter>
  );
};

export { AppRouter };
