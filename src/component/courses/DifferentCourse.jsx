import React from "react";
import styled from "styled-components";
import { BsArrowRight } from "react-icons/bs";
import {
  CustomLink,
  RecommendedCourseContainerStyle,
} from "../recommended/RecommendedCourses";
import Courses from "../HomeComponent/Courses";
import { useDispatch } from "react-redux";
import { CourseStoreAction } from "../../store/CoursesStore";
import { useNavigate } from "react-router-dom";

const DifferentCourseItem = [
  {
    title: "Courses Software Development",
    linkText: "View more",
    cartigory: "Development",
  },
  {
    title: "Courses on Design",
    linkText: "View more",
    cartigory: "Design",
  },
];

function DifferentCourses({ hideLink }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const AreaTopContent = DifferentCourseItem.map((element, index) => {
    function onChangeToExplorCourse(course) {
      dispatch(CourseStoreAction.GetSpecifitcCourseCategory(course));

      navigate(`/explore/${course}`);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    return (
      <CustomRecommendedCourse key={index}>
        <TopTextArea>
          <h3>{element.title}</h3>
          {!hideLink && (
            <LinkToMoreCourse
              onClick={() => onChangeToExplorCourse(element.cartigory)}
            >
              <h5>{element.linkText}</h5>
              <BsArrowRight />{" "}
            </LinkToMoreCourse>
          )}
        </TopTextArea>
        <Courses header={element.cartigory} />
      </CustomRecommendedCourse>
    );
  });
  return <>{AreaTopContent};</>;
}

export default DifferentCourses;

const LinkToMoreCourse = styled(CustomLink)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 10px;
  width: 152px;

  & h5 {
    width: 118px;
    height: 30px;

    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 125%;

    text-align: center;
    letter-spacing: -0.05em;
  }
`;

const CustomRecommendedCourse = styled(RecommendedCourseContainerStyle)`
  margin: 0 20px;
  margin-top: 100px;
  gap: 2rem;

  @media screen and (max-width: 975px) {
    margin: 0 1px;
    margin-top: 100px;
  }
`;

const TopTextArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 90%;
  justify-content: space-between;
  box-sizing: border-box;

  @media screen and (max-width: 975px) {
    width: 95%;
  }

  & h3 {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 800;
    font-size: 48px;
    line-height: 111.84%;

    letter-spacing: -0.055em;

    color: #c3bfca;

    @media screen and (max-width: 975px) {
      width: 100%;
      height: 102px;
      text-align: left;
      font-size: 28px;
    }
  }
`;
