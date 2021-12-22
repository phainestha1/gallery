import React from "react";
import styled from "styled-components";
import TopNavigation from "../../components/TopNavigation";
import ultimaCena from "../../assets/ultimaCena.jpg";
import autumnFamily from "../../assets/autumnFamily.jpg";
import sunsetTwoChairs from "../../assets/sunsetTwoChairs.jpg";
import soloRiding from "../../assets/soloRiding.jpg";
import boating from "../../assets/boating.jpg";
import backGreen from "../../assets/backGreen.jpg";
import mayRooftop from "../../assets/mayRooftop.jpg";
import cherryBlossom from "../../assets/cherryBlossom.jpg";
import { AiOutlineInstagram, AiOutlineGithub } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "../../styles/home/mobile.css";
import SwiperCore, {
  EffectFade,
  Autoplay,
  Pagination,
  Navigation,
} from "swiper";

SwiperCore.use([Autoplay, EffectFade, Pagination, Navigation]);

const Mobile = () => {
  return (
    <Container>
      <Top>
        <TopNavigation />
      </Top>
      <Bottom>
        <SlideBox>
          <Intro>
            <Title>
              <h1>Daydream</h1>
              <h2>The thing I record a moment with</h2>
            </Title>
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
                pauseOnMouseEnter: false,
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
          <ProfileLink>
            <a className="link" href="https://www.instagram.com/phainestha1/">
              <AiOutlineInstagram />
            </a>
            <a className="link" href="https://github.com/phainestha1">
              <AiOutlineGithub />
            </a>
          </ProfileLink>
        </SlideBox>
      </Bottom>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
const Top = styled.div``;
const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
const SlideBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
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
  width: 100%;
`;
const Title = styled.div`
  margin-bottom: 20px;
  text-align: center;
  h1,
  h2 {
    font-weight: 300;
    margin: 10px 0px;
  }
  h3 {
    font-size: 14px;
    font-weight: 300;
    margin-top: 25px;
  }
`;
const ProfileLink = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 35px;
  margin-top: 25px;
  .link {
    padding: 5px 20px;
    color: aliceblue;
    transition: 0.2s;
    :hover {
      opacity: 0.5;
    }
  }
`;

export default Mobile;
