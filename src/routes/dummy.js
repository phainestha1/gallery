import React from "react";
import styled from "styled-components";
import Navigation from "../components/Navigation";
import { Link } from "react-router-dom";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import redLight from "../assets/redLight.jpeg";
import ultimaCena from "../assets/ultimaCena.jpg";
import autumnFamily from "../assets/autumnFamily.jpg";
import sunsetTwoChairs from "../assets/sunsetTwoChairs.jpg";
import soloRiding from "../assets/soloRiding.jpg";
import boating from "../assets/boating.jpg";
import backGreen from "../assets/backGreen.jpg";
import mayRooftop from "../assets/mayRooftop.jpg";
import cherryBlossom from "../assets/cherryBlossom.jpg";
import { AiOutlineInstagram, AiOutlineGithub } from "react-icons/ai";

const fadeImages = [
  ultimaCena,
  autumnFamily,
  sunsetTwoChairs,
  soloRiding,
  boating,
  backGreen,
  mayRooftop,
  cherryBlossom,
];

function Home() {
  return (
    <Container>
      <Top>
        <Navigation />
      </Top>
      <Bottom>
        <Intro>
          <IntroLeft>
            <IntroLeftTop>
              <Link to="/gallery">
                <Btn>
                  <h1>See More ⇢</h1>
                </Btn>
              </Link>
              <h1>Concept Daydreaming</h1>
            </IntroLeftTop>
            <IntroLeftBottom>
              <Link
                className="link"
                to="https://www.instagram.com/phainestha1/"
              >
                <AiOutlineInstagram />
              </Link>
              <Link className="link" to="https://github.com/phainestha1">
                <AiOutlineGithub />
              </Link>
            </IntroLeftBottom>
          </IntroLeft>
          <IntroRight>
            <Image src={redLight} alt="red-light" />
          </IntroRight>
        </Intro>
        <Body>
          <BodyTop>
            <h1>My Own View with Daydreaming</h1>
          </BodyTop>
          <BodyBottom>
            <div className="BodyBottom">
              <Fade arrows={null} duration="2000" transitionDuration="1000">
                <div>
                  <img src={fadeImages[0]} alt="ultimaCena" />
                </div>
                <div>
                  <img src={fadeImages[1]} alt="autumnFamily" />
                </div>
                <div>
                  <img src={fadeImages[2]} alt="sunsetTwoChairs" />
                </div>
                <div>
                  <img src={fadeImages[3]} alt="soloRiding" />
                </div>
                <div>
                  <img src={fadeImages[4]} alt="boating" />
                </div>
                <div>
                  <img src={fadeImages[5]} alt="backGreen" />
                </div>
                <div>
                  <img src={fadeImages[6]} alt="mayRoofTop" />
                </div>
                <div>
                  <img src={fadeImages[7]} alt="cherryBlossom" />
                </div>
              </Fade>
            </div>
          </BodyBottom>
        </Body>
      </Bottom>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Top = styled.div``;

const Bottom = styled.div`
  height: 100%;
`;
const IntroLeft = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: right;
  h1 {
    font-size: 35px;
    font-weight: 500;
    padding-right: 15px;
  }
`;
const IntroLeftTop = styled.div`
  margin-bottom: 40px;
`;
const IntroLeftBottom = styled.div`
  font-size: 32px;
  padding-right: 10px;
  .link {
    padding: 5px;
    color: aliceblue;
    transition: 0.2s;
    :hover {
      opacity: 0.5;
    }
  }
`;

const IntroRight = styled.div`
  flex: 1;
`;

const Intro = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 500px;
`;
const Image = styled.img`
  width: auto;
  height: 500px;
`;
const Btn = styled.button`
  color: aliceblue;
  background-color: transparent;
  border: none;
  margin-top: 10px;
  transition: 0.2s;
  cursor: pointer;
  h1 {
    font-size: 20px;
  }
  :hover {
    opacity: 0.5;
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
`;
const BodyTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 25px;
    font-weight: 300;
  }
`;
const BodyBottom = styled.div`
  margin-top: 20px;
  text-align: center;
  img {
    width: 350px;
    height: 437.5px;
  }
`;

export default Home;
