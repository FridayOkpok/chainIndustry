import React from "react";
import styled from "styled-components";
import holdingBook from "../../image/HoldingBook.png";
import { ButtonStyles, CardComponent } from "../../style/Style.styled";

function BeATutorSection() {
  return (
    <BeATutorWrapper>
      <TutorText>
        <h4>Are you a professional? Become a tutor.</h4>
        <p>
          As a tutor you stand to gain this this and that. A lot of things
          actually, whoever will fix the content will let you know, thanks!
        </p>
        <ButtonStyles>Become a tutor</ButtonStyles>
      </TutorText>
      <Image>
        <img src={holdingBook} alt="Be a tutor" />
      </Image>
    </BeATutorWrapper>
  );
}

export default BeATutorSection;
const BeATutorWrapper = styled(CardComponent)`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 90%;
  height: 485px;
  margin: 220px 50px 80px 50px;
  position: relative;

  @media screen and (max-width: 975px) {
    flex-direction: column-reverse;
    height: auto;
    padding-bottom: 40px;
    margin: 220px auto 80px auto;
  }
`;

const Image = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media screen and (max-width: 975px) {
    position: relative;
    top: -130px;
    right: 0;
    left: 0;
  }
`;

const TutorText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  margin: 0 0 0 50px;
  padding: 0px;
  gap: 32px;

  max-width: 514px;
  height: 313px;

  @media screen and (max-width: 975px) {
    gap: 12px;
    height: auto;
  }

  & h4 {
    width: 95%;
    height: 120px;

    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 800;
    font-size: 48px;
    line-height: 125.84%;

    letter-spacing: -0.06em;
    color: #ffffff;

    @media screen and (max-width: 975px) {
      height: auto;
    }
  }

  & p {
    width: 95%;
    height: 87px;

    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 145.5%;

    letter-spacing: -0.025em;

    color: #c3bfca;

    @media screen and (max-width: 975px) {
      height: auto;
    }
  }
`;
