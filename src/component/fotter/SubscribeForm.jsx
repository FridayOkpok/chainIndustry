import React from "react";
import styled from "styled-components";
import { BsArrowRight } from "react-icons/bs";
import { CardComponent } from "../../style/Style.styled";

const CustomCardComponent = styled(CardComponent)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 284px;
  height: 202px;
`;

const SubcribeWrapper = styled.div`
  display: flex;
  width: auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;

  & h3 {
    width: 220px;
    height: 60px;

    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 125%;

    letter-spacing: -0.05em;

    color: #ffffff;
  }
`;

const EmailInput = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: auto;
  gap: 16px;

  & input {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;

    width: 176.5px;
    height: 40px;
    border: none;
    background-color: transparent;
    border-bottom: 1px solid #a2a2b9;
    outline: none;
    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: -0.02em;

    color: #a2a2b9;
  }

  & div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    background: #de3561;
    border-radius: 37px;
    color: white;

    cursor: pointer;
  }
`;

function SubscribeComponent() {
  return (
    <CustomCardComponent>
      <SubcribeWrapper>
        <h3>Subscribe now for Updates</h3>
        <EmailInput>
          <input placeholder="Email" type="email" />
          <div>
            <BsArrowRight className="icons" />
          </div>
        </EmailInput>
      </SubcribeWrapper>
    </CustomCardComponent>
  );
}

export default SubscribeComponent;
