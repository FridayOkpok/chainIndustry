import React, { useState } from "react";
import styled from "styled-components";
import { BackDrop, CardComponent } from "../../style/Style.styled";
import { useDispatch } from "react-redux";
import { userInterfaceAction } from "../../store/userInterface";
import { useNavigate } from "react-router-dom";

function PopUpUserMenu() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [menuItems, setMenuItems] = useState([
    "My Courses",
    "My Favourites",
    "Account Settings",
    "Log out",
  ]);

  function onHideUserMenu() {
    dispatch(userInterfaceAction.setShowPopupMenuToFalse());
  }

  return (
    <>
      <BackDrop onClick={onHideUserMenu}></BackDrop>
      <UserProfilePopUpWrapper>
        <FirstContainer>
          <span>VN</span>
          <UserName>
            <h4>Victor Adebisi</h4>
            <h6>View Profile</h6>
          </UserName>
        </FirstContainer>
        <SecondContainer>
          <CustomCardComponent>
            <TopItem>
              <h5>Referrals</h5>
              <h6>View Referrals</h6>
            </TopItem>
            <BottomItem>
              <h3>₦2,000</h3>
              <h4>$3.42</h4>
            </BottomItem>
          </CustomCardComponent>
          <ThirdContainer>
            {menuItems.map((element, index) => {
              function onGoToSelectedItemHandelerFn() {
                if (element === `Log out`) {
                  dispatch(userInterfaceAction.setShowUserPopupMenu());

                  navigate("/landingpage");
                }
              }
              return (
                <OtherCardComponent
                  key={index}
                  onClick={onGoToSelectedItemHandelerFn}
                >
                  <h5>{element}</h5>
                </OtherCardComponent>
              );
            })}
          </ThirdContainer>
        </SecondContainer>
      </UserProfilePopUpWrapper>
    </>
  );
}

export default PopUpUserMenu;
const UserProfilePopUpWrapper = styled.div`
  position: absolute;
  top: 88px;
  right: 10px;
  z-index: 10;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 354px;
  height: auto;

  /* Primary/Purple 90 */

  background: #170335;
  border-radius: 24px;
`;

const FirstContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  margin: 22px 20px auto;
  gap: 18px;

  & span {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;

    background: #6810f2;
    border-radius: 200px;
    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: -0.03em;
    color: #ffffff;
  }
`;

const SecondContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 24px;
  margin: 34px;

  width: 95%;
  height: 368px;
`;

const ThirdContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 10px;
  width: 100%;
`;

const UserName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0px;
  gap: 4px;

  height: 58px;

  & h4 {
    height: 30px;
    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 125%;

    letter-spacing: -0.05em;

    color: #ffffff;
  }

  & h6 {
    height: 24px;

    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: -0.03em;
    cursor: pointer;
    color: #f881a0;
  }
`;

const CustomCardComponent = styled(CardComponent)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px 24px;
  gap: 10px;
  justify-content: space-between;

  width: 85%;
  height: 102px;

  background: rgba(104, 16, 242, 0.1);
  border-radius: 12px;
`;

const OtherCardComponent = styled(CardComponent)`
  width: 85%;
  padding: 16px 24px;
  border-radius: 12px;
  cursor: pointer;

  & h5 {
    width: 128px;
    height: 24px;

    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: -0.02em;

    color: #ffffff;
  }
`;

const TopItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;

  & h5 {
    width: 68px;
    height: 24px;

    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;

    letter-spacing: -0.02em;

    color: #ffffff;
  }

  & h6 {
    width: 108px;
    height: 24px;
    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    text-align: right;
    letter-spacing: -0.02em;

    color: #f881a0;
    cursor: pointer;
  }
`;

const BottomItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  & h3 {
    width: 83px;
    height: 36px;

    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 150%;

    letter-spacing: -0.045em;
    color: #ffffff;
  }

  & h4 {
    width: 45px;
    height: 24px;

    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: -0.045em;

    color: #e5e3e8;
  }
`;
