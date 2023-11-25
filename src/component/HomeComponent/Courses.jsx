import React, { useState } from "react";
import styled from "styled-components";
import { BsStarFill } from "react-icons/bs";
import { CourseTopStyle, EachCource } from "../courses/MyCourses";
import { CourseStoreAction } from "../../store/CoursesStore";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from "../loader/Loader";

function Courses({ header }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const RecommendedCourses = useSelector((store) => store.course.AllCourses);
  let AllSimilarCartigory;
  let eachCourse;

  if (header === "all") {
    AllSimilarCartigory = RecommendedCourses;
  } else {
    AllSimilarCartigory = RecommendedCourses.filter((element) => {
      return element.courseCartigory === header;
    });
  }

  AllSimilarCartigory.length > 1
    ? (eachCourse = AllSimilarCartigory.map((el, index) => {
        function goToCourseDetailPage() {
          dispatch(CourseStoreAction.onViewCourseDetailsFn(el));

          navigate(`/${el.id}`);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }

        return (
          <EachCourseCustomStyle key={index} onClick={goToCourseDetailPage}>
            <CustomCourseTopStyle backgroundimage={el.image} />
            <CourseDetailsoTop>
              <h3 className="courseName">{el.courseName} </h3>
              <DetailedTextSection>
                <div className="rate">
                  <BsStarFill className="icon-star" />
                  <h5 className="rateing">{el.rating}</h5>
                </div>
                <h6>
                  {el.courseCartigory} - {el.level}
                </h6>
              </DetailedTextSection>
              <DetailedTextSection>
                <h5>by {el.courseAutoName}</h5>
                <div className="price">
                  <span>
                    {" "}
                    {typeof el.priceInNaira === "number"
                      ? `₦ ${el.priceInNaira}`
                      : `Free`}
                  </span>
                  <h4>
                    {typeof el.priceInDollars === "number"
                      ? `$ ${el.priceInDollars}`
                      : ``}
                  </h4>
                </div>
              </DetailedTextSection>
            </CourseDetailsoTop>
          </EachCourseCustomStyle>
        );
      }))
    : (eachCourse = <Loader />);

  return (
    <>
      <CoursesStyledContainer>{eachCourse}</CoursesStyledContainer>
    </>
  );
}

export default Courses;

export const CustomCourseTopStyle = styled(CourseTopStyle)`
  width: 100%;
  height: 166px;
`;

export const EachCourseCustomStyle = styled(EachCource)`
  width: 370px;
  cursor: pointer;
`;

export const CoursesStyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 16px;
  width: 95%;
  padding: 20px;
  overflow-x: scroll;
  overflow-y: hidden;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CourseDetailsoTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 0px 24px;
  gap: 16px;
  border-radius: 0px 0px 18px 18px;

  width: 100%;
  height: 152px;
  background: rgba(173, 125, 249, 0.1);

  & .courseName {
    box-sizing: border-box;
    width: 333px;
    height: 58px;

    margin: 24px 10px 0 10px;

    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 145.34%;
    /* or 29px */

    letter-spacing: -0.03em;

    color: #ffffff;
  }
`;

export const DetailedTextSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  width: 89%;
  margin: 0 auto;

  & h5 {
    width: 107px;
    height: 20px;

    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 145.34%;
    letter-spacing: -0.025em;

    color: #a9a3b3;
  }

  & .price {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0px;
    gap: 10px;

    width: 167px;
    height: 35px;
  }

  & .price span {
    display: flex;

    height: 35px;

    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 145.34%;
    letter-spacing: -0.03em;

    color: #ffffff;
  }

  & .price h4 {
    width: 70px;
    height: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 145.34%;

    letter-spacing: -0.03em;
    color: #e5e3e8;
  }

  & .rate {
    display: flex;
    gap: 5px;
    width: 147px;

    align-items: center;
    height: 20px;
  }

  & div .icon-star {
    width: 15px;
    height: 15px;
    color: #ffb802;
  }

  & div .rateing {
    width: 49px;
    height: 15px;

    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 145.34%;

    letter-spacing: -0.025em;

    color: #ffffff;
  }

  & h6 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 3px;
    width: 260px;
    height: 28px;

    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 300;
    font-size: 13px;
    line-height: 130.34%;
    letter-spacing: -0.025em;

    color: #a9a3b3;
    background: rgba(173, 125, 249, 0.1);
    border-radius: 200px;
  }
`;
