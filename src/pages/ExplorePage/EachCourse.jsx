import React from "react";
import styled from "styled-components";
import Courses from "../../component/HomeComponent/Courses";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { CourseStoreAction } from "../../store/CoursesStore";

export const CourseStyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  width: 100%;
  margin-top: 40px;
  box-sizing: border-box;

  & h4 {
    width: 569px;
    height: 54px;
    padding: 0 10px;
    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 800;
    font-size: 48px;
    line-height: 111.84%;

    letter-spacing: -0.055em;
    color: #ffffff;
  }
`;

const TheCourseContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 0 10px;
`;

const ViewAllBtn = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & h6 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    width: 123px;
    height: 60px;

    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 12px;

    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 125%;
    /* identical to box height, or 20px */

    text-align: center;
    letter-spacing: -0.02em;

    /* White */

    color: #ffffff;
  }
`;

function CoursesToExploure({ courses }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>
      {courses.map((element, index) => {
        function onGoToViewAllCoursePage(course) {
          dispatch(CourseStoreAction.GetSpecifitcCourseCategory(course));

          navigate(`/explore/${course}`);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }

        return (
          <CourseStyledContainer key={element}>
            <h4>{element}</h4>
            <TheCourseContainer>
              <Courses header={element} />
            </TheCourseContainer>
            <ViewAllBtn onClick={() => onGoToViewAllCoursePage(element)}>
              <h6>View all</h6>
            </ViewAllBtn>
          </CourseStyledContainer>
        );
      })}
    </>
  );
}

export default CoursesToExploure;
