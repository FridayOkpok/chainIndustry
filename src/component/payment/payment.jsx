import React from "react";
import styled, { keyframes } from "styled-components";
import cancel from "../../image/cancel.png";
import { BackDrop } from "../../style/Style.styled";
import UserPayment from "../PaymentComponent/UserPayment";
import {
  HeaderSection,
  MiddleComponent,
  UserCartContainer,
} from "../cart/Cart";
import PaymentCourse from "./paymentCourse";
import { useDispatch, useSelector } from "react-redux";
import { userInterfaceAction } from "../../store/userInterface";

function PaymentSection() {
  const dispatch = useDispatch();
  const acutualPrice = useSelector((store) => store.course.actualPrice);
  const priceOfCoursesToPurchase = useSelector(
    (store) => store.course.priceOfCoursesToPurchase
  );

  function onHidePaymentHandelerfn() {
    dispatch(userInterfaceAction.setHidePaymentHandeler());
  }

  return (
    <>
      <BackDrop onClick={onHidePaymentHandelerfn} />
      <CustomPaymentContainer>
        <HeaderSection>
          <h5>Purchase Course</h5>
          <img src={cancel} alt="close" onClick={onHidePaymentHandelerfn} />
        </HeaderSection>
        <PaymentAmount>
          <h5>₦ {priceOfCoursesToPurchase}</h5>
          <h6>
            {" "}
            {priceOfCoursesToPurchase === acutualPrice
              ? ``
              : `₦ ${acutualPrice}`}
          </h6>
        </PaymentAmount>
        <MiddleComponent>
          <PaymentCourse />
        </MiddleComponent>
        <UserPayment />
      </CustomPaymentContainer>
    </>
  );
}

export default PaymentSection;
const FadeIn = keyframes`
from {
  opacity: 0;
}to {
  opacity: 1;
}
`;

const PaymentAmount = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;

  & h5 {
    width: 129px;
    height: 47px;

    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 145.34%;
    letter-spacing: -0.03em;

    color: #ffffff;
  }

  & h6 {
    width: 63px;
    height: 23px;

    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 145.34%;
    /* or 23px */

    letter-spacing: -0.03em;
    text-decoration-line: line-through;

    /* Greyscale/Grey 20 */

    color: #c3bfca;
  }
`;

const CustomPaymentContainer = styled(UserCartContainer)`
  width: 505px;
  animation: ${FadeIn} 0.5s ease-in-out;
`;
