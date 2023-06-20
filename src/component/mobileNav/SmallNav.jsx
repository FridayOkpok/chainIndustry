import styled from "styled-components";
import { Link } from "react-router-dom";
const SmallNav = () => {
  return (
    <Wrapper>
        <div className='fixed'></div>
        <div className='fixed2'></div>
        <Link to="/landingpage">Home</Link>
        <Link to="#">About us</Link>
        <Link to="#">Our Services</Link>
        <Link to="#">Academy</Link>
        <Link to="#">Blog</Link>
        <div>
            <button>Start tutoring</button>
            <button>Log in</button>
            <button>Sign up</button>
        </div>
    </Wrapper>
  )
}

export default SmallNav;

const Wrapper = styled.div`
    position: fixed;
    background-color: rgba(10, 1, 24, 1);
    width: 100%;
    height: 100vh;
`