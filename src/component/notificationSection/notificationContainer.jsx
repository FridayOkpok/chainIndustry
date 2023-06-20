import React from "react";
import styled from "styled-components";
import { BackDrop } from "../../style/Style.styled";
import { HeaderSection, UserCartContainer } from "../cart/Cart";
import cancel from "../../image/cancel.png";
import NotificationList from "./notificationList";
import AllOldNotification from "./oldNotificationList";
import { useDispatch } from "react-redux";
import { userInterfaceAction } from "../../store/userInterface";

const NotifcationContainer = styled(UserCartContainer)`
  gap: 20px;
`;

const CurrentNotification = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin: 0 24px;
  height: 27px;

  & h4 {
    width: 51px;
    height: 27px;

    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 150%;
    letter-spacing: -0.05em;

    color: #ffffff;
  }

  & h6 {
    width: 103px;
    height: 20px;

    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 140%;
    cursor: pointer;
    text-align: right;
    letter-spacing: -0.03em;

    color: #e4d3fd;
  }
`;

function NotificationContainer() {
  const dispatch = useDispatch();

  function onHideNotificationMenuFn() {
    dispatch(userInterfaceAction.SetOnToggleUserNotifiationHandeler());
  }

  return (
    <>
      <BackDrop onClick={onHideNotificationMenuFn} />
      <NotifcationContainer>
        <HeaderSection>
          <h5>Notification</h5>
          <img src={cancel} alt="close" onClick={onHideNotificationMenuFn} />
        </HeaderSection>
        <CurrentNotification>
          <h4>Today</h4>
          <h6>Mark all as read</h6>
        </CurrentNotification>
        <NotificationList />
        <AllOldNotification />
      </NotifcationContainer>
    </>
  );
}

export default NotificationContainer;
