import React from "react";
import styled from "styled-components";
import { CardComponent, ButtonStyles } from "../../style/Style.styled";
import { useNavigate, useParams } from "react-router-dom";

const CustomCardComponent = styled(CardComponent)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  max-width: 1312px;
  padding-left: 65px;
  height: 339px;
  margin: 0 50px 0 50px;
  gap: 50px;

  & .textarea {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 8px;

    width: 390px;
    height: 116px;
  }

  & .textarea h3 {
    width: 324px;
    height: 54px;

    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 800;
    font-size: 48px;
    line-height: 111.84%;
    text-align: center;
    letter-spacing: -0.055em;
    color: #ffffff;
  }

  & .textarea p {
    width: 390px;
    height: 54px;
    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;

    text-align: center;
    letter-spacing: -0.02em;

    color: #c3bfca;
  }
`;

const CustomButtonComponent = styled(ButtonStyles)`
  cursor: pointer;
  width: 124px;
  height: 20px;

  font-family: "SF Pro Text";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 125%;
  text-align: center;
  letter-spacing: -0.02em;

  color: #ffffff;
`;

function StartLearningHeader() {
  const navigate = useNavigate();
  const { id } = useParams();

  function onGoToCourseTittlePage() {
    navigate(`/${id}/explore`);
  }

  return (
    <CustomCardComponent>
      <div className="textarea">
        <h3>Start Learning</h3>
        <p>
          Explore out gallery of course, choose the one wish, then get started
        </p>
      </div>
      <CustomButtonComponent onClick={onGoToCourseTittlePage}>
        {" "}
        Explore Courses{" "}
      </CustomButtonComponent>
    </CustomCardComponent>
  );
}

export default StartLearningHeader;
