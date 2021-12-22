import React from "react";
import styled from "styled-components";
import TopNavigation from "../components/TopNavigation";
import { useMediaQuery } from "react-responsive";

function Test() {
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1224px)" });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });

  return (
    <Container>
      <Top>
        <TopNavigation />
      </Top>
      <Bottom>
        <h1>Device Test!</h1>
        {isDesktopOrLaptop && <p>You are a desktop or laptop</p>}
        {isBigScreen && <p>You have a huge screen</p>}
        {isTabletOrMobile && <p>You are a tablet or mobile phone</p>}
        <p>Your are in {isPortrait ? "portrait" : "landscape"} orientation</p>
        {isRetina && <p>You are retina</p>}
      </Bottom>
    </Container>
  );
}

const Container = styled.div``;
const Top = styled.div``;
const Bottom = styled.div``;

export default Test;
