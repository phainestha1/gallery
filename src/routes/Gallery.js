import React from "react";
import styled from "styled-components";
import TopNavigation from "../components/TopNavigation";

const Gallery = () => {
  return (
    <Container>
      <Top>
        <TopNavigation />
      </Top>
      <Bottom>Gallery Here</Bottom>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;
const Top = styled.div``;
const Bottom = styled.div`
  height: 100%;
`;

export default Gallery;
