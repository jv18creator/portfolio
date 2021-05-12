import React, { lazy, Suspense, useEffect } from "react";
import "./App.css";
import ReactGA from "react-ga";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Overview from "./pages/Overview";
import PageNotFound from "./pages/404";
import styled from "styled-components";
import LoadImg from "./assets/avatar.svg";
import Services from "./pages/Services";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import firebase from "firebase";
import { firebaseAnalytics } from "./Helpers/firebaseConfig";
// import { Loader } from 'react-loader-spinner';
const Sidebar = lazy(() => import("./components/Sidebar"));

const LoadingWait = styled.img`
  width: 250px;
  height: 250px;
  background: center no-repeat;
  display: block;
  animation: shrinkGrow 2s ease infinite;
  padding: 20px;
  margin: 50% 50%;
  @keyframes shrinkGrow {
    0% {
      transform: scale(0.7);
    }
    50% {
      transform: scale(1.3);
    }
    100% {
      transform: scale(1);
    }
  }
`;

// firebase.initializeApp(firebaseApp);

function App() {
  useEffect(() => {
    firebaseAnalytics.logEvent('homepage_visited ')
    ReactGA.initialize("G-NHW4EP16PN");
    // ReactGA.pageview(window.location.pathname + window.location.search);
    ReactGA.pageview(window.location.pathname + window.location.search);
    // console.log(window.location.pathname);
  }, []);
  return (
    <>
      <Suspense fallback={<LoadingWait src={LoadImg} />}>
        <Router>
          <Sidebar />
          <Switch>
            <Route component={Overview} path="/" exact={true} />
            <Route component={Work} path="/work" />
            <Route component={Services} path="/services" />
            <Route component={Contact} path="/contact" />
            <Route component={PageNotFound} />
          </Switch>
        </Router>
      </Suspense>
    </>
  );
}

export default App;
