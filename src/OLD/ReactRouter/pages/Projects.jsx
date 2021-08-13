import React from "react";
import { useHistory } from "react-router-dom";

function Projects() {
  const history = useHistory();

  return (
    <div>
      this is the project page
      <button
        onClick={() => {
          history.push("/about");
        }}
      >
        Go To The About
      </button>
    </div>
  );
}

export default Projects;
