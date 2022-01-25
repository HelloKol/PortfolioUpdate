import React from "react";

export default function About() {
  return (
    <div id="about" className="text-white mt-56">
      <span style={{ color: "#7A7A7A" }}>/about me</span>
      <h1 className="mt-6 text-xl lg:text-3xl xl:text-4xl">
        Hi, I am Shehab Emon. Located in London, United kingdom. I am currently
        in my final year of university studying computer science. I am looking
        for freelancing job as a designer or an entry level job for web
        development. I am familiar with the following technology&nbsp;
        <span className="skills">
          HTML - CSS3 - SCSS - Tailwind - Javascript - React - Firebase - Git -
          Figma
        </span>
      </h1>
      <a href="/projectMedia/updated-cv-compressed.pdf" target={"_blank"}>
        <div className="flex flex-row mt-14">
          <h2 className="uppercase text-3xl md:text-5xl mr-4">Resume</h2>
          <img
            className="max-h-10 self-center"
            src="/icons/Square-arrow.png"
            alt=""
          />
        </div>
      </a>
    </div>
  );
}
