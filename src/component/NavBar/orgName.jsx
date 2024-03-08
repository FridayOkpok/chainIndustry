import React from "react";
import logo from "../../image/logoImg.png";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export const LogoAreaContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 39.33px;

  gap: 10px;

  & img {
    height: 39.33095169067383px;
    width: 50.71196365356445px;
    border-radius: 0px;
  }

  & div {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 4px;
  }

  & div h6 {
    color: rgba(255, 255, 255, 1);
  }
`;

function LogoAndName() {
  const navigate = useNavigate();

  function onGoToHomeHandelerFn() {
    navigate("/");
  }

  return (
    <LogoAreaContainer onClick={onGoToHomeHandelerFn}>
      {/* <img src={logo} alt="Logo" /> */}
      <div>
        <h4>Chanindustry</h4>
      </div>
    </LogoAreaContainer>
  );
}

export default LogoAndName;
