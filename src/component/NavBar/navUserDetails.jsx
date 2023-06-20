import React from "react";
import { BsBell, BsCart3 } from "react-icons/bs";
import searchIcon from "../../image/searchicon.png";
import styled from "styled-components";
import menuBtn from "../../image/menuBtn.png";
import { useDispatch, useSelector } from "react-redux";
import { userInterfaceAction } from "../../store/userInterface";

const NavRightItemsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  cursor: pointer;

  & img {
    display: none;
  }

  & h5 {
    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: -0.03em;
    color: #ffffff;
  }

  & h4 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;

    background: #6810f2;
    border-radius: 200px;
  }

  @media screen and (max-width: 975px) {
    gap: 40px;

    & img {
      display: inline-block;
    }

    & h5,
    h4 {
      display: none;
    }
  }
`;

const NotificationSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 12px;
  isolation: isolate;

  width: 40px;
  height: 40px;

  background: rgba(255, 255, 255, 0.2);
  border-radius: 50px;

  & .BsBell {
    height: 20px;
    width: 20px;
  }

  & span {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 15px;
    height: 15px;
    right: 8px;
    top: 1px;

    background: #ed2e45;
    border-radius: 50%;

    flex: none;
    order: 1;
    flex-grow: 0;
    z-index: 1;
  }
  @media screen and (max-width: 975px) {
    display: none;
  }
`;

function NavRightItems() {
  const dispatch = useDispatch();
  const numberOfCourses = useSelector(
    (store) => store.course.totalCoursesInCart
  );

  function onShowUserMenu() {
    dispatch(userInterfaceAction.setShowUserPopupMenu());
  }

  function onShowCartHandelerFn() {
    dispatch(userInterfaceAction.setShowCartHandeler());
  }

  function onShowNotificationPopupFn() {
    dispatch(userInterfaceAction.SetOnToggleUserNotifiationHandeler());
  }

  return (
    <>
      <NavRightItemsWrapper display="none">
        <img src={searchIcon} alt="" />
        <h5>Start tutoting</h5>
        <NotificationSection onClick={onShowCartHandelerFn}>
          <BsCart3 className="BsCart" />
          <span>{numberOfCourses}</span>
        </NotificationSection>
        <NotificationSection onClick={onShowNotificationPopupFn}>
          <BsBell className="BsBell" />
          <span></span>
        </NotificationSection>
        <h4 onClick={onShowUserMenu}> VN </h4>
        <img src={menuBtn} alt="" />
      </NavRightItemsWrapper>
    </>
  );
}

export default NavRightItems;
