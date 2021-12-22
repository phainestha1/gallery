import React, { useState } from "react";
import styled from "styled-components";
import TopNavigation from "../../components/TopNavigation";
import { photos } from "../../components/Photo";

const DesGallery = () => {
  const [description, setDescription] = useState(false);
  const [url, setUrl] = useState("");

  const handleMouse = (event) => {
    setDescription(true);
    setUrl(event.target.src.slice(29));
  };
  const leaveMouse = () => {
    setDescription(false);
    setUrl("");
  };
  console.log(url);

  return (
    <Container>
      <Top>
        <TopNavigation />
      </Top>
      <Bottom>
        <Box>
          <BoxTop>
            {description && (
              <Description>
                <DesLeft>
                  {photos.map((photo) =>
                    photo.url === url ? (
                      <DesImage
                        src={photo.url}
                        alt={photo.url}
                        key={photo.url}
                      />
                    ) : null
                  )}
                </DesLeft>
                <DesRight>
                  {photos.map((photo) =>
                    photo.url === url ? (
                      <>
                        <DesTop>
                          <h1>{photo.title}</h1>
                        </DesTop>
                        <DesBottom>
                          <h1>{photo.description}</h1>
                        </DesBottom>
                      </>
                    ) : null
                  )}
                </DesRight>
              </Description>
            )}
          </BoxTop>
          <BoxBottom>
            <PhotoScroll>
              {photos.map((photo) => (
                <Image
                  onMouseEnter={handleMouse}
                  onMouseLeave={leaveMouse}
                  src={photo.url}
                  alt={photo.url}
                  key={photo.url}
                />
              ))}
            </PhotoScroll>
          </BoxBottom>
        </Box>
      </Bottom>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
const Box = styled.div`
  width: 100%;
  height: 80vh;
`;
const BoxTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70%;
`;
const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const DesLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
`;
const DesRight = styled(DesLeft)`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const DesTop = styled.div`
  font-size: 15px;
  font-weight: 300;
`;
const DesBottom = styled.div`
  font-size: 14px;
  font-weight: 300;
  margin-top: 10px;
`;

const BoxBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30%;
  overflow: auto;
`;
const PhotoScroll = styled.div`
  display: flex;
  width: 100%;
`;
const Image = styled.img`
  width: 100px;
  height: 137.5px;
  margin: 8px 10px;
  transition: 0.3s;
  :hover {
    opacity: 0.5;
  }
`;
const DesImage = styled(Image)`
  width: 230px;
  height: 317.5px;
`;

export default DesGallery;
