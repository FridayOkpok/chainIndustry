import React from "react";
import styled from "styled-components";
import { BackDrop } from "../../style/Style.styled";
import cancel from "../../image/cancel.png";
import CartCourse from "./CartCourse";
import CartButtomContent from "./CartBottomText";
import { useDispatch } from "react-redux";
import { userInterfaceAction } from "../../store/userInterface";

function UserCart() {
  const dispatch = useDispatch();

  function onHideCartHandeler(event) {
    event.preventDefault();

    dispatch(userInterfaceAction.setHideCartHandeler());
  }

  return (
    <>
      <BackDrop onClick={onHideCartHandeler} />
      <UserCartContainer>
        <HeaderSection>
          <h5>Cart</h5>
          <img src={cancel} alt="close" onClick={onHideCartHandeler} />
        </HeaderSection>
        <MiddleComponent>
          <CartCourse />
        </MiddleComponent>
        <CartButtomContent />
      </UserCartContainer>
      ;
    </>
  );
}

export default UserCart;
export const UserCartContainer = styled.div`
  position: absolute;
  top: 30px;
  right: 25%;
  left: 25%;
  z-index: 11;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 679px;
  height: auto;
  background: #170335;
  border-radius: 24px;
`;

export const HeaderSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 30px 0 0 0;

  & h5 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 125%;
    /* identical to box height, or 25px */
    color: #ffffff;
    text-align: center;
    letter-spacing: -0.05em;
  }

  & img {
    width: 32px;
    height: 32px;
    cursor: pointer;
  }
`;

export const MiddleComponent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 50px;
  gap: 10px;
`;
