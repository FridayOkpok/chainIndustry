import React from "react";
import styled from "styled-components";
import { DiscriptionHeader, DiscriptionContainer } from "./courseDiscription";
import ArrowDown from "../../image/ArrowDown.png";
import { useState } from "react";

const LessonContainer = styled(DiscriptionContainer)`
  margin: 0;
  height: auto;

  & p {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 12px;
    width: 188px;
    height: 20px;

    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 145.34%;
    letter-spacing: -0.025em;

    color: #ffffff;
  }

  & em {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 4px;
    font-weight: 1000;
  }
`;

const LecturesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;

  width: 646px;
  height: auto;
`;

const EachLectres = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  width: 610px;
  height: 76px;
  padding: 24px;
  background: rgba(173, 125, 249, 0.1);
  border-radius: 12px;
  box-sizing: border-box;
  cursor: pointer;
`;

const LectureInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 23px;

  & h6 {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 4px 8px;
    gap: 10px;

    width: 92px;
    height: 28px;

    background: rgba(173, 125, 249, 0.1);
    border-radius: 200px;

    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 145.34%;

    letter-spacing: -0.025em;

    color: #c3bfca;
  }

  & h5 {
    width: 231px;
    height: 27px;

    /* Paragraph/Meduim body/bold */

    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 150%;
    /* identical to box height, or 27px */

    letter-spacing: -0.04em;

    /* White */

    color: #ffffff;
  }
`;

const LectureTime = styled.h1`
  width: 64px;
  height: 21px;

  font-family: "SF Pro Text";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  text-align: right;
  letter-spacing: -0.02em;
  color: #ffffff;
`;

const MoreCourses = styled.h2`
  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px 32px;
  gap: 10px;

  height: 60px;

  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  width: 610px;
  font-family: "SF Pro Text";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 125%;

  text-align: center;
  letter-spacing: -0.02em;
  color: #ffffff;

  cursor: pointer;
`;

function LessonsSection() {
  const [AllCourses, setAllCourses] = useState([
    {
      id: "i1",
      time: "10:01",
      title: "introduction",
    },
    {
      id: "i2",
      time: "3:01",
      title: "Why this course ? 🤔",
    },
    {
      id: "i3",
      time: "1:01",
      title: "Objective of the course",
    },
    {
      id: "i4",
      time: "4:01",
      title: "Tools required for the course",
    },
    {
      id: "i5",
      time: "3:01",
      title: "Fundamentals",
    },
    {
      id: "i6",
      time: "10:01",
      title: "Time to preactice",
    },
  ]);

  const lessons = AllCourses.map((element, index) => {
    return (
      <EachLectres key={element.id}>
        <LectureInfo>
          <h6>lesson {index}</h6>
          <h5>{element.title}</h5>
        </LectureInfo>
        <LectureTime>{element.time} min</LectureTime>
      </EachLectres>
    );
  });

  return (
    <LessonContainer>
      <DiscriptionHeader>Lessons</DiscriptionHeader>
      <p>
        12 Lessons <em>.</em>
        <span> 2 hrs 40 mins</span>{" "}
      </p>
      <LecturesContainer>{lessons}</LecturesContainer>
      <MoreCourses>
        View more courses <img src={ArrowDown} alt="down" />{" "}
      </MoreCourses>
    </LessonContainer>
  );
}

export default LessonsSection;
