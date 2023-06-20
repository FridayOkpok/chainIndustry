import styled from 'styled-components';
import '../../index.css'
import lockicon from "../../assets/lock.svg"
const RecoverPassword = () => {
    return (
        <Wrapper>
            <div className='fixed'></div>
            <div className='fixed2'></div>
            <div className='main'>
                <img src={lockicon} alt="lock icon"  className='svg'/>
                <div>
                    <h2>Enter Recovery Code</h2>
                    <p>Enter the recovery code sent to user@email.mail</p>
                </div>
                <div className='gap'>
                    <div className='circle-container'>
                        <div className='circle'></div>
                        <div className='circle'></div>
                        <div className='circle'></div>
                        <div className='circle'></div>
                        <div className='circle'></div>
                        <div className='circle'></div>
                    </div>
                    <p>Didn’t get Email? Resend Code</p>
                    <p>Change email</p>
                </div>
            </div>
        </Wrapper>
    )
}

export default RecoverPassword;

const Wrapper = styled.div`
padding-block: 1rem 8rem;
width: min(90%,85rem);
margin-inline: auto;
color: #fff;
position: relative;
z-index: 1;
    h2{
        text-align: center;
        font-family: 'SF Pro Text';
        font-style: normal;
        font-weight: 600;
        font-size: 32px;
        line-height: 140%;
    }
   .main{
        width: min(400px,700px);
        margin-inline: auto;
        display: flex;
        flex-direction: column;
        min-height: 50vh;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        .svg{
            width: 3rem;
        }
        p{
            text-align: center;
            color: #fff;
            font-family: 'SF Pro Text';
            font-style: normal;
            font-weight: 400;
            font-size: 1rem;
            line-height: 150%;
        }
    }
    .circle-container{
        display: flex;
        justify-content: center;
        gap: .7rem;
    }
    .circle{
        height: 3rem;
        width: 3rem;
        background: rgba(173, 125, 249, 0.1);
        border: 1px solid rgba(104, 16, 242, 0.15);
        border-radius: 50%;
    }
    .gap{
        display: grid;
        gap: 1rem;
    }
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