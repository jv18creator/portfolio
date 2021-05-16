import React from "react";
import styled from "styled-components";
// import DevBridge from ''

const MainBox = styled.figure`
  background-color: var(--lightBackCol);
  border-radius: 12px;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 3;
  :hover {
    /* border: 4px solid var(--strongOrange); */
    transition: all 0.3s ease-in;
  }
`;

const ProjectLink = styled.a`
  padding: 5px 30px;
  color: var(--strongOrange);
  border: 3px solid var(--strongOrange);
  text-decoration: none;
  border-radius: 4px;
  :hover {
    background-color: var(--strongOrange);
    color: white;
  }
`;

const ProjectName = styled.h3`
  font-size: 28px;
  color: #fff;
`;

const WorkShowCase = (props) => {
  return (
    <MainBox className="figure">
      <img
        src={props.imgSrc}
        style={{ width: "100%" }}
        alt={props.imgAlt}
        loading="lazy"
      />
      <figcaption>
        <ProjectName>{props.projectname}</ProjectName>
        <p style={{ color: "#fff" }}>{props.subname}</p>
        <ProjectLink href={props.link} target="_blank" rel="noreferrer">
          {props.linkname}
        </ProjectLink>
      </figcaption>
    </MainBox>
  );
};

export default WorkShowCase;
