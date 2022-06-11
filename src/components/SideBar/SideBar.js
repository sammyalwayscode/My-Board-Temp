import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineMenuUnfold } from "react-icons/ai";

const SideBar = () => {
  const [tabChange, setTabChange] = useState(false);
  const [tabDiaplay, setTabDisplay] = useState(true);

  const tabChangeHandler = () => {
    setTabChange(!tabChange);
  };

  const tabDiaplayHandler = () => {
    setTabDisplay(!tabDiaplay);
  };

  return (
    <>
      {tabChange ? (
        <TabContainer>
          <TabWrapper>
            <TabBar onClick={tabChangeHandler}>
              <AiOutlineMenuUnfold />
            </TabBar>
          </TabWrapper>
        </TabContainer>
      ) : (
        <Container>
          <Wrapper>
            <Bar onClick={tabChangeHandler}>
              <AiOutlineMenuUnfold />
            </Bar>
          </Wrapper>
        </Container>
      )}

      {tabDiaplay ? (
        <TabDisplayContainer>
          <TabDisplayWrapper>
            <TabBar onClick={tabDiaplayHandler}>
              <AiOutlineMenuUnfold />
            </TabBar>
          </TabDisplayWrapper>
        </TabDisplayContainer>
      ) : (
        <ContainerDisplay>
          <WrapperDiaplay>
            <Bar onClick={tabDiaplayHandler}>
              <AiOutlineMenuUnfold />
            </Bar>
          </WrapperDiaplay>
        </ContainerDisplay>
      )}
    </>
  );
};

export default SideBar;

const Container = styled.div`
  margin-top: 50px;
  min-height: calc(100vh - 50px);
  background-color: darkred;
  width: 200px;
  @media (max-width: 768px) {
    display: none;
  }
`;
const Wrapper = styled.div``;

const TabContainer = styled.div`
  margin-top: 50px;
  min-height: calc(100vh - 50px);
  background-color: darkcyan;
  width: 50px;
`;
const TabWrapper = styled.div``;

const TabBar = styled.div`
  font-size: 25px;
  color: #fff;
  cursor: pointer;
`;

const Bar = styled.div`
  font-size: 25px;
  color: #fff;
  cursor: pointer;
`;

const TabDisplayContainer = styled.div`
  display: none;
  @media (max-width: 770px) {
    display: block;
    margin-top: 50px;
    min-height: calc(100vh - 50px);
    background-color: darkcyan;
    width: 50px;
  }
`;

const TabDisplayWrapper = styled.div``;
const ContainerDisplay = styled.div``;
const WrapperDiaplay = styled.div``;
