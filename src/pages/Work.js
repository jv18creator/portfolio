import React from "react";
import styled from "styled-components";
import WorkShowCase from "./WorkShowCase";


const WorkContainer = styled.div`
  text-align: center;
`;
const WorkWrapper = styled.div`
  max-width: 1440px;
  margin: 60px auto;
  padding: 10px 40px;
  background-color: var(--bodyCol);
`;
const WorkHeading = styled.h1``;
const WorkSub = styled.p`
  font-size: 20px;
  margin-top: 1rem;
`;
const EmailLink = styled.a`
  color: var(--strongOrange);
  text-decoration: none;
`;

const ProjectContainer = styled.div`
  margin-top: 50px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: minmax(225px, 1fr);
  grid-gap: 1rem;
  @media (max-width: 580px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
`;

const Work = () => {
  return (
    <WorkContainer>
      <WorkWrapper>
        <WorkHeading>Some Things I’ve Built</WorkHeading>
        <WorkSub>
          Here are few projects I've worked on recently. Want to know how I did
          it?
          <EmailLink href="mailto:jviramgama5@gmail.com"> Email me.</EmailLink>
        </WorkSub>
        <ProjectContainer>
          <WorkShowCase projectname='Manage' subname='Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.' link='https://manage-frontend.netlify.app/' linkname='Visit'/>
          <WorkShowCase />
          <WorkShowCase />
          <WorkShowCase />
        </ProjectContainer>
      </WorkWrapper>
    </WorkContainer>
  );
};

export default Work;
