import React from "react";
import styled from "styled-components";
import EachOldNotification from "./eachOldNotification";

const OldNotificationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  margin: 2px 20px;
  width: 92%;

  & h6 {
    /* Heading/H7 */
    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 150%;
    letter-spacing: -0.05em;
    color: #ffffff;
  }
`;

function AllOldNotification() {
  return (
    <>
      <OldNotificationContainer>
        <h6>2 June, 2021</h6>
        <EachOldNotification />
      </OldNotificationContainer>
    </>
  );
}

export default AllOldNotification;
