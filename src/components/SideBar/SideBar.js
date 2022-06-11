import React from "react";
import styled from "styled-components";

const SideBar = () => {
  return (
    <Container>
      <Wrapper>SideBar</Wrapper>
    </Container>
  );
};

export default SideBar;

const Container = styled.div`
  margin-top: 50px;
  min-height: calc(100vh - 50px);
  background-color: darkred;
  width: 200px;
`;
const Wrapper = styled.div``;
