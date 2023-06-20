import React from "react";
import styled from "styled-components";
import paymentUser from "../../image/paidImg.png";

const ValidEmailContainer = styled.div`
  width: 90%;
  height: 84px;
  background: rgba(173, 125, 249, 0.1);
  border-radius: 10px;

  margin-left: 20px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 20px;
`;

const ContainerLeft = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  width: 231px;
  height: 47px;
`;

const UserImage = styled.img`
  width: 47px;
  height: 47px;
  border-radius: 50%;
`;

const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 5px;
  width: 176px;
  height: 45px;

  & h4 {
    width: 92px;
    height: 23px;

    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 145.34%;
    letter-spacing: -0.03em;
    color: #ffffff;
  }

  & h6 {
    width: 176px;
    height: 20px;

    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 145.34%;
    letter-spacing: -0.03em;

    color: #c3bfca;
  }
`;

const EditBtn = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  gap: 10px;
  width: 58px;
  height: 36px;
  cursor: pointer;
  background: #ffffff;
  border-radius: 8px;

  & h4 {
    width: 26px;
    height: 20px;

    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 145.34%;
    /* or 20px */

    letter-spacing: -0.03em;

    color: #de3561;
  }
`;

const UserMessage = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 17px 16px;
  gap: 10px;

  width: 90%;
  height: 76px;
  margin-left: 10px;
  background: rgba(173, 125, 249, 0.1);
  border-radius: 10px;

  & p {
    width: 425px;
    height: 42px;

    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;

    letter-spacing: -0.02em;
    color: #e5e3e8;
  }
`;

function ValidEmailDisplay() {
  return (
    <>
      <ValidEmailContainer>
        <ContainerLeft>
          <UserImage src={paymentUser} alt="image" />
          <UserDetails>
            <h4>Elan Kospen</h4>
            <h6>elankospen001@gmail.com</h6>
          </UserDetails>
        </ContainerLeft>
        <EditBtn>
          <h4>Edit</h4>
        </EditBtn>
      </ValidEmailContainer>
      <UserMessage>
        <p>
          Thanks for being a good friend, I hope this course helps you further
          your career
        </p>
      </UserMessage>
    </>
  );
}

export default ValidEmailDisplay;
