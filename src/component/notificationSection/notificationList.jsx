import React from "react";
import styled from "styled-components";
import displayImg from "../../image/ratingUser.png";
import PaymentCourse from "../payment/paymentCourse";

const EachNotification = styled.div`
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 16px;
  gap: 24px;

  width: 625px;
  margin: 2px 20px;
  height: 219px;

  background: rgba(104, 16, 242, 0.3);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 16px;

  & span {
    width: 49px;
    height: 21px;

    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    letter-spacing: -0.035em;

    color: #e4d3fd;
  }
`;

const NotificationLeft = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 24px;
`;

const NotificationMiddle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 5px;

  width: 468px;
  height: 187px;

  & h5 {
    width: 264px;
    height: 22px;

    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 140%;
    letter-spacing: -0.03em;
    color: #f9f5fe;
  }
`;

const ButtonSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;

  width: 468px;
  height: 43px;

  & h4 {
    height: 19px;
    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 115.9%;
    letter-spacing: -0.02em;
  }
`;

const AllBtn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 10px;
  width: 160px;
  gap: 10px;
  cursor: pointer;
  height: 27px;
  border-radius: 12px;
`;
const WhiteButton = styled(AllBtn)`
  background: #ffffff;
  color: #de3561;
`;

export const BlueBtn = styled(AllBtn)`
  background: #6810f2;
  color: #ffff;
`;

const MarronBtn = styled(AllBtn)`
  background: rgba(237, 46, 69, 0.5);
  color: #ffff;
`;

const ShareBtn = styled(AllBtn)`
  width: 180px;
  height: 28px;
  color: #ffffff;
  background: #6810f2;
  border-radius: 12px;

  font-family: "SF Pro Text";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 115.9%;
  letter-spacing: -0.02em;
`;

function NotificationList() {
  return (
    <>
      <EachNotification>
        <NotificationLeft>
          <img src={displayImg} alt="comment user" />
          <NotificationMiddle>
            <h5>Alan Jackson gifted you a course 🎉</h5>
            <PaymentCourse width="100%" marginLeft="0px" />
            <ButtonSection>
              {/* <ShareBtn>
                <h4>Share on socials</h4>
              </ShareBtn> */}
              <WhiteButton>
                <h4>View request</h4>
              </WhiteButton>
              <BlueBtn>
                <h4>Accept request</h4>
              </BlueBtn>
              <MarronBtn>
                <h4>Reject request</h4>
              </MarronBtn>
            </ButtonSection>
          </NotificationMiddle>
        </NotificationLeft>
        <span>2:30pm</span>
      </EachNotification>
    </>
  );
}

export default NotificationList;
