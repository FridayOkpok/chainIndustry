import React from "react";
import styled from "styled-components";
import authorDp from "../../image/authorDp.png";
import { DiscriptionContainer, DiscriptionHeader } from "./courseDiscription";

const AuthorContainer = styled(DiscriptionContainer)`
  gap: 35px;
  height: auto;
`;

const AuthorDetails = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  /* width: 90%; */
`;

const AuthorImage = styled.div`
  background-image: url(${(props) => props.authorImg});
  background-position: 100% 100%;
  background-size: cover;
  width: 80px;
  height: 80px;

  border-radius: 50%;
`;

const OtherAutorDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;
  gap: 12px;

  width: 425px;
  height: 168px;

  & p {
    width: 425px;
    height: 125px;

    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 155.84%;
    letter-spacing: -0.025em;

    color: #c3bfca;
  }
`;

function AboutAuthor() {
  return (
    <AuthorContainer>
      <DiscriptionHeader>About Instructor</DiscriptionHeader>
      <AuthorDetails>
        <AuthorImage authorImg={authorDp}></AuthorImage>
        <OtherAutorDetails>
          <DiscriptionHeader>Victor Adebisi</DiscriptionHeader>
          <p>
            Egestas praesent malesuada integer purus tellus vitae. Quisque
            placerat amet quis quam sagittis nec sollicitudin enim. Eget
            ultricies euismod aliquam scelerisque ullamcorper odio sed rhoncus
            condimentum. Phasellus tellus sapien maecenas volutpat.
          </p>
        </OtherAutorDetails>
      </AuthorDetails>
    </AuthorContainer>
  );
}

export default AboutAuthor;
