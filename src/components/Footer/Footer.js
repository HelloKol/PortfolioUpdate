import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div className="text-white py-10 sm:flex justify-between mt-36">
        <div className="flex">
          <img className="h-8 mr-10" src="./icons/envelope.svg" alt="" />
          <img className="h-8 mr-10" src="./icons/linkedin.svg" alt="" />
          <img className="h-8 mr-10" src="./icons/instagram.svg" alt="" />
          <img className="h-8 mr-10" src="./icons/behance.svg" alt="" />
        </div>
        <p className="self-center mt-6 sm:mt-0 text-center sm:block">Copyright@2021 Shehab. All rights reserved.</p>
      </div>
    );
  }
}
