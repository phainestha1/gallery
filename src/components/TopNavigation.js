import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const TopNavigation = () => {
  return (
    <Container>
      <Left>
        <Link to="/">
          <Btn>Hyeon Sang</Btn>
        </Link>
      </Left>
      <Right>
        <Link to="/gallery">
          <Btn>gallery</Btn>
        </Link>
      </Right>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 50px;
  padding: 0 15px;
  background-color: #181818;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Right = styled.div`
  flex: 1;
  text-align: right;
`;
const Btn = styled.button`
  font-size: 15px;
  background-color: transparent;
  border: none;
  color: aliceblue;
  transition: 0.2s;
  cursor: pointer;
  :hover {
    opacity: 0.5;
  }
`;

export default TopNavigation;
