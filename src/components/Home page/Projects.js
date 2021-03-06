import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import "../../css/Project.scss";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const projectsData = collection(db, "portfolio");

  const getProjectsData = async () => {
    const data = await getDocs(projectsData);
    setProjects(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getProjectsData();
  }, []);

  return (
    <div className="project-section text-white mt-60 mb-20">
      <span style={{ color: "#7A7A7A" }}>/selected projects</span>
      <div className="mt-6">
        {projects.slice(0, 4).map((item) => (
          <div class="projects-list cursor-pointer">
            <hr />
            <div className="flex justify-between">
              <p>{item.number}</p>
              <Link to={`/work/${item.name}`}>
                <div className="project-link flex">
                  <h1 className="mr-4 sm:mr-8">{item.name}</h1>
                  <img
                    className="project-arrow hidden sm:block h-6 self-center ml-2 self-end"
                    src="./icons/Square-arrow.png"
                    alt=""
                  />
                  <div className="hover-reveal">
                    <img src={item.thumbnail} class="hidden-img" alt="" />
                  </div>
                </div>
              </Link>
              <p className="self-end" style={{ color: "#7A7A7A" }}>
                {item.status}
              </p>
            </div>
            <hr />
          </div>
        ))}
      </div>
      <Link to={`/work`}>
        <a
          href="#a"
          className="uppercase text-md sm:text-2xl flex justify-end mt-10 view-all-projects"
        >
          <p className="mr-6 view-all">View all</p>
          <img src="./icons/Right-arrow.png" alt="" />
        </a>
      </Link>
    </div>
  );
}
