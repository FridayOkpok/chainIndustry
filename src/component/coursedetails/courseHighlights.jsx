import React from "react";
import styled from "styled-components";

const HighLIghtContainer = styled.div`
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 32px;
  gap: 10px;

  width: 529px;
  height: 411px;

  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 24px;

  & p {
    width: 465px;
    height: 300px;

    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 155.84%;
    letter-spacing: -0.025em;

    color: #c3bfca;
  }
`;

const HighLightHeader = styled.div`
  width: 115px;
  height: 35px;

  font-family: "SF Pro Text";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 145.34%;
  /* identical to box height, or 35px */

  letter-spacing: -0.03em;

  color: #ffffff;
`;

function HighlightsSection() {
  return (
    <HighLIghtContainer>
      <HighLightHeader>Highlights</HighLightHeader>
      <p>
        Egestas praesent malesuada integer purus tellus vitae. Quisque placerat
        amet quis quam sagittis nec sollicitudin enim. <br />
        Eget ultricies euismod aliquam scelerisque ullamcorper odio sed rhoncus
        condimentum. <br />
        Phasellus tellus sapien maecenas volutpat. <br />
        Ultricies vel gravida ullamcorper arcu urna suspendisse vestibulum
        euismod id.
        <br /> Lectus arcu aliquet mauris facilisis pellentesque orci ac
        tincidunt fames.
        <br /> Aliquam vel ac sed netus duis risus ac neque a. A varius aliquam
        porta urna tortor vulputate sem.
      </p>
    </HighLIghtContainer>
  );
}

export default HighlightsSection;
