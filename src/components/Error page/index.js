import React from "react";
import { Link } from "react-router-dom";
import "../../css/Error.scss";

export default function NotFound() {
  return (
    <div className="error-page text-white text-center md:mt-0 mt-20">
      <div className="flex justify-center">
        <h1>4</h1>
        <h1>0</h1>
        <h1>4</h1>
      </div>

      <div className="text-xl">
        <h2>Oops! An error occured.</h2>
        <h3>The page you are looking for does not exist.</h3>
        <Link to="/PortfolioUpdate">
          <span className="flex justify-center mt-10">
            <img
              className="transform rotate-180 mr-6"
              src="/Right-arrow.png"
              alt=""
            />
            <p>Go Home</p>
          </span>
        </Link>
      </div>
    </div>
  );
}
