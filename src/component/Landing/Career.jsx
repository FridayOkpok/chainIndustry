import React from 'react'
import styled from 'styled-components';
import Slide from './Slide';
import { useState } from 'react';

const Career = () => {
  const [index,setIndex] = useState(0)
  const data = [
    {
      title: "Growth/Digital marketing",
      number:"12"
    },
    {
      title: "Motion Design",
      number:"12"
    },
    {
      title: "Graphics Design",
      number:"12"
    },
    {
      title: "LearnToEarn from Web3",
      number:"12"
    },
    {
      title: "Product Design",
      number:"12"
    },
    {
      title: "LearnToEarn from Web3",
      number:"12"
    },
    {
      title: "Product Design",
      number:"12"
    },
  ]
  return (
    <Wrapper>
        <h5>Give your career a solid start</h5>
        <div className='course'>
          {data.map((el,i)=>{
            return (
              <div className={`title ${(i === index) && 'active'}`} onClick={()=> setIndex(i)}>
                <p>{el.title}</p>
                <p>{el.number}</p>
              </div>
            )
          })}
        </div>
        <h2>Growth/Digital Marketing</h2>
        <Slide/>
    </Wrapper>
  )
}

export default Career;

const Wrapper = styled.section`
    color: #fff;
    width: 80%;
    margin-inline: auto;
    /* min-height: 100vh; */
    padding-block-start: 6rem;
    h5{
        width: 10rem;
        font-size: 1.2rem;
        font-family: 'SF Pro Text';
        font-style: normal;
        font-weight: 600;
        line-height: 1.7rem;
        letter-spacing: -0.03em;
    }
    h2{
        font-weight: 800;
        font-size: 2.5rem;
        font-family: 'SF Pro Text' sans-serif;
        font-style: normal;
        line-height: 3rem;
        letter-spacing: -0.055em;
    }
    .course{
      padding-block: 2rem;
      display: flex;
      overflow-x: scroll;
      column-gap: 1rem;
      &::-webkit-scrollbar{
          display: none;
      }
      .title{
        background-color: rgba(104, 16, 242, 0.15);
        color: rgba(224, 222, 227, 1);
        display: flex;
        min-width: fit-content;
        /* justify-content: space-between; */
        align-items: center;
        padding-inline: 1rem;
        padding-block: .5rem;
        gap: 1rem;
        border-radius: 2rem;
        cursor: pointer;
        p{
          font-family: 'SF Pro Text', sans-serif;
          font-style: normal;
          font-weight: 600;
          font-size: 1rem;
          line-height: 1.2rem;
          letter-spacing: -0.03em;
        }
       p:nth-child(2){
          background-color: #6810F2;
          border-radius: 50%;
          height: 1.5rem;
          width: 1.5rem;
          display: grid;
          place-items: center;
          color: rgba(224, 222, 227, 1);
        }
      }
      .active{
        color: rgba(25, 23, 28, 1);
        background-color: rgba(255, 255, 255, 1);
      }
    }
`