import React from "react";
import styled from "styled-components";
import { IoMdHand } from "react-icons/io";
import { HiDownload } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";
import ReactGa from "react-ga";
import BackText from "../Helpers/BackText";

const OveriewContainer = styled.div`
  margin-top: -30px;
`;

const OverviewWrap = styled.div`
  max-width: 1440px;
  margin: 60px auto 0 auto;
  padding: 80px 50px 40px 50px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-gap: 4rem;
  @media (max-width: 768px) {
    padding: 100px 50px 60px 50px;
  }
  @media (max-width: 580px) {
    padding: 80px 1rem;
  }
`;

const OverviewCol1 = styled.div``;

const OverviewH3 = styled.h3`
  font-size: 20px;
  display: inline-block;
  /* border-bottom: 4px solid var(--strongOrange); */
  margin-top: -10px;
  font-weight: 400;
  @media (max-width: 580px) {
    font-size: 18px;
  }
`;

const IAm = styled.h1`
  display: flex;
  align-items: center;
  font-weight: 600;
  margin-top: 20px;
  @media (max-width: 580px) {
    font-size: 24px;
  }
`;

const Name = styled.span`
  margin-left: 8px;
  /* letter-spacing: -4px; */
  animation: colChange 15s infinite alternate;
  animation-delay: 0;
  background: linear-gradient(92deg, #f35626, #feab3a);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation: hue 7s infinite linear;

  @keyframes hue {
    from {
      -webkit-filter: hue-rotate(0deg);
      background-size: 200% auto;
    }
    to {
      -webkit-filter: hue-rotate(-360deg);
      background-size: 200% center;
    }
  }
`;

const Mail = styled.a`
  text-decoration: none;
  color: white;
  font-size: 18px;
  margin-left: 5px;
  &:hover {
    color: var(--strongOrange);
    transition: 0.3s ease;
  }
`;

const SectionIntro = styled.div`
  font-size: 96px;
  font-weight: 400;
  font-family: "Oleo Script", cursive;
  line-height: 1.1;
  span {
    position: relative;
    ::before {
      content: "";
      position: absolute;
      bottom: 20%;
      right: 0%;
      height: 8px;
      width: 75%;
      border-radius: 20px;
      background-color: var(--strongOrange);
      @media (max-width: 400px) {
        width: 350%;
        bottom: 10%;
      }
    }
  }
  @media (max-width: 992px) {
    font-size: 88px;
  }
  @media (max-width: 768px) {
    font-size: 76px;
  }
  @media (max-width: 580px) {
    font-size: 56px;
  }
`;

const SectionSub = styled.p`
  margin: 20px 0 0 0;
  font-size: 18px;
  max-width: 650px;
  line-height: 1.6;
  @media (max-width: 580px) {
    font-size: 16px;
    margin: 15px 0 0 0;
  }
`;

const PortfolioLink = styled(NavLink)`
  padding: 7px 20px;
  font-size: 18px;
  background: linear-gradient(45deg, #546780, #425873);
  border: none;
  text-decoration: none;
  color: #fff;
  position: relative;
  border-radius: 2px;
  span {
    width: 100%;
    background-color: var(--strongOrange);
    height: 4px;
    position: absolute;
    bottom: 0;
    left: 0;
    transform-origin: bottom;
    transform: scaleY(0);
    transition: transform 300ms;
    border-radius: 0 0 2px 2px;
  }
  &:hover span {
    /* transform-origin: top; */
    transform: scaleY(1);
    transition: transform 300ms;
  }
`;

const DownloadCV = styled(Link)`
  margin: 7px 20px;
  font-size: 20px;
  padding: 7px 0;
  color: #fff;
  position: relative;
  text-decoration: none;
  span {
    width: 100%;
    background-color: var(--strongOrange);
    height: 4px;
    position: absolute;
    bottom: 0;
    left: 0;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform 300ms;
  }
  &:hover span {
    transform-origin: left;
    transform: scaleX(1);
    transition: transform 300ms;
  }
`;

const OverviewLinks = styled.div`
  margin-top: 50px;
`;
//All the functions goes here

const Overview = () => {
  return (
    <>
      <OveriewContainer>
        <OverviewWrap>
          <OverviewCol1>
            <OverviewH3>Overview</OverviewH3>
            <IAm>
              Hi there, I’m <Name>jeet</Name>
              <IoMdHand
                style={{
                  marginLeft: "8px",
                  color: "#F79924",
                  transform: `rotate(-15deg)`,
                }}
              />
            </IAm>
            <SectionIntro>
              I make <span> websites</span>
            </SectionIntro>
            <SectionSub>
              I’m an independent creative developer from Gujarat,India. I like
              making fun interactive things with code. Feel free to take a look
              at my latest projects here. Remotely available. UTC+05:30.
              <Mail href="mailto:jviramgama5@gmail.com">
                jviramgama5@gmail.com
              </Mail>
            </SectionSub>
            <OverviewLinks>
              <PortfolioLink to="/work">
                Portfolio<span></span>
              </PortfolioLink>
              <DownloadCV
                to="/Resume-jeet-Viramgama.pdf"
                download
                target="_blank"
                onClick={ReactGa.event({
                  category: "User",
                  action: "CV downloaded",
                })}
              >
                <span></span>
                <HiDownload style={{ fill: "white", verticalAlign: "sub" }} />
                Download CV
              </DownloadCV>
            </OverviewLinks>
          </OverviewCol1>
          {/*    <OverviewCol2>
             <HeroImg src={Hero} alt='image_illustrator'/> 
          </OverviewCol2>*/}
        </OverviewWrap>
        {/*    <About>About</About>  */}
        <BackText backname="About" />
      </OveriewContainer>
    </>
  );
};

export default Overview;
