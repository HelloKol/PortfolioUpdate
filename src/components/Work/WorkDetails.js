import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// FIREBASE
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase";
// CSS
import "../../css/WorkDetails.scss";

export default function WorkDetails(props) {
  const [project, setProject] = useState([]);
  const projectData = collection(db, "portfolio");
  const q = query(projectData, where("name", "==", props.match.params.value));

  const getProjectData = async () => {
    const data = await getDocs(q);
    setProject(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getProjectData();
  }, []);

  return (
    <div className="text-white work-details">
      <Link to="/PortfolioUpdate/work">
        <div className="flex flex-row mb-14">
          <img
            className="transform rotate-180 mr-6"
            src="/Right-arrow.png"
            alt=""
          />
          <p>Go back</p>
        </div>
      </Link>
      {project.map((item) => (
        <>
          <h1 className="project-title">{item.name}</h1>
          <div className="flex lg:flex-row flex-col mt-5">
            <div className="flex flex-row extra-info">
              <span>
                <p className="text-xl">Type</p>
                <p className="text-gray-500" style={{ color: "#888888" }}>
                  {item.type}
                </p>
              </span>

              {item.tools ? (
                <span className="lg:ml-24 ml-14">
                  <p className="text-xl">Tools</p>
                  <p className="text-gray-500" style={{ color: "#888888" }}>
                    {item.tools}
                  </p>
                </span>
              ) : (
                <span className="lg:ml-24 ml-14">
                  <p className="text-xl">Tech</p>
                  {item.tech.map((techs) => (
                    <p className="text-gray-500" style={{ color: "#888888" }}>
                      {techs}
                    </p>
                  ))}
                </span>
              )}

              <span className="lg:ml-24 ml-14">
                <p className="text-xl">Status</p>
                <p className="text-gray-500" style={{ color: "#888888" }}>
                  {item.status}
                </p>
              </span>
            </div>

            <div className="lg:ml-44 ml-0 lg:mt-44 mt-16">
              <h1 className="brief-title mb-2">The brief</h1>
              <p>{item.description}</p>
            </div>
          </div>

          <div className="view-links flex flex-row">
            <span className="flex flex-row sm:mr-20 mr-16">
              <p>View Live</p>
              <img src="/Square-arrow.png" alt="" />
            </span>

            <span className="flex flex-row">
              <p>View Code</p>
              <img src="/Square-arrow.png" alt="" />
            </span>
          </div>

          <img src={item.thumbnail} alt="" />

          <div>
            <h1 className="final-product">The Final Product</h1>
            <img src={item.finalProduct} alt="" />
          </div>
        </>
      ))}
    </div>
  );
}
