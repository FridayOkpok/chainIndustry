import React from "react";
import { HomePageContainerStyle } from "../../pages/homePage/HomePage";
import StartLearningHeader from "../courses/startLearning";
import RecommenedCources from "../recommended/RecommendedCourses";
import DifferentCourses from "../courses/DifferentCourse";

function IssignedInComponent() {
  return (
    <HomePageContainerStyle>
      <StartLearningHeader />
      <RecommenedCources />
      <DifferentCourses hideLink="true" />
    </HomePageContainerStyle>
  );
}

export default IssignedInComponent;
