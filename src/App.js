import CustomCursor from "./components/Custom cursor";
import Scrollbar from "react-smooth-scrollbar";
import SmoothScrollbar from "smooth-scrollbar";
import OverscrollPlugin from "smooth-scrollbar/plugins/overscroll";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useEffect } from "react";
import Home from "./components/Home page";
import Navbar from "./components/Navbar";
import Contacts from "./components/Contacts";

function App() {
  SmoothScrollbar.use(OverscrollPlugin);
  useEffect(() => {
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
  }, []);

  return (
    <div className="px-6 sm:p-0">
      <Router>
        <CustomCursor />
        <Scrollbar damping={0.04} renderByPixels={true} alwaysShowTracks={true}>
          <div className="container mx-auto ">
            <Navbar />
            <Route path="/" exact component={Home} />
            <Route path="/contacts" exact component={Contacts} />
          </div>
        </Scrollbar>
      </Router>
    </div>
  );
}

export default App;
