import React from 'react'
import styled from "styled-components";
import Navbar from './Navbar';
const Header = () => {
  return (
    <Wrapper>
        <Navbar/>
        <div className='fixed'></div>
        <div className='header-content'>
            <div className='text'>
                <h1>Learn from the best, become the best</h1>
                <p>We have curated courses to get you started and make you standout in your career.</p>
            </div>
            <div className='btn-container'>
                <button className='sign-up'>Start Learning For Free</button>
                <button className='log-in'>Log In</button>
            </div>
        </div>
       
    </Wrapper>
  )
}

export default Header;
const Wrapper = styled.header`
    color: #fff;
    .log-in{
        background-color: rgba(222, 53, 97, 0.1);
        border: none;
    }
    .header-content{
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 4rem;
        padding-block: 6rem 8rem;
    }
    .btn-container{
        display: flex;
        justify-content: center;
        gap: .5rem;
    }
    button {
        padding: 1rem 1.5rem;
        color: #fff;
        background-color: transparent;
        border: 1px solid rgba(173, 125, 249, 0.1);
        border-radius: .8rem;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
    }
    .sign-up{
        background-color: #DE3561;
        border: none;
    }
    .text{
        font-family: 'SF Pro Text', sans-serif;
        font-weight: 800;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 1rem;
        width: min(90%,45rem);
        margin-inline: auto;
        text-align: center;
    }
    .text h1{
        font-size: 3rem;
        font-family: 'SF Pro Text', sans-serif;
        font-style: normal;
        font-weight: 800;
        line-height: 4rem;
    }
    .text p{
        font-size: 1.5rem;
        font-weight: 500;
        font-family: 'SF Pro Text';
        font-style: normal;
        font-weight: 500;
        line-height: 2.3rem;
        text-align: center;
        letter-spacing: -0.03em;
    }
    @media screen and (min-width: 950px) {
        .text h1{
            font-size: 4rem;
        }
        .text p{
        padding-inline: 7rem;
        }
    }
`