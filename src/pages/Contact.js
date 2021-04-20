import React, { useState } from "react";
import styled from "styled-components";
import { GoLocation } from "react-icons/go";
import { BiPhone } from "react-icons/bi";
import { AiOutlineMail, AiOutlineSend } from "react-icons/ai";
import firebase from "firebase";
import db from "../Helpers/firebase";
import SocialMedia from "../Helpers/SocialMedia";
import ReactGa from "react-ga";
import BackText from "../Helpers/BackText";

const ContactContainer = styled.div`
  margin: 60px auto 0 auto;
  max-width: 1440px;
  background-color: var(--bodyCol);
  padding: 10px 3rem;
  @media (max-width: 768px) {
    padding: 10px 2rem;
  }
  @media (max-width: 580px) {
    padding: 10px 1.2rem;
  }
`;

const ContactHead = styled.h1`
  @media (max-width: 580px) {
    font-size: 26px;
  }
`;
const ContactSub = styled.p`
  font-size: 20px;
  margin: 15px 0 20px 0;
  @media (max-width: 580px) {
    font-size: 14px;
  }
`;
const FormContainer = styled.form`
  background-color: #fff;
  border-radius: 8px;
  margin: 0 auto;
  padding: 1.6rem 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  @media (max-width: 580px) {
    padding: 2rem 1rem;
    border-radius: 4px;
  }
  .lblName {
    margin-top: -10px;
    margin-bottom: 14px;
    color: var(--bodyCol);
    font-weight: 600;
  }
  .lblEmail {
    margin: 14px 0;
    font-weight: 600;
    color: var(--bodyCol);
  }
  .lblMessage {
    margin: 14px 0;
    font-weight: 600;
    color: var(--bodyCol);
  }
  #name,
  #email,
  #message {
    padding: 10px;
    width: 250px;
    border: 2px solid var(--lightBackCol);
    border-radius: 8px;
    :focus {
      border: 2px solid var(--strongOrange);
      outline: none;
    }
    ::placeholder {
      color: var(--bodyCol);
    }
    @media (max-width: 580px) {
      width: 100%;
    }
  }
  #message {
    height: 125px;
    resize: none;
  }
  .btnSubmit {
    margin: 20px 0 0 0;
    padding: 10px 25px;
    display: flex;
    align-items: center;
    font-size: 18px;
    background: var(--strongOrange);
    border: none;
    border-radius: 8px;
    color: #fff;
  }
  .sendIcon {
    margin-left: 12px;
  }
`;
//other contact options
const OtherContactOption = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 15px 0;
  max-width: 768px;
  margin: 0 auto;
  flex-wrap: wrap;
`;
const Location = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 40px;
  max-width: 200px;
  text-align: center;
  color: #fff;
  text-decoration: none;
  border-radius: 8px;
  &:hover {
    background: var(--strongOrange);
    transition: 0.3s ease;
  }
  &:hover .shrinkGrow {
    animation: shrinkGrow 0.3s ease;
  }
  @keyframes shrinkGrow {
    0% {
      transform: scale(0.8);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
`;
const Phone = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 40px;
  color: #fff;
  text-decoration: none;
  margin: 30px 0;
  border-radius: 8px;
  z-index: 3;
  max-width: 200px;
  :hover {
    background: var(--strongOrange);
    transition: 0.3s ease;
  }
  &:hover .rotatePhone {
    transform: rotate(20deg);
    transition: 0.3s ease;
  }
`;
const Message = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 40px;
  color: #fff;
  text-decoration: none;
  border-radius: 8px;
  z-index: 3;
  max-width: 200px;
  &:hover {
    background: var(--strongOrange);
    transition: 0.3s ease;
  }
  &:hover .skewMessage {
    animation: skew 0.3s ease forwards;
  }
  @keyframes skew {
    0% {
      transform: skew(0);
    }
    100% {
      transform: skewY(15deg);
    }
  }
`;

const Para = styled.p``;

//grid

const ContactCol1 = styled.div``;
const ContactCol2 = styled.div``;
const GridContact = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  }
  @media (max-width: 580px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
`;

const Contact = () => {
  //firebase and other functions

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const SendFormDetails = (event) => {
    event.preventDefault();
    db.collection("users").add({
      userName: name,
      userEmail: email,
      usersMessage: message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setName("");
    setEmail("");
    setMessage("");
    ReactGa.event({
      category: 'User',
      action: 'Sent message'
    });
  };

  return (
    <ContactContainer>
      <ContactHead>Let's Work Together</ContactHead>
      <ContactSub>
        Have a project you'd like to discuss? Fill the form & I'll contact you
        in 24 hours.
      </ContactSub>
      <GridContact>
        <ContactCol1>
          <FormContainer action="#">
            <label htmlFor="name" className="lblName">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Jeet Viramgama"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <label htmlFor="email" className="lblEmail">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="jviramgama5@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="message" className="lblMessage">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Hi there..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button
              type="submit"
              className="btnSubmit"
              onClick={SendFormDetails}
            >
              Send <AiOutlineSend className="sendIcon" />
            </button>
          </FormContainer>
        </ContactCol1>
        <ContactCol2>
          <OtherContactOption>
            <Location
              href="https://goo.gl/maps/bcZNEoARAbj9WMnP7"
              target="_blank"
            >
              <GoLocation
                className="shrinkGrow"
                style={{ fontSize: "2rem", marginBottom: "10px" }}
              />
              <Para>Mota Mava, Rajkot, Gujarat 360005</Para>
            </Location>
            <Phone href="tel:+919925171212" target="_blank">
              <BiPhone
                className="rotatePhone"
                style={{ fontSize: "2rem", marginBottom: "10px" }}
              />
              <Para>+91 9925171212</Para>
            </Phone>
            <Message href="sms:+919925171212" target="_blank">
              <AiOutlineMail
                className="skewMessage"
                style={{ fontSize: "2rem", marginBottom: "10px" }}
              />
              <Para>jviramgama5@gmail.com</Para>
            </Message>
            <SocialMedia />
          </OtherContactOption>
        </ContactCol2>
      </GridContact>
      <BackText backname="Contact" />
    </ContactContainer>
  );
};

export default Contact;
