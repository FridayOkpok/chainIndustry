import React from "react";
import styled from "styled-components";
import CountinueLerning from "../../component/HomeComponent/HomeContainer";
import RecommenedCources from "../../component/recommended/RecommendedCourses";
import DifferentCourses from "../../component/courses/DifferentCourse";
import SignUpText from "../../component/HomeComponent/signUpText";
import Categories from "../../component/category/Categories";
import BeATutorSection from "../../component/beAtutorSection/RegisterAsTutor";

export const HomePageContainerStyle = styled.div`
  position: relative;
  top: 8px;
  right: 0;
  left: 0;
  gap: 67px;
`;

function HomePageContainer() {
  return (
    <HomePageContainerStyle>
      <CountinueLerning />
      <RecommenedCources />
      <DifferentCourses />
      <SignUpText type="explore" />
      <Categories />
      <BeATutorSection />
      <SignUpText type="community" />
    </HomePageContainerStyle>
  );
}

export default HomePageContainer;
