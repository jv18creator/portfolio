import React from "react";
import styled from "styled-components";
import * as AiIcons from "react-icons/ai";
import * as DiIcons from "react-icons/si";

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

const Github = styled.a`
  z-index: 10;
  color: #fff;
  :hover {
    color: var(--strongOrange);
  }
`;
const Twitter = styled.a`
  z-index: 10;
  color: #fff;
  :hover {
    color: var(--strongOrange);
  }
`;
const Linkedin = styled.a`
  z-index: 10;
  color: #fff;
  :hover {
    color: var(--strongOrange);
  }
`;
const Stackoverflow = styled.a`
  z-index: 10;
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
          <AiIcons.AiFillGithub />
        </Github>
        <Twitter href="https://twitter.com/JeetViramgama">
          <AiIcons.AiOutlineTwitter />
        </Twitter>
        <Linkedin href="https://www.linkedin.com/in/jeet-viramgama-7292761a6/">
          <AiIcons.AiFillLinkedin />
        </Linkedin>
        <Stackoverflow href="https://stackoverflow.com/users/13718296/jeet-viramgama?tab=profile">
          <DiIcons.SiStackoverflow />
        </Stackoverflow>
      </SocialIconWrap>
    </>
  );
};

export default SocialMedia;
