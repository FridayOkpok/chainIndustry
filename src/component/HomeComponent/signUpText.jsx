import React from "react";
import styled from "styled-components";
import { ButtonStyles } from "../../style/Style.styled";

const SignUpContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 160px auto 100px auto;

  padding: 0px;
  gap: 14px;

  width: auto;
  height: auto;

  & h3 {
    /* display: flex; */
    align-items: center;
    justify-content: center;

    width: 100%;
    /* height: 108px; */
    height: ${(props) => (props.height ? props.height : "108px")};

    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 800;
    font-size: 48px;
    line-height: 111.84%;

    text-align: center;
    letter-spacing: -0.055em;

    color: #ffffff;

    @media screen and (max-width: 975px) {
      height: auto;
    }

    & span {
      color: rgba(248, 129, 160, 1);
    }
  }

  & p {
    max-width: 585px;
    width: auto;
    height: 87px;

    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 145.5%;

    text-align: center;
    letter-spacing: -0.025em;

    color: #c3bfca;
  }
`;

const CustomButtonStyle = styled(ButtonStyles)`
  width: 214px;
  height: 60px;

  & span {
    width: 193px;
    height: 20px;

    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 125%;
    text-align: center;
    letter-spacing: -0.02em;

    color: #ffffff;
  }
`;

function SignUpText({ type }) {
  if (type === "community") {
    return (
      <SignUpContainerStyled height="60px">
        <h3>Join our Chaindusty community</h3>
        <p>
          Join our active community and enjoy your experience with other users
          participating in DoToEarn
        </p>
        <CustomButtonStyle>
          <span>Join our community</span>
        </CustomButtonStyle>
      </SignUpContainerStyled>
    );
  }

  return (
    <SignUpContainerStyled>
      <h3>
        Sign up for our <span> beginner courses </span>and pay nothing
      </h3>
      <p>
        Start your learning journey for free with all our beginner courses! From
        programming to design, our courses cover the essentials to get you
        started
      </p>
      <CustomButtonStyle>
        <span>Explore Beginner courses</span>
      </CustomButtonStyle>
    </SignUpContainerStyled>
  );
}

export default SignUpText;
