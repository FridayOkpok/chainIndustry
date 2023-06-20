import styled from "styled-components";
const Smallcard = ({text,course,image}) => {
    // console.log(text);
  return (
    <Wrapper>
        <img src={image} alt="" />
        <p>{text}</p>
        <div>
            <p>10 courses</p>
        </div>
    </Wrapper>
  )
}

export default Smallcard

const Wrapper = styled.div`
    /* width: 15rem; */
    height: 13rem;
    border-radius: 1.5rem;
    background-color: rgba(23, 3, 53, 1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`