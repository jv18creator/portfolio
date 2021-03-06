import React from "react";
import styled from "styled-components";

const Outer = styled.div`
  border: 6px solid #ffffff;
  border-radius: 8px;
  width: 100%;
  padding: 20px 10px;
  object-fit: cover;
  transition: 0.3s ease;
  position: relative;
  &:hover {
    border-color: var(--strongOrange);
    box-shadow: 0 3px 10px 0px var(--lightBackCol);
  }
`;
const MainContent = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
`;

const ServiceImg = styled.img`
  text-align: center;
  max-width: 50%;
  height: 100%auto;
  object-fit: cover;
`;
const ServiceHead = styled.h4`
  margin: 10px 0;
`;
const SubPara = styled.p`
  @media (max-width: 580px) {
    font-size: 14px;
  }
`;

const ServiceShowCase = (props) => {
  return (
    <Outer>
      <MainContent>
        <ServiceImg alt={props.altImg} src={props.srcImg}></ServiceImg>
        <ServiceHead>{props.heading}</ServiceHead>
        <SubPara>{props.sub}</SubPara>
      </MainContent>
    </Outer>
  );
};

export default ServiceShowCase;
