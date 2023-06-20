import React from "react";
import styled from "styled-components";
import { CourseStyledContainer } from "../../pages/ExplorePage/EachCourse";

const LoaderTop = styled.div`
  width: 235px;
  height: 54px;

  background: linear-gradient(
    273.8deg,
    rgba(255, 255, 255, 0.2) -12.24%,
    rgba(255, 255, 255, 0) 114.03%
  );
  box-sizing: border-box;
  margin-left: 20px;
`;

const LoaderBottom = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-left: 30px;
  overflow: hidden;
  width: 95%;
  gap: 30px;
`;

const LoaderCourse = styled.div`
  width: 309.67px;
  height: 386px;

  background: linear-gradient(
    272.52deg,
    rgba(255, 255, 255, 0.1) -18.91%,
    rgba(255, 255, 255, 0) 122.81%
  );

  border-radius: 20px;
`;

function Loader() {
  return (
    <>
      <CourseStyledContainer>
        <LoaderTop />
        <LoaderBottom>
          <LoaderCourse />
          <LoaderCourse />
          <LoaderCourse />
          <LoaderCourse />
          <LoaderCourse />
        </LoaderBottom>
      </CourseStyledContainer>
    </>
  );
}

export default Loader;
