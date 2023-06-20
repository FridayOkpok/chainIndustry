import React from "react";
import styled from "styled-components";
import logo from "../../image/logoImg.png";
import twitter from "../../image/Twitter.png";
import telegram from "../../image/Telegram.png";
import Discord from "../../image/Discord.png";
import SubscribeComponent from "./SubscribeForm";
import send from "../../image/send.png";
import { BsArrowUp } from "react-icons/bs";

const FotterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 533px;
  padding: 20px;
  border-top: 1px solid
    linear-gradient(
      360deg,
      rgba(44, 5, 102, 0.815) -7.6%,
      rgba(43, 5, 102, 0) 100%
    );

  @media screen and (max-width: 975px) {
    flex-direction: column;
    height: auto;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 50px;
  }

  background: linear-gradient(
    360deg,
    rgba(43, 5, 102, 0.5) -7.6%,
    rgba(43, 5, 102, 0) 100%
  );
`;

const LogoAndForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: auto;
  gap: 30px;
  margin-left: 40px;
`;
const Logo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 39.33px;
  display: flex;
  gap: 20px;

  & h4 {
    color: rgba(255, 255, 255, 1);
  }
`;

const UnorderedListStyle = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 32px;
  margin-left: 27px;
  height: 191px;

  & li {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    list-style: none;
    width: 101px;
    height: 24px;

    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: -0.02em;

    color: #ffffff;
    cursor: pointer;
  }
`;

const SocialFlatFormAreat = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
  margin-right: 20px;
  justify-content: flex-start;
  height: 200px;
  @media screen and (max-width: 975px) {
    margin-right: 0;
    margin-left: 20px;
  }
  & h6 {
    width: 224px;
    height: 24px;

    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: -0.02em;

    color: #ffffff;
  }
`;

const SocialFlatForm = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  & div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    background: #de3561;
    border-radius: 37px;
    color: white;

    cursor: pointer;
  }
`;

const AllSocials = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 10.5px;
  width: 150px;

  @media screen and (max-width: 975px) {
    justify-content: center;
    margin-left: 40px;
  }
`;

const SocialMediaIcon = styled.div`
  width: 32px;
  height: 32px;

  & img {
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
`;

function Fotter() {
  //
  function onScrollUpHandeler() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <FotterContainer>
      <LogoAndForm>
        <Logo>
          <img src={logo} alt="Logo" />
          <h4> Chaindustry</h4>
        </Logo>
        <SubscribeComponent />
      </LogoAndForm>
      <UnorderedListStyle>
        <li>About us </li>
        <li>
          Blog <img src={send} alt="arrow" />
        </li>
        <li>Team</li>
        <li>FAQs</li>
      </UnorderedListStyle>
      <UnorderedListStyle>
        <li>Terms of Use</li>
        <li>Privacy Policy</li>
      </UnorderedListStyle>
      <SocialFlatFormAreat>
        <SocialFlatForm>
          <AllSocials>
            <SocialMediaIcon>
              <img src={Discord} alt="twitter" />
            </SocialMediaIcon>
            <SocialMediaIcon>
              <img src={twitter} alt="twitter" />
            </SocialMediaIcon>
            <SocialMediaIcon>
              <img src={telegram} alt="twitter" />
            </SocialMediaIcon>
          </AllSocials>
          <div onClick={onScrollUpHandeler}>
            <BsArrowUp className="icon" />
          </div>
        </SocialFlatForm>
        <h6>Copyright © 2022 Chaindustry</h6>
      </SocialFlatFormAreat>
    </FotterContainer>
  );
}

export default Fotter;
