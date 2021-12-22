import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import Desktop from "../components/home/Desktop";
import Mobile from "../components/home/Mobile";

function Home() {
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1224px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <Container>
      {isDesktopOrLaptop && <Desktop />}
      {isTabletOrMobile && <Mobile />}
    </Container>
  );
}

const Container = styled.div``;

export default Home;
