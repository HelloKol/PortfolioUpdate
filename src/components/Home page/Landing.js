import React, { useRef, useEffect } from "react";
import "../../css/Landing.scss";
import { gsap } from "gsap";
import CSSRulePlugin from "gsap/CSSRulePlugin";

export default function Landing() {
  let tl = useRef();
  let scrollDownText = useRef();
  let scrollDownArrowBox = useRef();

  useEffect(() => {
    tl = gsap.timeline();
    tl.to(".hero-text-wrapper h1 span", {
      duration: 2,
      y: 0,
      stagger: {
        amount: 0.8,
      },
    })
      .to(
        ".hero-work-links a",
        {
          y: 0,
          duration: 0.6,
          opacity: 1,
          stagger: {
            amount: 0.2,
          },
        },
        "-=0.8"
      )
      .to(scrollDownText.current, {
        opacity: 1,
      })
      .to(scrollDownArrowBox.current, {
        height: 0,
      });
  }, []);

  return (
    <div className="landing-section text-white mt-20">
      <div className="hero-text-wrapper">
        <h1 className="sm:text-45vw overflow-hidden">
          <span>UI/UX & Front end developer. I create</span>
        </h1>
        <h1 className="sm:text-45vw overflow-hidden">
          <span>very stunning and engaging website</span>
        </h1>
        <h1 className="sm:text-45vw overflow-hidden">
          <span>designs. I also make the designs come</span>
        </h1>
        <h1 className="sm:text-45vw overflow-hidden">
          <span> to life from scratch.</span>
        </h1>
      </div>

      <div className="flex justify-between mt-40">
        <div className="hero-work-links flex items-end sm:text-2xl">
          <a
            href="https://github.com/HelloKol"
            target="_blank"
            className="mr-5 sm:mr-20 flex"
          >
            Github
            <img
              className="h-6 self-center ml-2"
              src="./icons/Square-arrow.png"
              alt=""
            />
          </a>
          <a
            href="https://www.behance.net/shehabemon"
            target="_blank"
            className="mr-5 sm:mr-20 flex"
          >
            Behance
            <img
              className="h-6 self-center ml-2"
              src="./icons/Square-arrow.png"
              alt=""
            />
          </a>
          <a href="https://codepen.io/Kol1" target="_blank" className="flex">
            Codepen
            <img
              className="h-6 self-center ml-2"
              src="./icons/Square-arrow.png"
              alt=""
            />
          </a>
        </div>

        <div class=" hidden sm:grid grid-rows-3 grid-flow-col justify-items-center">
          <div class="col-span-2 -mt-20">
            <p className="scroll-down" ref={scrollDownText}>
              Scroll down
            </p>
          </div>
          <div className="row-span-2 col-span-2 -mt-8 down-arrow-container">
            <div className="down-arrow-box" ref={scrollDownArrowBox}></div>
            <img
              className="h-20 down-arrow"
              src="./icons/Down-arrow.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
