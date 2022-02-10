import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Enthusiasm from "./components/Enthusiasm";
import AllEventsPage from "./pages/AllEvents";
import FavouritesPage from "./pages/Favourites";
import NewEventPage from "./pages/NewEvent";
import EventsNavbar from "./components/layout/EventsNavbar";

function App() {
  return (
    <div>
      <EventsNavbar />
      <Switch>
        <Route path="/" exact>
          <AllEventsPage />
        </Route>
        <Route path="/favourites">
          <FavouritesPage />
        </Route>
        <Route path="/newevent">
          <NewEventPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
