import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineMenuUnfold } from "react-icons/ai";

const Desktop = () => {
  const [tabChange, setTabChange] = useState(false);

  const tabChangeHandler = () => {
    setTabChange(!tabChange);
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
    </>
  );
};

export default Desktop;

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
  @media (max-width: 768px) {
    display: none;
  }
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
