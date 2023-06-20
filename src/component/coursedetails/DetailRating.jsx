import React from "react";
import { BsStarFill } from "react-icons/bs";
import styled from "styled-components";
import EachReviewComment from "./EachUserRating";

const RatingContainerStyled = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 18px;
  margin: 0 10px;
`;

const ContainerTop = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;

  & .icon {
    width: 32px;
    height: 32px;
    color: #ffb802;
  }
`;

const RatingText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 20px;

  & h3 {
    width: 163px;
    height: 35px;
    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 145.34%;

    letter-spacing: -0.03em;
    color: #ffffff;
  }

  & h5 {
    width: 93px;
    height: 23px;
    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 145.34%;

    letter-spacing: -0.03em;
    color: #c3bfca;
  }
`;

function RatingContainer() {
  return (
    <RatingContainerStyled>
      <ContainerTop>
        <BsStarFill className="icon" />
        <RatingText>
          <h3>4.95 / 5 Rating</h3>
          <h5>120 Reviews</h5>
        </RatingText>
      </ContainerTop>
      <EachReviewComment />
    </RatingContainerStyled>
  );
}

export default RatingContainer;
