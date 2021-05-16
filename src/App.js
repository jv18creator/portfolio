import React, { lazy, Suspense, useEffect } from "react";
import "./App.css";
import ReactGA from "react-ga";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Overview from "./pages/Overview";
import PageNotFound from "./pages/404";
// import Services from "./pages/Services";
// import Work from "./pages/Work";
// import Contact from "./pages/Contact";
import { firebaseAnalytics } from "./Helpers/firebaseConfig";

const Sidebar = lazy(() => import("./components/Sidebar"));
const Services = lazy(() => import("./pages/Services"));
const Work = lazy(() => import("./pages/Work"));
const Contact = lazy(() => import("./pages/Contact"));


function App() {
  useEffect(() => {
    firebaseAnalytics.logEvent("homepage_visited ");
    ReactGA.initialize("G-NHW4EP16PN");
    // ReactGA.pageview(window.location.pathname + window.location.search);
    ReactGA.pageview(window.location.pathname + window.location.search);
    // console.log(window.location.pathname);
  }, []);
  return (
    <>
      <Router>
        <Suspense fallback={<div />}>
          <Sidebar />
        </Suspense>
        <Switch>
          <Route component={Overview} path="/" exact={true} />
          <Suspense fallback={<div />}>
            <Route component={Work} path="/work" />
            <Route component={Services} path="/services" />
            <Route component={Contact} path="/contact" />
          </Suspense>
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
