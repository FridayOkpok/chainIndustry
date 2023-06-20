import React from "react";
import styled from "styled-components";
import { CardComponent } from "../../style/Style.styled";
import MyCourses from "../courses/MyCourses";

function CountinueLerning() {
  return (
    <CustomCardComponent>
      <TextAreaStyle>
        <h3>Continue Learning</h3>
        <h6>You started the courses already, you continue with them</h6>
      </TextAreaStyle>
      <MyCourses />
    </CustomCardComponent>
  );
}

export default CountinueLerning;

const CustomCardComponent = styled(CardComponent)`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 90%;
  height: 437px;
  margin: 0 auto;
  gap: 50px;
`;

const TextAreaStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  justify-content: center;
  align-items: flex-start;

  & h3 {
    width: 100%;

    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 800;
    font-size: 48px;
    line-height: 111.84%;

    letter-spacing: -0.055em;
    color: #ffffff;
  }

  & h6 {
    width: 100%;
    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    letter-spacing: -0.02em;

    color: #c3bfca;
  }
  @media screen and (min-width: 501px) {
    & h3 {
      font-size: 40px;
    }
  }
`;
