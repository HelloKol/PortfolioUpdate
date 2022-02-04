import React from "react";
import Footer from "../Footer";
import "../../css/Contact.scss";

export default function index() {
  return (
    <div id="contacts">
      <div className="contact-page text-white md:mt-10 mt-20 mb-14">
        <div className="flex md:flex-row flex-col mb-10">
          <h1 className="header">Please feel free to contact me anytime</h1>

          <div className="right-contact md:mt-56 mt-6 text-xl">
            <p className="mb-14">
              Here is a list of ways to get in touch with me. Feel free to use
              any convinient method and i will get back as soon as possible.
            </p>

            <div>
              <p className="mb-4 text-my-red">Location:</p>
              <p className="mb-4">London, United Kingdom</p>
              <div className="flex flex-row">
                <a
                  className="flex flex-row mr-10"
                  href="https://www.linkedin.com/in/shehab-emon-79024a177/"
                  target={"_blank"}
                >
                  <p className="mr-4">Linkedin</p>
                  <img src="/Square-arrow.png" alt="" />
                </a>

                <a
                  className="flex flex-row"
                  href="https://www.behance.net/shehabemon"
                  target={"_blank"}
                >
                  <p className="mr-4">Behance</p>
                  <img src="/Square-arrow.png" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <a className="email underline break-words" href="mailto:shehabhasan2020@gmail.com">
          shehabhasan2020@gmail.com
        </a>
      </div>
      <Footer />
    </div>
  );
}
