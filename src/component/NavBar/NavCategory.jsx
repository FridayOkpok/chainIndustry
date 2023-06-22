import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const NavCategoryWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 40px;
  width: 220px;

  height: 24px;

  & h5 {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  @media screen and (max-width: 975px) {
    display: none;
  }
`;

function NavCategory() {
  const navigate = useNavigate();

  function onGoToViewAllCoursePage() {
    navigate(`/explore`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <NavCategoryWrapper>
      <h5 onClick={onGoToViewAllCoursePage}> Explore Categories</h5>
      <h5> My Courses</h5>
    </NavCategoryWrapper>
  );
}

export default NavCategory;
