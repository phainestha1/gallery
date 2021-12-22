import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import DesGallery from "../components/gallery/DesGallery";
import MobGallery from "../components/gallery/MobGallery";

const Gallery = () => {
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1224px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <Container>
      {isDesktopOrLaptop && <DesGallery />}
      {isTabletOrMobile && <MobGallery />}
    </Container>
  );
};

const Container = styled.div``;

export default Gallery;
