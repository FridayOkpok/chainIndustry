import styled from "styled-components";
import chainlogo from "../../assets/chainlogo.svg";
import ham from "../../assets/ham.svg";
import search from "../../image/searchicon.png";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  function onGoToLandingPageFn() {
    navigate("/landingpage");
  }
  return (
    <>
      <Wrapper>
        <img
          src={chainlogo}
          alt="logo"
          className="logo"
          onClick={onGoToLandingPageFn}
        />
        <div className="mobile">
          <img src={search} alt="search-icon" />
          <img src={ham} alt="ham" />
        </div>
        <div className="desktop">
          <p>Explore Courses</p>
          <div className="search">
            <input type="text" placeholder="Search Courses" />
          </div>
          <div className="btn-container">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "notactive")}
            >
              <h5>Start Tutoring</h5>
            </NavLink>
            <NavLink
              to="/login"
              className={({ isActive }) => (isActive ? "active" : "notactive")}
            >
              <h5>Log In</h5>
            </NavLink>
            <NavLink
              to="/signup"
              className={({ isActive }) => (isActive ? "active" : "notactive")}
            >
              <h5 className="sign-up">Sign Up</h5>
            </NavLink>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: min(90%, 85rem);
  margin-inline: auto;
  margin-inline: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 3rem;

  .logo {
    width: 10rem;
  }

  .mobile {
    display: flex;
    column-gap: 1.5rem;
    align-items: center;
  }

  .desktop {
    display: none;
  }

  .search {
    width: 26%;
    padding-block: 1rem;
    padding-left: 1rem;
    border: 1px solid rgba(173, 125, 249, 0.1);
    border-radius: 0.8rem;
  }

  input {
    background-color: transparent;
    border: none;
  }

  .btn-container {
    display: flex;
    justify-content: center;
    gap: 0.8rem;
  }

  .sign-up {
    border: none;
    border-radius: 0.8rem;
    border: 1px solid rgba(173, 125, 249, 0.1);
  }

  h5 {
    text-decoration: none;
    padding: 1rem 1.5rem;
    color: #fff;
    background-color: transparent;
    border: 1px solid rgba(173, 125, 249, 0.1);
    border-radius: 0.8rem;
    cursor: pointer;
    text-decoration: none;
  }

  @media screen and (min-width: 900px) {
    .mobile {
      display: none;
    }
    .desktop {
      width: 80%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: whitesmoke;
      font-size: 1rem;
      font-weight: 400;
    }
  }
`;

export default Navbar;
