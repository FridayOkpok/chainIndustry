import React from "react";
import LogoAndName from "./orgName";
import NavCategory from "./NavCategory";
import NavSearchBar from "./NavSearchbar";
import styled from "styled-components";
import NavRightItems from "./navUserDetails";
import { Outlet } from "react-router-dom";
import Fotter from "../fotter/Fotter";
import PopUpUserMenu from "../userDetailsPopupMenu/UserPopupMenu";
import { useSelector } from "react-redux";
import UserCart from "../cart/Cart";
import PaymentSection from "../payment/payment";
import NotificationContainer from "../notificationSection/notificationContainer";

function NavBar() {
  const showPopupMenu = useSelector((store) => store.ui.onShowPopUpMenu);
  const showCart = useSelector((store) => store.ui.onShowCart);
  const showPayment = useSelector((store) => store.ui.onShowPaymentCard);
  const showNotification = useSelector(
    (store) => store.ui.onShowUserNotification
  );

  return (
    <>
      <NavWrapper>
        <div className="col1">
          <LogoAndName />
          <NavCategory />
          <NavSearchBar />
        </div>
        <NavRightItems />
      </NavWrapper>
      {showPopupMenu && <PopUpUserMenu />}
      {showCart && <UserCart />}
      {showPayment && <PaymentSection />}
      {showNotification && <NotificationContainer />}
      <main>
        <Outlet />
      </main>
      <Fotter />
    </>
  );
}

export default NavBar;

const NavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  padding: 20px;
  gap: 30px;

  font-family: "SF Pro Text";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  letter-spacing: -0.03em;

  color: #ffffff;

  & .col1 {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 30px;
  }
`;
