import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {store, persistor} from './store/store'


// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/css/template.css";
import "assets/css/style.css";
import 'assets/scss/sass.scss';

// pages for this kit
import Home from "pages/Home.js";
import Technology from "pages/Technology.js";
import Farmers from "pages/Farmers";
import About from "pages/About.js";
import Contact from "pages/Contact.js";
import DetailsVehicle from "pages/DetailsVehicle.js";
import ThankYou from "pages/ThankYou";
import PikachuEmail from "pages/PikachuEmail";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HashRouter basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route
              path="/home"
              render={(props) => <Home {...props} />} />
            <Route
              path="/technology"
              render={(props) => <Technology {...props} />}
            />
            <Route
              path="/farmers"
              render={(props) => <Farmers {...props} />}
            />
            <Route
              path="/about"
              render={(props) => <About {...props} />}
            />
            <Route
              path="/contact"
              render={(props) => <Contact {...props} />}
            />
            <Route
              path="/vehicle/:id"
              render={(props) => <DetailsVehicle {...props} />}
            />
            <Route
              path="/thankyou"
              render={(props) => <ThankYou {...props} />}
            />
            <Route
              path="/pikaemail"
              render={(props) => <PikachuEmail {...props} />}
            />
            <Redirect from="*" to="/home" />
          </Switch>
        </HashRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

