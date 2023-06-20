import React, { useState } from "react";
import styled from "styled-components";
import Courses from "../HomeComponent/Courses";
import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export const CustomLink = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 10px;
  height: 100%;

  font-family: "SF Pro Text";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 125%;
  text-align: center;
  letter-spacing: -0.05em;
  cursor: pointer;

  color: #f881a0;
`;

export const RecommendedCourseContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
  gap: 30px;

  & h3 {
    width: 90%;
    height: 108px;
    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 800;
    font-size: 48px;
    line-height: 111.84%;

    text-align: center;
    letter-spacing: -0.055em;
    color: #ffffff;

    @media screen and (max-width: 975px) {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

function RecommenedCources() {
  const navigate = useNavigate();
  function onExploreAllCoursesFn() {
    navigate("/explore");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <RecommendedCourseContainerStyle>
      <h3> We recommend you this courses</h3>
      <Courses header="all" />
      <CustomLink onClick={onExploreAllCoursesFn}>
        Explore all courses
        <BsArrowRight />{" "}
      </CustomLink>
    </RecommendedCourseContainerStyle>
  );
}

export default RecommenedCources;
