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
import { IonRouterOutlet } from "@ionic/react";
import { Redirect, Route } from "react-router";
import ProtectedRoute from "./ProtectedRoute";
import RedirectRoute from "./RedirectRoute";

const AppRouter = () => {
  return (
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/">
          <RedirectRoute>
            <HomePage />
          </RedirectRoute>
        </Route>
        <Route exact path="/login">
          <RedirectRoute>
            <LoginPage />
          </RedirectRoute>
        </Route>
        <Route exact path="/signup">
          <RedirectRoute>
            <SignUpPage />
          </RedirectRoute>
        </Route>
        <Route exact path="/reset-password">
          <RedirectRoute>
            <ResetPasswordPage />
          </RedirectRoute>
        </Route>
        <Route exact path="/verify-account">
          <RedirectRoute>
            <VerifyAccountPage />
          </RedirectRoute>
        </Route>
        <Route exact path="/create-new-password">
          <RedirectRoute>
            <CreateNewPasswordPage />
          </RedirectRoute>
        </Route>
        <Route exact path="/movie/:movieId">
          <ProtectedRoute>
            <MovieDetailPage />
          </ProtectedRoute>
        </Route>
        <Route exact path="/tv/:serieId">
          <ProtectedRoute>
            <SerieDetailPage />
          </ProtectedRoute>
        </Route>
        <Route exact path="/movies/popular">
          <ProtectedRoute>
            <ItemsByCategoryPage
              url="/movie/popular"
              title="Popular Movies"
              storeKey="popular"
              type="movie"
            />
          </ProtectedRoute>
        </Route>
        <Route exact path="/movies/now-playing">
          <ProtectedRoute>
            <ItemsByCategoryPage
              url="/movie/now_playing"
              title="Now Playing Movies"
              storeKey="now_playing"
              type="movie"
            />
          </ProtectedRoute>
        </Route>
        <Route exact path="/movies/top-rated">
          <ProtectedRoute>
            <ItemsByCategoryPage
              url="/movie/top_rated"
              title="Top Rated Movies"
              storeKey="top_rated"
              type="movie"
            />
          </ProtectedRoute>
        </Route>
        <Route exact path="/movies/upcoming">
          <ProtectedRoute>
            <ItemsByCategoryPage
              url="/movie/upcoming"
              title="Upcoming Movies"
              storeKey="upcoming"
              type="movie"
            />
          </ProtectedRoute>
        </Route>
        <Route exact path="/movies/genre/:genreId">
          <ProtectedRoute>
            <ItemsByGenrePage type="movie" />
          </ProtectedRoute>
        </Route>
        {/* series */}
        <Route exact path="/tv/popular">
          <ProtectedRoute>
            <ItemsByCategoryPage
              url="/tv/popular"
              title="Popular Series"
              storeKey="popular"
              type="tv"
            />
          </ProtectedRoute>
        </Route>
        <Route exact path="/tv/airing_today">
          <ProtectedRoute>
            <ItemsByCategoryPage
              url="/tv/airing_today"
              title="Airing Today Series"
              storeKey="airing_today"
              type="tv"
            />
          </ProtectedRoute>
        </Route>
        <Route exact path="/tv/on_the_air">
          <ProtectedRoute>
            <ItemsByCategoryPage
              url="/tv/on_the_air"
              title="On The Air Series"
              storeKey="on_the_air"
              type="tv"
            />
          </ProtectedRoute>
        </Route>
        <Route exact path="/tv/top_rated">
          <ProtectedRoute>
            <ItemsByCategoryPage
              url="/tv/top_rated"
              title="Top Rated Series"
              storeKey="top_rated"
              type="tv"
            />
          </ProtectedRoute>
        </Route>
        <Route exact path="/tabs/:id">
          <Tabs></Tabs>
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  );
};

export { AppRouter };
