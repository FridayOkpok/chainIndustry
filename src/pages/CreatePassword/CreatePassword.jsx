import styled from 'styled-components';
import '../../index.css'
const Login = () => {
    return (
        <Wrapper>
            <div className='fixed'></div>
            <div className='fixed2'></div>
            <div className='main'>
                <div>
                    <h2>Create Password</h2>
                    <p>Create a your new password</p>
                </div>
                <div className='inputs'>
                    <div className='input-container'>
                        <input type="password" placeholder='Enter Password' />
                    </div>
                    <div className='input-container'>
                        <input type="password" placeholder='Confirm password' />
                    </div>
                </div>
                <button className='create'>Proceed to Log in</button>
            </div>
        </Wrapper>
    )
}

export default Login;

const Wrapper = styled.div`
padding-block: 1rem 8rem;
display: flex;
flex-direction: column;
gap: 5rem;
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
        /* align-items: center; */
        gap: 1.5rem;
        p{
            text-align: center;
            color: #fff;
            font-family: 'SF Pro Text';
            font-style: normal;
            font-weight: 400;
            font-size: 1rem;
            line-height: 150%;
        }
        .inputs{
            display: grid;
            place-items: center;
            gap: .5rem;
            p{
                justify-self: end;
            }
        }
        .input-container{
            width: 100%;
            margin-inline: auto;
            height: 3.5rem;
            background-color: rgba(173, 125, 249, 0.1);
            border-radius: .8rem;
            padding-inline: 1rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        input{
            width: 85%;
            height: 80%;
            border: none;
            background-color: transparent;
            outline: none;
            color: #fff;
        }
        button {
            width: 100%;
            margin-inline: auto;
            padding: 1rem 1.5rem;
            color: #fff;
            background-color: transparent;
            border: 1px solid rgba(173, 125, 249, 0.1);
            border-radius: .8rem;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
        }
        .create{
            background-color: rgba(222, 53, 97, 1);
        }
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