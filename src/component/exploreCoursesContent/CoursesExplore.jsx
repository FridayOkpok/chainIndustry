import React, { useState } from "react";
import styled from "styled-components";
import { BsStarFill } from "react-icons/bs";
import {
  CustomCourseTopStyle,
  CourseDetailsoTop,
  DetailedTextSection,
  EachCourseCustomStyle,
} from "../HomeComponent/Courses";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CourseStoreAction } from "../../store/CoursesStore";

const ComponentContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  width: 100%;
  grid-gap: 20px;

  place-items: center;
`;

function TheCourse() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const SameCourses = useSelector(
    (store) => store.course.categorySpecification
  );

  const eachCourse = SameCourses.map((el) => {
    function goToCourseDetailPage() {
      dispatch(CourseStoreAction.onViewCourseDetailsFn(el));

      navigate(`/${el.id}`);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    return (
      <EachCourseCustomStyle key={el.id} onClick={goToCourseDetailPage}>
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
  });

  return <ComponentContainer>{eachCourse}</ComponentContainer>;
}

export default TheCourse;
