import React from "react";
import styled from "styled-components";
import { ExploreCard } from "../../style/Style.styled";
import arrowDown from "../../image/ArrowDown.png";
import {
  Check,
  InputCheckedValue,
  LabelCustomStyled,
} from "../cart/CartBottomText";
import { useDispatch, useSelector } from "react-redux";
import { CourseStoreAction } from "../../store/CoursesStore";

const CustomExploreCard = styled(ExploreCard)`
  display: flex;
  flex-direction: column;
`;

const CategoryTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0px;
  gap: 16px;

  width: 215px;
  height: 30px;
  border-bottom: 1px solid rgba(173, 125, 249, 0.1);

  & h6 {
    width: 70px;
    height: 19px;

    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 150%;

    letter-spacing: -0.03em;
    color: #ffffff;
  }

  & img {
    color: #a9a3b3;
    cursor: pointer;
  }
`;

const CustomInput = styled(InputCheckedValue)`
  box-sizing: border-box;
  width: 20px;
  height: 20px;
  border-radius: 4px;
`;

const CustomLabel = styled(LabelCustomStyled)`
  width: 185px;
  height: 21px;

  font-family: "SF Pro Text";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  letter-spacing: -0.02em;
  color: #ffffff;
`;

function CategorySection({ options, headerName }) {
  const dispatch = useDispatch();

  const selectedCartegory = useSelector(
    (store) => store.course.selectedCategory
  );

  const AllCategory = options.map((element, index) => {
    function onGetCategoryCoursesFn(category) {
      if (headerName === "Category") {
        dispatch(CourseStoreAction.GetSpecifitcCourseCategory(category));
        dispatch(CourseStoreAction.onHeaderOptionFn({ headerName, element }));
        dispatch(CourseStoreAction.onClearSpecificationString());
      }
      if (headerName === "Price") {
        console.log(headerName);
        dispatch(CourseStoreAction.onGetCourseBasedOnPrice(element.id));
        dispatch(CourseStoreAction.onHeaderOptionFn({ headerName, element }));
      }
      if (headerName === "Difficulty") {
        dispatch(CourseStoreAction.onGetCourseBasedOnDeficulty(element.id));
        dispatch(CourseStoreAction.onHeaderOptionFn({ headerName, element }));
      }
    }

    return (
      <Check key={index} id={element.id}>
        <CustomInput
          type="checkbox"
          id="my-checkbox"
          checked={
            element.category === selectedCartegory
              ? "checked"
              : element.category === "all"
              ? "cheked"
              : ""
          }
          value="checked"
          onClick={() => onGetCategoryCoursesFn(element.id)}
        />
        <CustomLabel forHtml="my-checkbox">{element.category}</CustomLabel>
      </Check>
    );
  });

  return (
    <>
      <CustomExploreCard>
        <CategoryTop>
          <h6>{headerName}</h6>
          <img src={arrowDown} alt="Arrow Down " />
        </CategoryTop>
        <div>{AllCategory}</div>
      </CustomExploreCard>
    </>
  );
}

export default CategorySection;
