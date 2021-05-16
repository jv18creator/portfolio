import React from "react";
import styled from "styled-components";
import { AiFillGithub, AiOutlineTwitter, AiFillLinkedin } from "react-icons/ai";
import {SiStackoverflow} from "react-icons/si";

const SocialIconWrap = styled.div`
  margin-top: 40px;
  font-size: 1.7rem;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  z-index: 4;
  /* &:hover {
    cursor: pointer;
  } */
`;

const Github = styled.a`
  color: #fff;
  :hover {
    color: var(--strongOrange);
  }
`;
const Twitter = styled.a`
  color: #fff;
  :hover {
    color: var(--strongOrange);
  }
`;
const Linkedin = styled.a`
  color: #fff;
  :hover {
    color: var(--strongOrange);
  }
`;
const Stackoverflow = styled.a`
  color: #fff;
  :hover {
    color: var(--strongOrange);
  }
`;

const SocialMedia = () => {
  return (
    <>
      <SocialIconWrap>
        <Github href="https://github.com/jv18creator/">
          <AiFillGithub />
        </Github>
        <Twitter href="https://twitter.com/JeetViramgama">
          <AiOutlineTwitter />
        </Twitter>
        <Linkedin href="https://www.linkedin.com/in/jeet-viramgama-7292761a6/">
          <AiFillLinkedin />
        </Linkedin>
        <Stackoverflow href="https://stackoverflow.com/users/13718296/jeet-viramgama?tab=profile">
          <SiStackoverflow />
        </Stackoverflow>
      </SocialIconWrap>
    </>
  );
};

export default SocialMedia;
