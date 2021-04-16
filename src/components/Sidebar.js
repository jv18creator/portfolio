import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as DiIcons from "react-icons/si";
import Submenu from "./Submenu";
import { animateScroll as scroll } from "react-scroll";
import Avatar from "../assets/avatar.svg";

const NavHead = styled.div`
  background: var(--darkBlue);
  color: #fff;
  /* height: 60px; */
  /* margin-top: -60px; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 5;
`;

const NavName = styled(Link)`
  font-size: 2rem;
  color: #fff;
  text-decoration: none;
  margin-right: 2rem;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 60px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #fff;
`;

const SidebarNav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  object-fit: cover;
  background: var(--darkBlue);
  color: #fff;
  width: 250px;
  height: 100vh;
  /* min-height: 100vh; */
  position: fixed;
  top: 0;
  left: ${({ leftSidebar }) => (leftSidebar ? "0" : "-100%")};
  transition: 300ms;
  z-index: 10;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const SidebarWrap = styled.div`
  width: 100%;
  /* display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%; */
`;

const SocialIconWrap = styled.div`
  margin-top: 40px;
  font-size: 1.7rem;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  /* &:hover {
    cursor: pointer;
  } */
`;

const AvatarWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  text-align: center;
  padding: 0 0;
  margin-bottom: 30px;
`;

const AvatarImg = styled.img`
  width: 35%;
  height: auto;
  object-fit: cover;
  background: no-repeat center;
  border-radius: 100%;
`;
const AvatarName = styled.h3`
  font-size: 24px;
  font-weight: 600;
`;
const AvatarTitle = styled.p`
  /* font-size: 16px; */
`;

const KeyboardEventWrap = styled.div`
  width: 100%;
  text-align: center;
  position: absolute;
  bottom: 10px;
  @media (max-width: 768px) {
    display: none;
    visibility: hidden;
  }
`;
const KeyboardEventP = styled.p`
  font-size: 14px;
`;
const KeyCode = styled.code`
  padding: 5px 6px;
  margin: 0 5px;
  border-radius: 4px;
  background-color: #252331;
`;
//logic behid the sidebar is:
// first I created a state called sidebar and set its value to false(0)
//then I have a variable(leftSidebar) in component(SidebarNav)
//passing the function (showSidebar) on the svg Icon and chaning it's current state to false(0) to true(1) and true(1) to false(0)
//when state changes the value of left(leftSidebar) property also changes

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  //For Media Queries
  useEffect(() => {
    function myFunction(x) {
      if (x.matches) {
        // If media query matches
        setSidebar(sidebar === true);
      } else {
        setSidebar(sidebar === false);
      }
    }

    const x = window.matchMedia("(max-width: 768px)");
    myFunction(x); // Call listener function at run time
  //  x.addListener(myFunction);  Attach listener function on state changes
  }, []);

  const showSidebar = (event) => {
    // event.stopPropagation();
    // event.preventDefault();
    setSidebar(!sidebar);
  };

  document.addEventListener("keydown", (event) => {
    event.stopPropagation();
    event.preventDefault();
    if (event.ctrlKey && event.key === "b") {
      setSidebar(!sidebar);
    }
  });

  //top to home
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <NavHead>
        <NavIcon to="#">
          <FaIcons.FaBars onClick={showSidebar} />
        </NavIcon>
        <NavName to="#" onClick={toggleHome}>
        </NavName>
      </NavHead>
      <SidebarNav leftSidebar={sidebar}>
        <SidebarWrap>
          <NavIcon to="#">
            <AiIcons.AiOutlineClose
              style={{ padding: 0, display: "inline" }}
              onClick={showSidebar}
            />
          </NavIcon>
          <AvatarWrapper>
            <AvatarImg src={Avatar}></AvatarImg>
            <AvatarName>Jeet Viramgama</AvatarName>
            <AvatarTitle>Front-end Developer</AvatarTitle>
          </AvatarWrapper>
          {SidebarData.map((item, index) => {
            return (
              <Submenu item={item} key={index} showSidebar={showSidebar} />
            );
          })}
          {/* return <Submenu item={item} />  why works the same?*/}
          <SocialIconWrap>
            <AiIcons.AiFillGithub />
            <AiIcons.AiOutlineTwitter />
            <AiIcons.AiFillLinkedin />
            <DiIcons.SiStackoverflow />
          </SocialIconWrap>
          <KeyboardEventWrap>
            <KeyboardEventP>
              Hit
              <KeyCode>Ctrl + b</KeyCode>
              to toggle
            </KeyboardEventP>
          </KeyboardEventWrap>
        </SidebarWrap>
      </SidebarNav>
    </>
  );
};

export default Sidebar;
