import styled from "styled-components";
import Navbar from "../../component/Landing/Navbar";
import Footer from "../../component/Landing/Footer";
import "../../index.css";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  function onGoToLoginPageFn() {
    navigate("/login");
  }
  return (
    <>
      <Navbar />
      <Wrapper>
        <div className="fixed"></div>
        <div className="fixed2"></div>
        <div className="main">
          <div className="join">
            <p>
              Join Chaindustry Academy <span>start learning.</span>
            </p>
          </div>
          <div className="inputs">
            <div className="input-container">
              <input type="text" placeholder="Email Address" />
            </div>
            <div className="input-container">
              <input type="password" placeholder="Create Password" />
            </div>
            <div className="input-container">
              <input type="password" placeholder="Confirm Password" />
            </div>
          </div>
          <button className="create">Create Account</button>
          <p>Or</p>
          <button className="google">Sign Up with Google</button>
          <p onClick={onGoToLoginPageFn}> Already have an account? Log In</p>
        </div>
        <p>By signing in you agree to our Terms of Service</p>
      </Wrapper>
      <Footer />
    </>
  );
};

export default Signup;

const Wrapper = styled.div`
  padding-block: 1rem 8rem;
  display: flex;
  flex-direction: column;
  gap: 5rem;
  width: min(90%, 85rem);
  margin-inline: auto;
  color: #fff;
  position: relative;
  z-index: 1;

  .main {
    width: min(400px, 700px);
    margin-inline: auto;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    .inputs {
      display: grid;
      place-items: center;
      gap: 0.5rem;
    }
    .input-container {
      width: 100%;
      /* background-color: red; */
      margin-inline: auto;
      height: 3.5rem;
      background-color: rgba(173, 125, 249, 0.1);
      border-radius: 0.8rem;
      padding-inline: 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    input {
      width: 85%;
      height: 80%;
      border: none;
      background-color: transparent;
      outline: none;
      color: #fff;
    }
    button {
      width: 100%;
      margin-inline: auto;
      padding: 1rem 1.5rem;
      color: #fff;
      background-color: transparent;
      border: 1px solid rgba(173, 125, 249, 0.1);
      border-radius: 0.8rem;
      cursor: pointer;
    }
    p {
      align-self: center;
      color: #fff;
    }
    .create {
      background-color: rgba(222, 53, 97, 1);
    }
    .google {
      background-color: #fff;
      color: rgba(43, 39, 47, 1);
    }
    .join {
      width: 55%;
      /* background-color: yellow; */
      text-align: center;
      margin-inline: auto;
      font-weight: 500;
      span {
        font-size: 1.5rem;
        font-weight: 600;
      }
    }
  }
  .fixed {
    position: absolute;
    width: 8rem;
    left: 0;
    top: 8rem;
    height: 100vh;
    background-color: rgba(104, 16, 242, 1);
    z-index: -1;
    border: 100px solid #6810f2;
    filter: blur(241.5px);
  }
  .fixed2 {
    position: absolute;
    width: 7rem;
    right: 0;
    top: 0;
    height: 70vh;
    background-color: rgba(222, 53, 97, 0.4);
    z-index: -1;
    border: 128px solid rgba(222, 53, 97, 0.4);
    filter: blur(241.5px);
  }
`;
