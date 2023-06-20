import React, { useEffect, useState } from "react";
import styled from "styled-components";
import NavSearchBar from "../../component/NavBar/NavSearchbar";
import { FilterBtnStyled } from "../../component/exploreCoursesContent/exploreCourses";
import Filter from "../../image/filter.png";
import CoursesToExploure from "./EachCourse";
import { useDispatch, useSelector } from "react-redux";
import { CourseStoreAction } from "../../store/CoursesStore";

const AllCoursesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-top: 50px;
  box-sizing: border-box;
`;

const AllCoursesTopItem = styled.div`
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 90%;
  margin: 0 10px;
`;

const TopRightSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 37px;

  & h3 {
    width: 438px;
    height: 54px;
    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 800;
    font-size: 48px;
    line-height: 111.84%;
    text-align: center;
    letter-spacing: -0.055em;

    color: #ffffff;
  }
`;

function ExplorAllCourses() {
  const AllCourses = useSelector((store) => store.course.AllCourses);

  const AllCaretigory = AllCourses.map((Element) => {
    return Element.courseCartigory;
  });

  const uniqueArray = AllCaretigory.filter(
    (item, index) => AllCaretigory.indexOf(item) === index
  );

  return (
    <AllCoursesContainer>
      <AllCoursesTopItem>
        <FilterBtnStyled>
          <h3>
            Filter
            <img src={Filter} alt="Filter" />
          </h3>
        </FilterBtnStyled>
        <TopRightSection>
          <h3>Explore all courses</h3>
          <NavSearchBar />
        </TopRightSection>
      </AllCoursesTopItem>
      <CoursesToExploure courses={uniqueArray} />
    </AllCoursesContainer>
  );
}

export default ExplorAllCourses;
