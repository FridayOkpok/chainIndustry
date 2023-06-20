import React, { useState } from "react";
import styled from "styled-components";
import speaker from "../../image/volume-high.png";
import design from "../../image/design.png";
import web from "../../image/web3.png";
import animation from "../../image/animation.png";
import ProjectManagement from "../../image/project-management.png";
import Developement from "../../image/development.png";
import Blogging from "../../image/blogging.png";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CourseStoreAction } from "../../store/CoursesStore";

function Categories() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [images, _setImages] = useState([
    {
      image: web,
      text: "Web 3",
      Category: "Development",
      course: "10 courses",
    },
    {
      image: animation,
      text: "Animation",
      Category: "Development",
      course: "10 courses",
    },
    {
      image: speaker,
      text: "Growth/Digital marketing",
      Category: "Sales and Marketing",
      course: "10 courses",
    },
    {
      image: design,
      text: "Design",
      Category: "Design",
      course: "10 courses",
    },
    {
      image: ProjectManagement,
      text: "Project Management",
      Category: "Admin and customer support",

      course: "10 courses",
    },
    {
      image: Developement,
      text: "Development",
      Category: "Development",

      course: "10 courses",
    },
    {
      image: Blogging,
      text: "Blogging",
      course: "Coming soon✨",
    },
  ]);

  const gridItems = images.map((element, index) => {
    function onGoToCategoryHandelerFn() {
      if (element.course !== "Coming soon✨") {
        dispatch(
          CourseStoreAction.GetSpecifitcCourseCategory(element.Category)
        );
        navigate(`/explore/${element.Category}`);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else return;
    }

    return (
      <EachGridItemStyle key={index} onClick={onGoToCategoryHandelerFn}>
        <img src={element.image} alt="cat icon" />
        <p> {element.text}</p>
        <h6>{element.course}</h6>
      </EachGridItemStyle>
    );
  });

  return (
    <CategoriesStyledContainer>
      <h6>Categories</h6>
      <CategoriesItem>{gridItems}</CategoriesItem>
    </CategoriesStyledContainer>
  );
}

export default Categories;

const CategoriesStyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 60px;
  padding: 20px 0;

  & h6 {
    width: 666px;
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

const CategoriesItem = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  width: 90%;
  grid-gap: 20px;

  place-items: center;
`;

const EachGridItemStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 281px;
  height: 262px;
  background: #170335;
  border-radius: 24px;
  cursor: pointer;

  & p {
    width: 286px;
    height: 45px;
    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 125%;

    text-align: center;
    letter-spacing: -0.05em;
    color: #ffffff;
  }

  & h6 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 4px 12px;
    gap: 10px;

    max-width: 120px;
    height: 28px;
    background: #2b0566;
    border-radius: 200px;

    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 140%;
    /* identical to box height, or 20px */

    text-align: center;
    letter-spacing: -0.03em;

    /* White */

    color: #ffffff;
  }
`;
