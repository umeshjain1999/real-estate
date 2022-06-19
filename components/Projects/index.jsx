import React from "react";
import styled from "styled-components";
import { CircularstdBookNormalBlack14px } from "../../styledMixins";


function Projects(props) {
  const { children, className } = props;

  return (
    <Projects1 className={`projects ${className || ""}`}>
      <Projects2 className="projects-1">{children}</Projects2>
    </Projects1>
  );
}

const Projects1 = styled.div`
  margin-top: 10px;
  height: 40px;
  margin-left: 40px;
  display: flex;
  padding: 9px 10px;
  align-items: flex-start;
  min-width: 72px;

  &.projects.partners {
    min-width: 73px;
  }
`;

const Projects2 = styled.div`
  ${CircularstdBookNormalBlack14px}
  min-height: 20px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

export default Projects;
