export default function About() {
  return (
    <div className="text-white mt-60">
      <span style={{ color: "#7A7A7A" }}>/about me</span>
      <h1 className="mt-6 text-xl lg:text-3xl xl:text-4xl">
        Hi, I am Shehab Emon. Located in London, United kingdom. I am currently
        in my final year of university studying computer science, looking for
        junior level job as a UI designer or front-end web developer. I am
        familiar with the following technology&nbsp;
        <span className="skills text-my-red">
          HTML - CSS3 - Tailwind - Javascript - React - Firebase - Git - Figma
        </span>
      </h1>
      <a
        className="flex flex-row mt-6 md:mt-14"
        href="/projectMedia/updated-cv-compressed.pdf"
        target={"_blank"}
      >
        <h2
          style={{ fontFamily: "Monument Extended", fontWeight: "400" }}
          className="uppercase text-3xl md:text-5xl mr-4"
        >
          Resume
        </h2>
        <img
          className="max-h-10 self-center"
          src="/icons/Square-arrow.png"
          alt=""
        />
      </a>
    </div>
  );
}
