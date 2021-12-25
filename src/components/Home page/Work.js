import React from "react";
import "../../css/Work.scss";
const data = [
  {
    number: "01",
    name: "Winery Store",
    status: "Completed",
  },
  {
    number: "02",
    name: "Moviezen",
    status: "Completed",
  },
  {
    number: "03",
    name: "Clothing store",
    status: "Completed",
  },
  {
    number: "04",
    name: "Jewelry store",
    status: "Completed",
  },
];

export default function Work() {
  return (
    <div className="work-section text-white mt-56">
      <span style={{ color: "#7A7A7A" }}>/selected projects</span>
      <div className="mt-6">
        {data.map((item) => (
          <div class="projects-list cursor-pointer">
            <hr />
            <div className="flex justify-between">
              <p>{item.number}</p>
              <div className="flex">
                <h1 className="mr-4 sm:mr-8">{item.name}</h1>
                <img
                  className="project-arrow hidden sm:block h-6 self-center ml-2 self-end"
                  src="./icons/Square-arrow.png"
                  alt=""
                />
              </div>
              <p className="self-end" style={{ color: "#7A7A7A" }}>
                {item.status}
              </p>
            </div>
            <hr />
          </div>
        ))}
      </div>
      <a href="#a" className="uppercase text-2xl flex justify-end mt-10 view-all-projects">
        <p className="mr-6 view-all">View all</p>
        <img src="./icons/Right-arrow.png" alt="" />
      </a>
    </div>
  );
}
