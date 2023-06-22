import styled from "styled-components";
import chaindustry from "../../assets/chaindustry.svg";
import logo from "../../image/logoImg.png";
import twitter from "../../image/Twitter.png";
import telegram from "../../image/Telegram.png";
import Discord from "../../image/Discord.png";
import send from "../../image/send.png";
import { BsArrowUp } from "react-icons/bs";

const Footer = () => {
  //
  function onScrollUpHandeler() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <Wrapper>
      <div className="footbody">
        <div className="main">
          <div className="first">
            <img src={chaindustry} alt="" />
            <div className="box">
              <p>Subscribe now for Updates</p>
              <div>
                <input type="text" placeholder="Email" />
                <img src={send} alt="send-icon" />
              </div>
            </div>
          </div>
          <div className="sec">
            <p>About us</p>
            <p>Blog</p>
            <p>Team</p>
            <p>FAQs</p>
          </div>
          <div className="sec">
            <p>Terms of Use</p>
            <p>Privacy Policy</p>
          </div>
          <div className="third">
            <img src={Discord} alt="discord-social" />
            <img src={twitter} alt="twitter-social" />
            <img src={telegram} alt="telegram-social" />
          </div>
          <BsArrowUp className="icon" onClick={onScrollUpHandeler} />
          <div className="last">
            <p>Copyright © 2022 Chaindustry</p>
            <BsArrowUp className="icon" />
          </div>
        </div>
        <p>Copyright © 2022 Chaindustry</p>
      </div>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.footer`
  color: #fff;
  padding-block: 3rem;
  .footbody {
    width: 80%;
    width: min(90%, 85rem);
    margin-inline: auto;
  }
  .main {
    display: grid;
    gap: 2.5rem;
  }
  .first {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  img {
    width: 10rem;
  }
  .box {
    background-color: rgba(173, 125, 249, 0.1);
    padding: 3rem 2rem;
    width: 18rem;
    height: 13rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 1rem;
    p {
      font-size: 1.5rem;
    }
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
    }
    img {
      width: 1.2rem;
      height: 1.2rem;
      padding: 0.2rem;
      color: rgba(255, 255, 255, 1);
      background-color: #de3561;
      border-radius: 50%;
      transform: translate(90deg);
    }
  }
  input {
    background-color: transparent;
    border: none;
    outline: none;
    border-bottom: 1px solid rgba(162, 162, 185, 1);
    color: #fff;
    padding-block-end: 1rem;
  }
  .sec {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  .footbody > p {
    display: none;
  }
  .third {
    height: 1.5rem;
    width: 6rem;
    display: flex;
    justify-content: space-between;
    img {
      width: 1.5rem;
      cursor: pointer;
    }
  }
  .icon {
    color: rgba(255, 255, 255, 1);
    background-color: #de3561;
    border-radius: 50%;
    width: 1.2rem;
    height: 1.2rem;
    padding: 0.2rem;
    display: none;
  }
  .last {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .icon {
      display: block;
    }
  }
  @media screen and (min-width: 900px) {
    background: linear-gradient(rgba(43, 5, 102, 0), rgba(43, 5, 102, 0.5));
    .main {
      display: flex;
      justify-content: space-between;
    }
    .last {
      display: none;
    }
    .footbody > p {
      display: block;
      text-align: end;
    }
    .icon {
      display: block;
    }
    .last {
      .icon {
        display: none;
      }
    }
  }
`;
