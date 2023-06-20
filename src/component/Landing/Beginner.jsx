import styled from "styled-components";
import Smallcard from "./Smallcard";
import bookholding from '../../assets/bookholding.svg'
import speaker from "../../image/volume-high.png";
import design from "../../image/design.png";
import web from "../../image/web3.png";
import animation from "../../image/animation.png";
import ProjectManagement from "../../image/project-management.png";
import Developement from "../../image/development.png";
import Blogging from "../../image/blogging.png";

const Beginner = () => {
  const data = [
    {
      image: web,
      text: "Web 3",
      course: "10 courses",
    },
    {
      image: animation,
      text: "Animation",
      course: "10 courses",
    },
    {
      image: speaker,
      text: "Growth/Digital marketing",
      course: "10 courses",
    },
    {
      image: design,
      text: "Design",
      course: "10 courses",
    },
    {
      image: ProjectManagement,
      text: "Project Management",
      course: "10 courses",
    },
    {
      image: Developement,
      text: "Development",
      course: "Coming soon✨",
    },
    {
      image: Blogging,
      text: "Blogging",
      course: "10 courses",
    },
    {
      image: Blogging,
      text: "Blogging",
      course: "10 courses",
    },
  ]
  return (
    <Wrapper>
      {/* begginer */}
      <div className="beginner">
        <div className="grid">
          <h2>Sign up for our <span>beginner courses</span> and pay nothing</h2>
          <p>Start your learning journey for free with all our beginner courses! From programming to design, our courses cover the essentials to get you started</p>
        </div>
        <button>Explore Beginner courses</button>
      </div>
      {/* category */}
      <div className="category">
        <h2>Categories</h2>
        <div>
          {data.map((el,index)=>{
            return (
              <Smallcard text={el.text} image={el.image} course={el.course} key={index}/>
            )
          })}
        </div>
      </div>
      {/* div with bookholding image */}
      <div className="holdbookdiv">
        <div className="holdbookimage">
          <img src={bookholding} alt="bookholding" />
        </div>
        <div className="text">
          <h2>Are you a professional? Become a tutor.</h2>
          <p>As a tutor you stand to gain this this and that. A lot of things actually, whoever will fix the content will let you know, thanks!</p>
          <button>Become a tutor</button>
        </div>
      </div>
      {/* join our community*/}
      <div className="community">
        <h2>Join our Chaindusty community</h2>
        <p>Join our active community and enjoy your experience with other users participating in DoToEarn</p>
        <button>Join our community</button>
      </div>
    </Wrapper>
  )
}

export default Beginner;

const Wrapper = styled.section`
color:#fff;
width: 80%;
margin-inline: auto;
padding-top: 4rem;
padding-bottom: 6rem;
display: flex;
flex-direction: column;
gap: 7rem;
/* background-color: yellow; */
  .beginner{
    width: min(25rem,90%);
    margin-inline: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    text-align: center;
  }
  p{
      font-size: 1.1rem;
      font-weight: 400;
      font-family: 'SF Pro Text', sans-serif;
      font-style: normal;
      line-height: 1.6rem;
      letter-spacing: -0.025em;
    }
  .grid{
    display: grid;
    gap: 1rem;
    span{
        color: rgba(248, 129, 160, 1);
    }
  }
  h2{
      font-weight: 800;
      font-size: 2rem;
      font-family: 'SF Pro Text', sans-serif;
      font-style: normal;
      line-height: 3rem;
      letter-spacing: -0.055em;
  }
  .category{
    text-align: center;
    & > div{
      /* display: flex;
      flex-wrap: wrap; */
      display: grid;
      grid-template-columns: repeat(auto-fit,minmax(13rem,1fr));
      gap: 1rem;
      padding-top: 2rem;
      /* background-color: pink; */
    }
  }

  button{
    padding: 1rem 2rem;
    font-size: 1rem;
    font-weight: 600;
    border: none;
    color: #fff;
    background-color:rgba(222, 53, 97, 1);
    border-radius: 1rem;
  }
  .holdbookdiv{
    background-color: rgba(23, 3, 55, 1);
    /* height: 32rem; */
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    gap: 2rem;
    padding-inline: 3rem;
    margin-top: 5rem;
    padding-block-end: 2rem;
    border-radius: 2rem;
    button{
      width: 13rem;
    }
    .text{
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  }
  .holdbookimage{
    height: 20rem;
    margin-top: -7rem;
    img{
      height: 100%;
      object-fit: cover;
    }
  }
  .community{
    text-align: center;
    margin-inline: auto;
    display: grid;
    place-items: center;
    gap: 1rem;
    p{
      width: 65%;
    }
  }
  @media screen and (min-width: 950px) {
    .holdbookdiv{
      height: 23rem;
      padding-inline: 3rem 0;
      flex-direction: row-reverse;
      padding-block-end: 0;
      .text{
        width: 40%;
        gap: 1.5rem;
      }
    }
    .holdbookimage{
    height: 30rem;
    img{
      height: 100%;
      object-fit: cover;
    }
  }
  }
`