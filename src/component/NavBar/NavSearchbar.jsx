import React from "react";
import SearchBar from "../../image/searchicon.png";
import styled from "styled-components";

const NavSearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  font-family: SF Pro Text;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.02em;
  text-align: left;

  & input {
    width: 250px;
    height: 52px;
    outline: none; /* Add this line */
    color: gray;
    background: rgba(173, 125, 249, 0.1);
    border-radius: 10px;
  }

  & img {
    position: absolute;
    right: 20px;
  }
  @media screen and (max-width: 975px) {
    display: none;
  }
`;

function NavSearchBar() {
  return (
    <NavSearchBarWrapper>
      <input placeholder="Search Courses" type="text" />
      <img src={SearchBar} alt="search Icon" />
    </NavSearchBarWrapper>
  );
}

export default NavSearchBar;
