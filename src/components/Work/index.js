import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// FIREBASE
import { collection, getDocs, updateDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
// CSS
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
    <div className="text-white work-list">
      {projects.map((item) => (
        <div>
          <nav class="work-menu">
            <div class="work-item">
              <Link class="work-item-link" to={`work/${item.name}`}>
                <a>{item.name}</a>
              </Link>
              <img class="work-item-img" src={item.thumbnail} />
            </div>
          </nav>
        </div>
      ))}
    </div>
  );
}
