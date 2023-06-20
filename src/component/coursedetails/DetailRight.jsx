import React from "react";
import styled from "styled-components";
import { BsHeart } from "react-icons/bs";
import courseImage from "../../image/courseImg.png";
import { useDispatch, useSelector } from "react-redux";
import { userInterfaceAction } from "../../store/userInterface";
import { CourseStoreAction } from "../../store/CoursesStore";

function DetailRightItem() {
  const dispatch = useDispatch();
  const courseDetails = useSelector((store) => store.course.selectedCourse);

  function onShowPaymentHadelerFn() {
    // add item to cart
    dispatch(CourseStoreAction.onAddItemToCartHandelerStore(courseDetails));
    dispatch(CourseStoreAction.onPurchaseCoursesHandelerFn());

    // show the payment page
    dispatch(userInterfaceAction.setShowPaymentCard());
  }

  function onAddItemToCartHandelerFn() {
    dispatch(CourseStoreAction.onAddItemToCartHandelerStore(courseDetails));
  }

  return (
    <DetailRightContainer>
      <EachBotton>
        <BuyBtn onClick={onShowPaymentHadelerFn}>
          <h1>Buy now</h1>
        </BuyBtn>
        <AddToCartBtn onClick={onAddItemToCartHandelerFn}>
          <h2>Add To Cart</h2>
        </AddToCartBtn>
        <LoveEmoji>
          <BsHeart className="icon" />
        </LoveEmoji>
      </EachBotton>
      <CourseIcon image={courseImage}></CourseIcon>
    </DetailRightContainer>
  );
}

export default DetailRightItem;
const DetailRightContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 34px;
  margin: 105px auto;
  width: 350px;
  height: 412px;
`;

const EachBotton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
`;

const BuyBtn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 22px;
  gap: 10px;

  width: 227.5px;
  height: 60px;

  background: #de3561;
  border-radius: 16px;
  cursor: pointer;

  & h1 {
    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 125%;
    letter-spacing: -0.02em;

    /* White */

    color: #ffffff;
  }
`;

const AddToCartBtn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 22px;
  gap: 10px;

  width: 227.5px;
  height: 60px;

  background: rgba(222, 53, 97, 0.4);
  border-radius: 16px;
  cursor: pointer;

  & h2 {
    width: 85px;
    height: 20px;
    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 125%;

    letter-spacing: -0.02em;
    color: #ffffff;
  }
`;

const LoveEmoji = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px;
  gap: 10px;
  width: 60px;
  height: 60px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  cursor: pointer;

  & .icon {
    color: #fff;
  }
`;

const CourseIcon = styled.div`
  width: 100%;
  height: 318px;

  background: url(${(props) => props.image});
  background-position: 100% 100%;
  background-size: cover;
  /*  */
  border-radius: 28px;
`;
