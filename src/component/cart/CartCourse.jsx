import React from "react";
import styled from "styled-components";
import { CardComponent } from "../../style/Style.styled";
import courseImage from "../../image/courseImg.png";
import { useDispatch, useSelector } from "react-redux";
import { CourseStoreAction } from "../../store/CoursesStore";

function CartCourse() {
  const selectedCartCourses = useSelector((store) => store.course.cartCourses);
  const dispatch = useDispatch();

  return (
    <>
      {selectedCartCourses.map((element) => {
        function onRemoveCourseFromCartHandelerFn() {
          dispatch(CourseStoreAction.onRemoveFromCartHandelerFn(element.id));
        }

        return (
          <CustomCardComponent key={element.id}>
            <SideOne>
              <BackgroundImageCourse backgroundimg={element.image} />
              <CourseDetails>
                <CourseDetailsTop>
                  <h3>{element.courseName}</h3>
                  <CourseDetailsMiddle>
                    <span>2 hrs 25 mins</span>
                    <span>12 Lessons</span>
                    <span>Beginner</span>
                  </CourseDetailsMiddle>
                </CourseDetailsTop>
                <h6>
                  {" "}
                  <span>by </span>
                  {element.courseAutoName}
                </h6>
              </CourseDetails>
            </SideOne>
            <DetailsRight>
              <RightTop>
                <h6 onClick={onRemoveCourseFromCartHandelerFn}>Remove</h6>
                <h3>Add to favourite</h3>
              </RightTop>
              <RightBottom>
                <h2>
                  {typeof element.priceInNaira === "number"
                    ? `₦ ${element.priceInNaira}`
                    : `Free`}
                </h2>
                <h5>
                  {typeof element.priceInDollars === "number"
                    ? `$ ${element.priceInDollars}`
                    : `Free`}
                </h5>
              </RightBottom>
            </DetailsRight>
          </CustomCardComponent>
        );
      })}
    </>
  );
}

export default CartCourse;

export const CustomCardComponent = styled(CardComponent)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  margin: 0 auto;
  width: 93%;
  height: 159px;
  padding: 10px;

  box-sizing: border-box;
`;

export const SideOne = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  align-items: flex-start;
  width: 95%;
  gap: 18px;
  cursor: pointer;
`;

export const BackgroundImageCourse = styled.div`
  background-image: url(${(props) => props.backgroundimg});
  background-position: 100% 100%;
  background-size: cover;
  width: 80px;
  height: 80px;
  border-radius: 12px;
`;

export const CourseDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 24px;
  width: 328px;
  height: 127px;

  & h6 {
    width: 127px;
    height: 20px;

    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 145.34%;
    /* or 20px */

    letter-spacing: -0.025em;

    /* Greyscale/Grey 30 */

    color: #a9a3b3;
  }
`;

export const CourseDetailsTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;

  width: 318px;
  height: 83px;

  & h3 {
    width: 318px;
    height: auto;

    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 159.34%;
    letter-spacing: -0.03em;

    color: #ffffff;
  }
`;

const CourseDetailsMiddle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
  /* width: 303px; */
  height: 25px;

  & span {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 4px 12px;
    gap: 10px;

    width: 109px;
    height: 25px;

    background: rgba(255, 255, 255, 0.1);
    border-radius: 100px;

    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 145.34%;
    /* or 17px */

    letter-spacing: -0.025em;
    text-transform: uppercase;

    /* Greyscale/Grey 10 */

    color: #e0dee3;
  }
`;

const DetailsRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0px;
  gap: 8px;
  margin-right: 10px;
  width: 127px;
  height: 127px;
`;

const RightTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 0px;
  gap: 4px;

  width: 112px;
  height: 48px;

  & h6 {
    width: 57px;
    height: 22px;

    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 145.34%;
    cursor: pointer;
    letter-spacing: -0.03em;

    color: #ed2e45;
  }

  & h3 {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 112px;
    height: 22px;
    cursor: pointer;

    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 145.34%;
    /* identical to box height, or 22px */

    letter-spacing: -0.03em;

    color: #c29efa;
  }
`;

const RightBottom = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;

  & h2 {
    width: 81px;
    height: 30px;

    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 150%;
    letter-spacing: -0.045em;

    color: #ffffff;
  }

  & h5 {
    width: 42px;
    height: 23px;

    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 150%;
    /* identical to box height, or 22px */

    letter-spacing: -0.045em;

    /* Gray 90 */

    color: #e5e3e8;
  }
`;
