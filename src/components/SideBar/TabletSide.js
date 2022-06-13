import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineMenuUnfold } from "react-icons/ai";

const TabletSide = () => {
  const [tabDiaplay, setTabDisplay] = useState(true);

  const tabDiaplayHandler = () => {
    setTabDisplay(!tabDiaplay);
  };

  return (
    <div>
      {" "}
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
    </div>
  );
};

export default TabletSide;

const TabDisplayContainer = styled.div`
  display: none;
  @media (max-width: 770px) {
    display: block;
    margin-top: 50px;
    min-height: calc(100vh - 50px);
    background-color: hotpink;
    width: 50px;
  }

  @media (max-width: 500px) {
    display: none;
  }
`;

const TabDisplayWrapper = styled.div``;
const ContainerDisplay = styled.div`
  display: none;
  @media (max-width: 770px) {
    display: block;
    margin-top: 50px;
    min-height: calc(100vh - 50px);
    background-color: gold;
    width: 200px;
    position: absolute;
  }

  @media (max-width: 500px) {
    display: none;
  }
`;
const WrapperDiaplay = styled.div``;

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
