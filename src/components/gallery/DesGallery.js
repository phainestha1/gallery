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
  width: 70vw;
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
  flex-direction: row;
  width: 80%;
  height: 75%;
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
`;
const DesTop = styled.div`
  font-size: 30px;
  font-weight: 300;
`;
const DesBottom = styled.div`
  font-size: 20px;
  font-weight: 300;
  margin-top: 60px;
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
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 100%;
`;
const Image = styled.img`
  width: 150px;
  height: 187.5px;
  margin: 10px 15px;
  transition: 0.3s;
  :hover {
    opacity: 0.5;
  }
`;
const DesImage = styled(Image)`
  width: 350px;
  height: 437.5px;
  margin: 10px 15px;
`;

export default DesGallery;
