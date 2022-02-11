import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs} from "firebase/firestore";
import { db } from "../../firebase";
import "../../css/Work.scss";

export default function Work() {
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
    <div className="work-section text-white">
      <Link to="/">
        <span className="flex justify-end mt-10 mb-16 md:mb-0">
          <img
            className="transform rotate-180 mr-6"
            src="/Right-arrow.png"
            alt=""
          />
          <p>Go Home</p>
        </span>
      </Link>
      {projects.map((item) => (
        <nav class="work-menu">
          <div class="work-item">
            <Link class="/work-item-link" to={`work/${item.name}`}>
              <a>{item.name}</a>
            </Link>
            <img class="work-item-img" src={item.thumbnail} />
          </div>
        </nav>
      ))}
    </div>
  );
}