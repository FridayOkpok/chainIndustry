import React, { useState } from "react";
import styled from "styled-components";
import CourseImage from "../../image/continueLearning-img.png";
import playBtn from "../../image/playBtn.png";

const CoursesContainerStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
  padding: 20px;
  overflow-x: scroll;
  overflow-y: hidden;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const EachCource = styled.div`
  display: flex;
  width: 243px;
  flex-direction: column;
  align-items: center;
  flex-direction: center;
`;

export const CourseTopStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 132px;
  width: 100%;
  border-radius: 18px 18px 0 0;
  background-image: url(${(props) => props.backgroundimage});
  background-repeat: no-repeat;
  background-position: center;
`;

const TextAreaForCources = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  box-sizing: border-box;
  height: 132px;
  border-radius: 0px 0px 18px 18px;
  background: #f9f5fe;
  position: relative;

  & h5 {
    width: 211px;
    height: 52px;

    font-family: SF Pro Text;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: -0.03em;
    text-align: left;
    margin: 20px 10px 0 10px;
  }
`;

const ProgressInfoStyling = styled.div`
  position: absolute;
  bottom: 25px;
  left: 15px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 116px;
  height: 20px;

  & p {
    width: 81px;
    height: 18px;
    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    letter-spacing: -0.02em;
    color: #5d5667;
  }
`;

const ProgressLine = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 116px;
  height: 3px;
  margin: 0px 10px 20 10px;

  & .loaded {
    width: 77px;
    height: 3px;

    background: #de3561;
  }

  & .loading {
    width: 39px;
    height: 3px;

    background: rgba(222, 53, 97, 0.1);
  }
`;

function MyCourses() {
  const [userCourses, setUserCourses] = useState([
    {
      image: CourseImage,
      courseName: "Understanding Farm Yielding and vaults",
      numberOfCoursesDone: "4 of 8",
    },
    {
      image: CourseImage,
      courseName: "Understanding Farm Yielding and vaults",
      numberOfCoursesDone: "4 of 8",
    },
    {
      image: CourseImage,
      courseName: "Understanding Farm Yielding and vaults",
      numberOfCoursesDone: "4 of 8",
    },
    {
      image: CourseImage,
      courseName: "Understanding Farm Yielding and vaults",
      numberOfCoursesDone: "4 of 8",
    },
    {
      image: CourseImage,
      courseName: "Understanding Farm Yielding and vaults",
      numberOfCoursesDone: "4 of 8",
    },
    {
      image: CourseImage,
      courseName: "Understanding Farm Yielding and vaults",
      numberOfCoursesDone: "4 of 8",
    },
    {
      image: CourseImage,
      courseName: "Understanding Farm Yielding and vaults",
      numberOfCoursesDone: "4 of 8",
    },
    {
      image: CourseImage,
      courseName: "Understanding Farm Yielding and vaults",
      numberOfCoursesDone: "4 of 8",
    },
    {
      image: CourseImage,
      courseName: "Understanding Farm Yielding and vaults",
      numberOfCoursesDone: "4 of 8",
    },
    {
      image: CourseImage,
      courseName: "Understanding Farm Yielding and vaults",
      numberOfCoursesDone: "4 of 8",
    },
  ]);
  const EachCourse = userCourses.map((element, index) => {
    return (
      <EachCource key={index}>
        <CourseTopStyle backgroundimage={element.image}>
          {/* the image will a  background image */}
          <img src={playBtn} alt="play btn" />
        </CourseTopStyle>
        <TextAreaForCources>
          <h5> {element.courseName} </h5>
          <ProgressInfoStyling>
            <ProgressLine>
              <span className="loaded"></span>
              <span className="loading"></span>
            </ProgressLine>
            <p>{element.numberOfCoursesDone} </p>
          </ProgressInfoStyling>
        </TextAreaForCources>
      </EachCource>
    );
  });

  return <CoursesContainerStyle>{EachCourse}</CoursesContainerStyle>;
}

export default MyCourses;
