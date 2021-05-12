import React, { useEffect } from "react";
import styled from "styled-components";
import WorkShowCase from "./WorkShowCase";
import Manage from "../assets/manage.jpg";
import SunShine from "../assets/sunshine.jpg";
import Dolla from "../assets/dolla.jpg";
import PortfolioImg from "../assets/portfolio.jpg";
import BackText from "../Helpers/BackText";
import ReactGA from "react-ga";
import { firebaseAnalytics } from "../Helpers/firebaseConfig";

const WorkContainer = styled.div`
  text-align: center;
`;
const WorkWrapper = styled.div`
  max-width: 1440px;
  margin: 60px auto;
  padding: 10px 3rem;
  background-color: var(--bodyCol);
  @media (max-width: 768px) {
    padding: 10px 2rem;
  }
  @media (max-width: 580px) {
    padding: 10px 1.2rem;
  }
`;
const WorkHeading = styled.h1`
  @media (max-width: 580px) {
    font-size: 26px;
  }
`;
const WorkSub = styled.p`
  font-size: 20px;
  margin-top: 1rem;
  @media (max-width: 580px) {
    font-size: 14px;
  }
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
  useEffect(() => {
        firebaseAnalytics.logEvent("workpage_visited");
    ReactGA.initialize("G-NHW4EP16PN");
    ReactGA.pageview(window.location.pathname + window.location.search);
    console.log(window.location.pathname);
  }, []);

  return (
    <WorkContainer>
      <WorkWrapper>
        <WorkHeading>Some Projects I’ve Built</WorkHeading>
        <WorkSub>
          Here are few projects I've worked on recently. Want to know how I did
          it?
          <EmailLink href="mailto:jviramgama5@gmail.com"> Email me.</EmailLink>
        </WorkSub>
        <ProjectContainer>
          <WorkShowCase
            projectname="Manage"
            subname="Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view."
            link="https://manage-frontend.netlify.app/"
            linkname="Visit"
            imgSrc={Manage}
            imgAlt="manage"
          />
          <WorkShowCase
            projectname="SunShine"
            subname="SunShine is a comprised of experienced project managers, web, mobile, designers, and front-end & back-end developers."
            link="https://sunshine-in.netlify.app/"
            imgSrc={SunShine}
            linkname="Visit"
            imgAlt="SunShine"
          />
          <WorkShowCase
            link="https://dollas.netlify.app/"
            imgSrc={Dolla}
            projectname="Dollas"
            subname="Dollas make virtual banking easy and safe at reasonable price."
            linkname="Visit"
            imgAlt="Dollas"
          />
          <WorkShowCase
            link="/"
            imgSrc={PortfolioImg}
            projectname="Personal Portfolio"
            subname="I used ReactJS and Firebase to create this responsive personal site to showcase my skills and projects and meet awesome people"
            linkname="Visit"
            imgAlt="Jeet Viramgama"
          />
        </ProjectContainer>
      </WorkWrapper>
      <BackText backname="Work" />
    </WorkContainer>
  );
};

export default Work;
