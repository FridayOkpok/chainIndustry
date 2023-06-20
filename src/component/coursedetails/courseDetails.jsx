import React, { useEffect } from "react";
import {
  BsArrowLeft,
  BsClock,
  BsFileBarGraph,
  BsListTask,
  BsTrophy,
} from "react-icons/bs";
import styled from "styled-components";
import HighlightsSection from "./courseHighlights";
import DiscriptionSection from "./courseDiscription";
import LessonsSection from "./Lessons";
import AboutAuthor from "./AboutAuthor";
import DetailRightItem from "./DetailRight";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

function CourseDetailContainer() {
  const courseDetail = useSelector((store) => store.course.selectedCourse);

  const { courseId } = useParams();
  const navigate = useNavigate();

  function onGotoPreviousPageHandelerFn() {
    navigate(-1);
    window.scrollTo(0, 0);
  }

  if (courseId === courseDetail.id) {
    return (
      <DetailContainer key={courseDetail.id}>
        <DetailLeft>
          <BackBtn onClick={onGotoPreviousPageHandelerFn}>
            {" "}
            <BsArrowLeft /> back to courses
          </BackBtn>
          <CourseNameAutor>
            <p>{courseDetail.courseName}</p>
            <h2>{courseDetail.courseAutoName}</h2>
          </CourseNameAutor>
          <CoursePrice>
            <h2>
              {typeof courseDetail.priceInNaira === "string"
                ? courseDetail.priceInNaira
                : `₦${courseDetail.priceInNaira}`}
            </h2>
            <h6>
              {" "}
              {typeof courseDetail.priceInDollars === "string"
                ? courseDetail.priceInDollars
                : `$${courseDetail.priceInDollars}`}
            </h6>
          </CoursePrice>
          <StatSection>
            <EachSection>
              <Items>
                <BsClock className="icon" />
                <span>
                  Duration <h5> 2 hrs 25 mins</h5>
                </span>
              </Items>
              <Items>
                <BsListTask className="icon" />
                <span>
                  Lessons <h5> 12 </h5>
                </span>
              </Items>
            </EachSection>
            <EachSection>
              <Items>
                <BsFileBarGraph className="icon" />
                <span>
                  Level <h5>{courseDetail.level} </h5>
                </span>
              </Items>
              <Items>
                <BsTrophy className="icon" />
                <span>
                  Certificate <h5>of completion </h5>
                </span>
              </Items>
            </EachSection>
          </StatSection>
          <HighlightsSection />
          <DiscriptionSection />
          <LessonsSection />
          <AboutAuthor />
        </DetailLeft>
        <CourseImage>
          <DetailRightItem />
        </CourseImage>
      </DetailContainer>
    );
  }
}

export default CourseDetailContainer;
const DetailContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  margin: 20px;
  gap: 20px;
`;

const DetailLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const BackBtn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 20px 32px;
  gap: 10px;

  width: 215px;
  height: 60px;

  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;

  font-family: "SF Pro Text";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 125%;

  text-align: center;
  letter-spacing: -0.02em;
  cursor: pointer;
  color: #ffffff;
`;

const CourseNameAutor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 24px;

  & p {
    width: 616px;

    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    line-height: 111.84%;

    letter-spacing: -0.055em;

    color: #ffffff;
  }

  & h2 {
    width: 187px;
    height: 35px;

    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 145.34%;

    letter-spacing: -0.025em;

    color: #a9a3b3;
  }
`;

const CoursePrice = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  padding: 0px;
  gap: 10px;

  width: 279px;
  height: 54px;

  & h2 {
    width: 191px;
    height: 54px;

    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    line-height: 111.84%;

    letter-spacing: -0.055em;

    color: #fef6f8;
  }

  & h6 {
    width: 78px;
    height: 27px;

    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 111.84%;

    letter-spacing: -0.055em;

    color: #e5e3e8;
  }
`;

const StatSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const EachSection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;

  width: 467px;
  height: 30px;
`;

const Items = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  width: 182px;

  & .icon {
    color: #fff;
    width: 21px;
    height: 21px;
  }

  & span {
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    height: 20px;

    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 145.34%;

    letter-spacing: -0.025em;

    color: #ffffff;
  }

  & span h5 {
    width: 86px;
    height: 20px;

    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 145.34%;

    letter-spacing: -0.025em;
    color: #e0dee3;
  }
`;

const CourseImage = styled.div`
  width: 100%;
`;
