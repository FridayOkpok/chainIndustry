import React, { useState } from "react";
import styled from "styled-components";
import Review from "../../image/authorDp.png";
import { BsStarFill } from "react-icons/bs";

const ReviewContentContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  padding: 10px;
  gap: 10px;
  overflow-x: scroll;
  height: 348px;
  width: 98%;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const EachReviewStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px;
  gap: 10px;

  width: 387px;
  height: 248px;

  background: rgba(173, 125, 249, 0.1);
  border-radius: 20px;
  cursor: pointer;

  & p {
    width: 339px;
    height: 109px;

    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 157.5%;

    letter-spacing: -0.02em;

    color: #c3bfca;
    overflow: hidden;
  }

  & h5 {
    width: 62px;
    height: 27px;

    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 193.5%;
    /* identical to box height, or 27px */

    letter-spacing: -0.02em;

    /* White */

    color: #ffffff;
  }
`;

const ReviewStyledTop = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

const UserNameSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  cursor: pointer;

  & img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  & h2 {
    width: 164px;
    height: 27px;

    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 150%;
    letter-spacing: -0.04em;

    color: #ffffff;
  }
`;

const StarSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;

  & .icon {
    width: 20px;
    height: 20px;
    color: #ffb802;
  }

  & h5 {
    width: 10px;
    height: 22px;

    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 157.5%;

    letter-spacing: -0.02em;

    color: #ffffff;
  }
`;

function EachReviewComment() {
  const [commentUsers, setCommemtUsers] = useState([
    {
      id: "1com",
      commentorName: "Samuel Okon Dav",
      star: 5,
    },
    {
      id: "2com",
      commentorName: "Nathaniel Etim ",
      star: 2,
    },
    {
      id: "3com",
      commentorName: "Efe Donatus ",
      star: 5,
    },
    {
      id: "4com",
      commentorName: "Sifon David",
      star: 3,
    },
    {
      id: "5com",
      commentorName: "Imoh etido",
      star: 5,
    },
    {
      id: "6com",
      commentorName: "Ekemini Dav",
      star: 5,
    },
  ]);

  const useComment = commentUsers.map((element) => {
    return (
      <EachReviewStyled key={element.id}>
        <ReviewStyledTop>
          <UserNameSection>
            <img src={Review} alt="review image" />
            <h2> {element.commentorName} </h2>
          </UserNameSection>
          <StarSection>
            <BsStarFill className="icon" />
            <h5>{element.star}</h5>
          </StarSection>
        </ReviewStyledTop>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, dictum
          nisi mollis arcu at senectus scelerisque convallis. Id vulputate
          auctor sed in sem et egestas ipsum. Turpis sagittis, libero enim sed
          odio facilisis. Id ipsum nisi consequat ullamcorper sem et egestas
          ipsum. Turpis sagittis, libero enim sed odio facilisis. Id ipsum nisi
          consequat ullamcorpe{" "}
        </p>

        <h5> See more </h5>
      </EachReviewStyled>
    );
  });

  return <ReviewContentContainer>{useComment}</ReviewContentContainer>;
}

export default EachReviewComment;
