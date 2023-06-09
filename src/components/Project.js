import React from "react";
import "../components/pages/css/project.css";

// export default function Project (props){
export default function Project(props) {
  const openLink = (url) => {
    window.open(url, "_blank");
  };

  return (
    <main className="portbg">
      <h1>My Projects</h1>
      <div className="row">
        {props.projects.map((project) => (
          <div className="col-6 mx-auto p-4" key={project.id}>
            <div className="card">
              <img
                src={project.display}
                className="card-img-top img-fluid"
                alt="project screenshot"
              />
              <div className="card-body border-top">
                <div>
                  <h5 className="card-title">{project.name}</h5>
                  <p className="card-text">{project.description}</p>

                  <button
                    className="btn btn-outline-light mx-auto p-2"
                    onClick={() => openLink(project.github)}
                  >
                    Repository
                  </button>

                  {project.deployed && (
                    <button
                      className="btn btn-outline-light mx-auto p-2"
                      onClick={() => openLink(project.deployed)}
                    >
                      Deployed Link
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
