import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Img from "../assets/error.svg";

const ErrorContainer = styled.div`
  color: #fff;
  margin-top: 80px;
`;

const ErrorWrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  text-align: center;
`;

const ErrorH1 = styled.h1`
  font-size: 68px;
  margin: 60px 0 40px 0;

  @media( max-width: 992px) {
    font-size: 48px;
  }
  @media (max-width: 576px) {
      font-size: 36px;
  }
`;
const ErrorP = styled.p`
  font-size: 18px;
  @media (max-width: 576px) {
      font-size: 14px;
  }
`;

const ErrorImgWrapper = styled.div`
  width: 400px;
  height: auto;
  max-width: 500px;
  margin: 0 auto;
  @media (max-width: 576px) {
      width: 250px;
  }
`;

const ErrorImg = styled.img`
  width: 70%;
`;

const GoBackLink = styled(Link)`
  color: #fff;
  transition: 300ms;
  font-size: 22px;
  &:hover {
    color: #5c22e1;
  }
  @media (max-width: 576px) {
      font-size: 18px;
  }
`;

const PageNotFound = () => {
  return (
    <>
      <ErrorContainer>
        <ErrorWrapper>
          <ErrorImgWrapper>
            <ErrorImg src={Img} alt="error" />
          </ErrorImgWrapper>
          <ErrorH1>404 Page Error</ErrorH1>
          <ErrorP>Sorry, This Page does not Exist</ErrorP>
          <GoBackLink to="/">Go back to Home</GoBackLink>
        </ErrorWrapper>
      </ErrorContainer>
    </>
  );
};

export default PageNotFound;
