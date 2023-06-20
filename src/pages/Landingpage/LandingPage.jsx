import '../../index.css'
import styled from 'styled-components'
import Header from '../../component/Landing/Header'
import Recommendation from '../../component/Landing/Recommendation'
import Beginner from '../../component/Landing/Beginner'
import Career from '../../component/Landing/Career'
import Footer from '../../component/Landing/Footer'

const LandingPage = () => {
  return (
    < Wrapper>
      <div className='fixed'></div>
      <div className='fixed2'></div>
      <Header/>
      <Recommendation/>
      <Career/>
      <Beginner/>
      <Footer/>
    </Wrapper>
  )
}

export default LandingPage;
const Wrapper = styled.div`
position: relative;
z-index: 1;
  .fixed{
    position: absolute;
    width: 8rem;
    left: 0;
    top: 8rem;
    height: 100vh;
    background-color: rgba(104, 16, 242, 1);
    z-index: -1;
    border: 100px solid #6810F2;
    filter: blur(241.5px);
  }
  .fixed2{
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
`