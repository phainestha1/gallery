import React from "react";
import styled from "styled-components";
import TopNavigation from "../components/TopNavigation";
import ultimaCena from "../assets/ultimaCena.jpg";
import autumnFamily from "../assets/autumnFamily.jpg";
import sunsetTwoChairs from "../assets/sunsetTwoChairs.jpg";
import soloRiding from "../assets/soloRiding.jpg";
import boating from "../assets/boating.jpg";
import backGreen from "../assets/backGreen.jpg";
import mayRooftop from "../assets/mayRooftop.jpg";
import cherryBlossom from "../assets/cherryBlossom.jpg";
import { AiOutlineInstagram, AiOutlineGithub } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "../styles/styles.css";
import SwiperCore, {
  EffectFade,
  Autoplay,
  Pagination,
  Navigation,
} from "swiper";

SwiperCore.use([Autoplay, EffectFade, Pagination, Navigation]);

function Home() {
  return (
    <Container>
      <Top>
        <TopNavigation />
      </Top>
      <Bottom>
        <SlideBox>
          <Intro>
            <IntroLeftTop>
              <h1>Daydream</h1>
              <h2>The thing I record a moment with</h2>
              <h3>
                daydream [ˈdāˌdrēm]: A series of pleasant thoughts that distract
                one's attention from the present.
              </h3>
            </IntroLeftTop>
            <IntroLeftBottom>
              <a className="link" href="https://www.instagram.com/phainestha1/">
                <AiOutlineInstagram />
              </a>
              <a className="link" href="https://github.com/phainestha1">
                <AiOutlineGithub />
              </a>
            </IntroLeftBottom>
          </Intro>
          <Slide>
            <Swiper
              spaceBetween={30}
              effect={"fade"}
              speed={1500}
              centeredSlides={false}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              navigation={false}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src={ultimaCena} alt="ultimaCena" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={soloRiding} alt="soloRiding" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={autumnFamily} alt="autumnFamily" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={sunsetTwoChairs} alt="sunsetTwoChairs" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={boating} alt="boating" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={backGreen} alt="backGreen" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={mayRooftop} alt="mayRooftop" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={cherryBlossom} alt="cherryBlossom" />
              </SwiperSlide>
            </Swiper>
          </Slide>
        </SlideBox>
      </Bottom>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
const Top = styled.div``;
const Bottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
const SlideBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 50vw;
  /* background-color: teal; */
`;
const Intro = styled.div`
  display: flex;
  width: 40%;
  flex-direction: column;
  justify-content: center;
  text-align: right;
  h1 {
    font-size: 35px;
    font-weight: 500;
  }
`;
const Slide = styled.div`
  display: flex;
  width: 50%;
`;
const IntroLeftTop = styled.div`
  margin-bottom: 40px;
  h1,
  h2 {
    font-weight: 300;
    margin-bottom: 5px;
    padding-right: 15px;
  }
  h3 {
    font-size: 14px;
    font-weight: 300;
    padding-right: 15px;
    margin-top: 25px;
  }
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

export default Home;
