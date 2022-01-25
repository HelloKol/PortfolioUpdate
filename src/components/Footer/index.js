import React from "react";

export default function index() {
  return (
    <div className="text-white py-20 sm:flex justify-between text-center">
      <div className="flex justify-center">
        <img className="h-8 mr-10" src="./icons/envelope.svg" alt="" />
        <img className="h-8 mr-10" src="./icons/linkedin.svg" alt="" />
        <img className="h-8 mr-10" src="./icons/instagram.svg" alt="" />
        <img className="h-8 mr-10" src="./icons/behance.svg" alt="" />
      </div>
      <p className="self-center mt-6 sm:mt-0 sm:block">
        Copyright@2021 Shehab. All rights reserved.
      </p>
    </div>
  );
}
