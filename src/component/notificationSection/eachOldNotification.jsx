import React from "react";
import styled from "styled-components";
import CompletedCourses from "../../image/complitedCourse.png";
import { BlueBtn } from "./notificationList";

const EachNotificationContainer = styled.div`
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 16px;
  gap: 219px;

  width: 625px;
  height: 138px;

  background: rgba(173, 125, 249, 0.07);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 16px;

  & h5 {
    width: 49px;
    height: 21px;

    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    letter-spacing: -0.035em;

    color: #e4d3fd;
  }
`;

const CourseDetail = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 24px;
`;

const MiddleSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;

  & h2 {
    width: 157px;
    height: 22px;

    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 140%;
    letter-spacing: -0.03em;

    color: #f9f5fe;
  }

  & span {
    width: 277px;
    height: 21px;

    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    letter-spacing: -0.02em;

    color: #e4d3fd;
  }
`;

function EachOldNotification() {
  return (
    <>
      <EachNotificationContainer>
        <CourseDetail>
          <img src={CompletedCourses} alt="completed Course" />
          <MiddleSection>
            <div>
              <h2>Course completed</h2>
              <span>You emerged the grand winner for the week</span>
            </div>
            <BlueBtn>
              <h4>Get certificate</h4>
            </BlueBtn>
          </MiddleSection>
        </CourseDetail>
        <h5>2:30pm</h5>
      </EachNotificationContainer>
    </>
  );
}

export default EachOldNotification;
