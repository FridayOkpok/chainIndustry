import styled from "styled-components";
import Slide from "./Slide";
const Recommendation = () => {
  return (
    <Wrapper>
        <h2>We recommend you this courses</h2>
        <Slide/>
        <p>Explore all courses</p>
    </Wrapper>
  )
}

export default Recommendation;

const Wrapper = styled.section`
  color: #fff;
  /* height: 100vh; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin-inline: auto;
  h2{
    width: min(80%,25rem);
    font-size: 2rem;
    font-weight: 800;
    text-align: center;
    font-family: 'SF Pro Text', sans-serif;
    font-style: normal;
    line-height: 3rem;
    letter-spacing: -0.055em;
  }
  & > p{
    color: rgba(237, 90, 128, 1);
    font-weight: 600;
    font-size: 1.2rem;
    font-family: 'SF Pro Text', sans-serif;
    font-style: normal;
    line-height: 1.8rem;
    letter-spacing: -0.05em;
  }
`