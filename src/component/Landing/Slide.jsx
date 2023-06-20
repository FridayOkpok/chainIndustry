import styled from 'styled-components';
import Card from './Card';

const Slide = () => {
  return (
    <Wrapper>
       <Card/>
       <Card/>
       <Card/>
       <Card/>
    </Wrapper>
  )
}

export default Slide;

const Wrapper = styled.div`
padding-block: 4rem;
display: flex;
scroll-behavior: auto;
overflow-x: scroll;
column-gap: 2rem;
width: 100%;
&::-webkit-scrollbar{
    display: none;
}
.slide{
    width: 16rem;
    flex-shrink: 0;
    background-color: rgba(173, 125, 249, 0.1);
    border-radius: 1rem;
}
img{
    display: block;
    width: 100%;
    object-fit: cover;
}  
.text{
    padding: 1rem;
    display: grid;
    gap: 1rem;
}
.text > p{
    font-size: 1.2rem;
}
.text > div{
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: .9rem;
}
.btn-like{
    background-color: rgba(173, 125, 249, 0.1);
    color: rgba(169, 163, 179, 1);
    padding: .3rem .5rem;
    border-radius: 13rem;
}
.price{
    font-size: 1.3rem;
}
`