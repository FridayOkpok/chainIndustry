import React, { useState } from "react";
import styled from "styled-components";
import CategorySection from "./CategoryContainer";
import Filter from "../../image/filter.png";
import NavSearchBar from "../NavBar/NavSearchbar";
import Hide from "../../image/cancel.png";
import TheCourse from "./CoursesExplore";
import { useSelector } from "react-redux";

function ExploreCourseContainer() {
  const courses = useSelector((store) => store.course.selectedCategory);
  const selectedCoursePrice = useSelector(
    (store) => store.course.selectedPrice
  );
  const selectedCourseLevel = useSelector(
    (store) => store.course.selectedLevel
  );

  const [categories, _setCatigories] = useState([
    {
      id: "all",
      category: "All",
      checked: false,
    },
    {
      id: "Design",
      category: "Design",
      checked: false,
    },
    {
      id: "Development ",
      category: "Development ",
      checked: false,
    },
    {
      id: "Sales and Marketing",
      category: "Sales and Marketing",
      checked: false,
    },
    {
      id: "Writing & Transalation",
      category: "Writing & Transalation",
      checked: false,
    },
    {
      id: "Admin and customer support",
      category: "Admin and customer support",
      checked: false,
    },
    {
      id: "Finance and Accounting",
      category: "Finance and Accounting",
      checked: false,
    },
    {
      id: "Engineering and Architeture",
      category: "Engineering and Architeture",
      checked: false,
    },
  ]);

  const [prices, _setPrices] = useState([
    {
      id: "All",
      category: "All",
    },
    {
      id: "free",
      category: "Free Courses",
    },
    {
      id: "paid",
      category: "Paid Courses",
    },
  ]);

  const [difficulty, _setDifficulty] = useState([
    {
      id: "All",
      category: "All",
    },
    {
      id: "Beginner",
      category: "Beginner",
    },
    {
      id: "Intermediate",
      category: "Intermediate",
    },
    {
      id: "Professional",
      category: "Professional",
    },
  ]);

  const checkIfPriceIsChecked = selectedCoursePrice.trim() === "";
  const checkIfLevelIsChecked = selectedCourseLevel.trim() === "";

  return (
    <ExploreCoursesStyled>
      <ExploreTopItem>
        <FilterBtnStyled>
          <h3>
            Filter
            <img src={Filter} alt="filter" />
          </h3>
        </FilterBtnStyled>
        <TopRightContent>
          <h2> {`Explore ${courses} Courses`} </h2>
        </TopRightContent>
      </ExploreTopItem>
      <BotomItem>
        <FilterOptions>
          <CategorySection headerName="Category" options={categories} />
          <CategorySection headerName="Price" options={prices} />
          <CategorySection headerName="Difficulty" options={difficulty} />
        </FilterOptions>
        <BottomRight>
          <NavSearchBar />
          <SelectedItems>
            <EachSelectedItem>
              <h3>{courses}</h3>
              <img src={Hide} alt="remove item" />
            </EachSelectedItem>
            {!checkIfPriceIsChecked && (
              <EachSelectedItem>
                <h3>{selectedCoursePrice}</h3>
                <img src={Hide} alt="remove item" />
              </EachSelectedItem>
            )}
            {!checkIfLevelIsChecked && (
              <EachSelectedItem>
                <h3>{selectedCourseLevel}</h3>
                <img src={Hide} alt="remove item" />
              </EachSelectedItem>
            )}
          </SelectedItems>
          <TheCourse />
        </BottomRight>
      </BotomItem>
    </ExploreCoursesStyled>
  );
}

export default ExploreCourseContainer;
const ExploreCoursesStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  margin: 40px 5px;
  margin-left: 20px;
`;

const ExploreTopItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;
  margin-bottom: 20px;
  gap: 20px;
  width: 100%;
`;

const TopRightContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 20px;

  & h2 {
    height: 54px;
    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 800;
    font-size: 48px;
    line-height: 111.84%;
    /* identical to box height, or 54px */
    text-align: center;
    letter-spacing: -0.055em;

    color: #ffffff;
  }
`;

export const FilterBtnStyled = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 20px 0px;
  gap: 10px;
  cursor: pointer;
  width: 265px;

  & h3 {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 133px;
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

    color: #ffffff;
  }
`;

const BotomItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 20px;
  width: 100%;
`;

const FilterOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-start;
  width: 270px;
`;

const BottomRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  width: 100%;
`;

const SelectedItems = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;

  width: 460px;
  height: 43px;
`;

const EachSelectedItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 16px;
  gap: 10px;
  min-width: 30px;

  height: 28px;

  background: rgba(255, 255, 255, 0.2);
  border-radius: 40px;

  & h3 {
    height: 19px;

    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: right;
    letter-spacing: -0.02em;

    color: #e0dee3;
  }

  & img {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
`;
