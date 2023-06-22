import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Landing/Footer";
import logo from "../../assets/chainlogo.svg";
import styled from "styled-components";
const Layout = () => {
  return (
    <Wrapper>
      <div className="img">
        <img src={logo} alt="chaindustry" className="img" />
      </div>
      <Outlet />
      <Footer />
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.main`
  width: 100%;
  .img {
    width: 100%;
    padding: 1.5rem 0;
    display: flex;
    justify-content: center;
    img {
      width: 10rem;
      text-align: center;
    }
  }
`;
