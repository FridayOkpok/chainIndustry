import React from "react";
import styled from "styled-components";

export const DiscriptionContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 40px 0;
  gap: 10px;
  width: 529px;
  height: auto;
  border-radius: 24px;

  & p {
    width: 465px;
    height: auto;

    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 155.84%;
    letter-spacing: -0.025em;

    color: #c3bfca;
  }
`;

export const DiscriptionHeader = styled.div`
  height: 35px;

  font-family: "SF Pro Text";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 145.34%;
  letter-spacing: -0.03em;

  color: #ffffff;
`;

function DiscriptionSection() {
  return (
    <DiscriptionContainer>
      <DiscriptionHeader>Description</DiscriptionHeader>
      <p>
        Egestas praesent malesuada integer purus tellus vitae. Quisque placerat
        amet quis quam sagittis nec sollicitudin enim. Eget ultricies euismod
        aliquam scelerisque ullamcorper odio sed rhoncus condimentum. Phasellus
        tellus sapien maecenas volutpat. Ultricies vel gravida ullamcorper arcu
        urna suspendisse vestibulum euismod id. Lectus arcu aliquet mauris
        facilisis pellentesque orci ac tincidunt fames. Aliquam vel ac sed netus
        duis risus ac neque a. A varius aliquam porta urna tortor vulputate sem.
      </p>
    </DiscriptionContainer>
  );
}

export default DiscriptionSection;
