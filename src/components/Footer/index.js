import React from "react";

export default function index() {
  return (
    <div className="text-white py-16 sm:flex justify-between text-center">
      <div className="flex justify-center">
        <a href="mailto:shehabhasan2020@gmail.com">
          <img className="h-8 mr-10" src="./icons/envelope.svg" alt="" />
        </a>
        <a
          href="https://www.linkedin.com/in/shehab-emon-79024a177/"
          target={"_blank"}
        >
          <img className="h-8 mr-10" src="./icons/linkedin.svg" alt="" />
        </a>
        <a href="" target={"_blank"}>
          <img className="h-8 mr-10" src="./icons/instagram.svg" alt="" />
        </a>
        <a href="https://www.behance.net/shehabemon" target={"_blank"}>
          <img className="h-8 mr-10" src="./icons/behance.svg" alt="" />
        </a>
      </div>
      <p className="self-center mt-6 sm:mt-0 sm:block">
        Copyright@2021 Shehab. All rights reserved.
      </p>
    </div>
  );
}
