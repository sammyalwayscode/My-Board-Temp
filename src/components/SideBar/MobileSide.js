import React, { useContext, useState } from "react";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import styled from "styled-components";
import { GlobalState } from "../../ContexGlobal/Global";

const MobileSide = () => {
  const { mobDisplay } = useContext(GlobalState);
  return (
    <div>
      {mobDisplay ? (
        <MobileContainer>
          <MobileWrapper>
            <MobBar>
              <AiOutlineMenuUnfold />
            </MobBar>
          </MobileWrapper>
        </MobileContainer>
      ) : null}
    </div>
  );
};

export default MobileSide;

const MobileContainer = styled.div`
  display: none;
  @media (max-width: 500px) {
    display: block;
    margin-top: 50px;
    min-height: calc(100vh - 50px);
    background-color: darkorange;
    width: 200px;
    position: absolute;
  }
`;
const MobileWrapper = styled.div``;
const MobBar = styled.div``;
