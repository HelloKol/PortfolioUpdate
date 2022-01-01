import React, { useEffect } from "react";
import "../../css/Loader.scss";

export default function Loader() {
  useEffect(() => {
    var preLoader = document.querySelector(".pre-loader"),
      bar = document.querySelector(".progress-bar"),
      counter = document.querySelector(".count"),
      i = 0,
      throttle = 0.6;

    (function draw() {
      if (i <= 100) {
        var r = Math.random();

        requestAnimationFrame(draw);
        bar.style.width = i + "%";
        counter.innerHTML = Math.round(i) + "%";

        if (r < throttle) {
          i = i + r + r + r;
        }
      } else {
        preLoader.className += " hidden";
      }
    })();
  }, []);

  return (
    <div className="pre-loader text-white">
      <p className="progress-desc">
        If you are using a 4k monitor then please zoom into <br />
        150% on your browser for the best experience.
      </p>
      <div class="progress-bar-container">
        <div class="progress-bar"></div>
      </div>
      <p class="count"></p>
    </div>
  );
}
