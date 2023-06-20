import React from "react";
import styled from "styled-components";
import courseimg from "../../image/courseImg.png";
import {
  BackgroundImageCourse,
  CourseDetails,
  CourseDetailsTop,
  CustomCardComponent,
  SideOne,
} from "../cart/CartCourse";
import { useSelector } from "react-redux";

function PaymentCourse({ width, marginLeft }) {
  const coursesToPurchase = useSelector(
    (store) => store.course.coursesToPurchase
  );

  return (
    <>
      {coursesToPurchase.map((element) => {
        return (
          <RecustionCardComponent
            key={element.id}
            size={width}
            margin={marginLeft}
          >
            <SideOne>
              <BackgroundImageCourse backgroundimg={element.image} />
              <CustomCourseDetail>
                <CustomDetailTop>
                  <h3>{element.courseName}</h3>
                </CustomDetailTop>
                <h6>
                  {" "}
                  <span>by </span> {element.courseAutoName}
                </h6>
              </CustomCourseDetail>
            </SideOne>
          </RecustionCardComponent>
        );
      })}
    </>
  );
}

export default PaymentCourse;

const RecustionCardComponent = styled(CustomCardComponent)`
  height: 114px;
  justify-content: center;
  align-items: center;
  width: ${(props) => (props.size ? props.size : `90%`)};
  margin-left: ${(props) => (props.margin ? props.margin : `20px`)};
  border-radius: 16px;
`;

const CustomCourseDetail = styled(CourseDetails)`
  width: 100%;
  gap: 10px;
  height: 82px;
`;

const CustomDetailTop = styled(CourseDetailsTop)`
  width: 100%;
  height: 46px;

  & h3 {
    width: 90%;
  }
`;
