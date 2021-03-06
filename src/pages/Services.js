import React, { useEffect, lazy } from "react";
import styled from "styled-components";
import Mobile from "../assets/mobile.svg";
import ReactGA from "react-ga";
import Desktop from "../assets/desktop.svg";
import WebAudits from "../assets/web-audits.svg";
import Designer from "../assets/web-design.svg";
import {
  SiFirebase,
  SiSass,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiBootstrap,
  SiMaterialUi,
  SiVisualstudiocode,
  SiGithub,
} from "react-icons/si";
import { firebaseAnalytics } from "../Helpers/firebaseConfig";

const ServiceShowCase = lazy(() => import("./ServiceShowCase"));
const BackText = lazy(() => import("../Helpers/BackText"));

const ServiceContainer = styled.div`
  margin: 60px auto;
  max-width: 1440px;
  background-color: var(--bodyCol);
  padding: 10px 3rem;
  position: relative;
  @media (max-width: 768px) {
    padding: 10px 2rem;
  }
  @media (max-width: 580px) {
    padding: 10px 1.2rem;
  }
`;

const AllServices = styled.div`
  margin-top: 50px;
  text-align: center;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-auto-rows: minmax(240px, 1fr);
  grid-gap: 4rem;
`;

const ServiceHead = styled.h1`
  z-index: 3;
  font-weight: 500;
  @media (max-width: 580px) {
    font-size: 26px;
  }
`;

const TechIconsCol1 = styled.div`
  width: 50%;
  height: auto;
  position: absolute;
  top: 0%;
  color: rgba(0, 0, 0, 0.2);
  font-size: 5rem;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  z-index: 0;
  @media (max-width: 580px) {
    flex-direction: column;
  }
`;

const TechIconsCol2 = styled.div`
  width: 50%;
  height: auto;
  position: absolute;
  bottom: 0%;
  right: 0;
  color: rgba(0, 0, 0, 0.2);
  font-size: 5rem;
  text-align: center;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin: 0 40px;
  @media (max-width: 580px) {
    flex-direction: column;
    margin: 0 40px;
  }
  /* flex-basis: auto; */
`;

const Services = () => {
  useEffect(() => {
    firebaseAnalytics.logEvent("servicepage_visited");
    ReactGA.initialize("G-NHW4EP16PN");
    ReactGA.pageview(window.location.pathname + window.location.search);
    console.log(window.location.pathname);
  }, []);
  return (
    <ServiceContainer>
      <ServiceHead>What I do</ServiceHead>
      <AllServices>
        <ServiceShowCase
          srcImg={Mobile}
          altImg="Mobile Website"
          heading="MOBILE-FRIENDLY"
          sub="A responsive design makes your website accessible to all users, regaurdless of their device."
        />
        <ServiceShowCase
          srcImg={Desktop}
          altImg="Coding"
          heading="FRONT-END DEVELOPMENT"
          sub="I like to code things from scratch, and enjoy bringing ideas to life in the browser."
        />
        <ServiceShowCase
          srcImg={WebAudits}
          altImg="Scanning Website"
          heading="WEBSITE AUDITS"
          sub="I will Improving your page???s performance, SEO and user experience."
        />
        <ServiceShowCase
          srcImg={Designer}
          altImg="Design"
          heading="DESIGNER"
          sub="I value simple content structure, clean design patterns, and thoughtful interactions."
        />
      </AllServices>
      <TechIconsCol1>
        <SiHtml5 />
        <SiCss3 />
        <SiFirebase />
        <SiSass />
        <SiJavascript />
      </TechIconsCol1>
      <TechIconsCol2>
        <SiReact />
        <SiBootstrap />
        <SiMaterialUi />
        <SiVisualstudiocode />
        <SiGithub />
      </TechIconsCol2>
      <BackText backname="Services" />
    </ServiceContainer>
  );
};

export default Services;
