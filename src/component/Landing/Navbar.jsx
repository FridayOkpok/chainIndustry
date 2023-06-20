import styled from "styled-components";
import chainlogo from "../../assets/chainlogo.svg";
import ham from "../../assets/ham.svg";
import search from "../../image/searchicon.png"
import SmallNav from "../mobileNav/SmallNav";
const Navbar = () => {
  return (
    <>
        {/* <SmallNav/> */}
        <Wrapper>
            <img src={chainlogo} alt="logo" className='logo'/>
            <div className='mobile'>
                <img src={search} alt="search-icon" />
                <img src={ham} alt="ham" />
            </div>
            <div className='desktop'>
                <p>Explore Courses</p>
                <div className='search'>
                    <input type="text" placeholder='Search Courses' />
                </div>
                <div className='btn-container'>
                    <button>Start Tutoring</button>
                    <button>Log In</button>
                    <button className='sign-up'>Sign Up</button>
                </div>
            </div>
        </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
        width: min(90%,85rem);
        margin-inline: auto;
        margin-inline: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-block: 3rem;
    .logo{
        width: 10rem;
    }
    .mobile{
        display: flex;
        column-gap: 1.5rem;
        align-items: center;
    }
    .desktop{
        display: none;
    }
    .search{
        width: 26%;
        padding-block: 1rem;
        padding-left: 1rem;
        border: 1px solid rgba(173, 125, 249, 0.1);
        border-radius: .8rem;
    }
    input{
        background-color: transparent;
        border: none;
    }
    .btn-container{
        display: flex;
        justify-content: center;
        gap: .8rem;

    }
    .sign-up{
        background-color: #DE3561;
        border: none;
    }
    button {
        padding: 1rem 1.5rem;
        color: #fff;
        background-color: transparent;
        border: 1px solid rgba(173, 125, 249, 0.1);
        border-radius: .8rem;
        cursor: pointer;
    }
    @media screen and (min-width: 900px) {
    .mobile{
        display: none;
    }
    .desktop{
        width: 80%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: whitesmoke;
        font-size: 1rem;
        font-weight: 400;
    }
    }
`

export default Navbar