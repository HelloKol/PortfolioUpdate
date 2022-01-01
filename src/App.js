import CustomCursor from "./components/Custom cursor";
import Scrollbar from "react-smooth-scrollbar";
import SmoothScrollbar from "smooth-scrollbar";
import OverscrollPlugin from "smooth-scrollbar/plugins/overscroll";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./components/Home page";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import WorkDetails from "./components/Work/WorkDetails";
import Contacts from "./components/Contacts";
import NotFound from "./components/Error page";
import Loader from "./components/Pre loader";

function App() {
  const [loaderState, setLoader] = useState(true);

  SmoothScrollbar.use(OverscrollPlugin);
  useEffect(() => {
    // Mouse scale up when hover over links
    let aTags = document.getElementsByTagName("a");
    let secondaryCursor = document.getElementById("cursor-background");

    for (var i = 0; i < aTags.length; i++) {
      aTags[i].addEventListener("mouseenter", function (event) {
        secondaryCursor.style.transform = "scale(2)";
      });

      aTags[i].addEventListener("mouseleave", function (event) {
        secondaryCursor.style.transform = "scale(1)";
      });
    }

    // Pre loader time before removing
    setTimeout(() => setLoader(false), 3000);
  }, []);

  return window.location.pathname === "/" && loaderState ? (
    <Loader />
  ) : (
    <div className="px-6 sm:p-0">
      <Router>
        <CustomCursor />
        <Scrollbar
          damping={0.04}
          renderByPixels={true}
          alwaysShowTracks={false}
        >
          <div className="px-4 sm:px-10 lg:container mx-auto">
            <Navbar />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/work" exact component={Work} />
              <Route path="/work/:value" component={WorkDetails} />
              <Route path="/contact" exact component={Contacts} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Scrollbar>
      </Router>
    </div>
  );
}

export default App;
