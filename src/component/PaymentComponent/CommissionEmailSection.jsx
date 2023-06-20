import React from "react";
import styled from "styled-components";
import { Spinner } from "../../style/Style.styled";

const ContainerCommission = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 10px;

  width: 425px;
  height: 228px;
  /* margin: 0 auto; */
  position: relative;

  & h4 {
    width: 425px;
    height: 20px;

    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 145.34%;
    letter-spacing: -0.03em;
    margin-left: 20px;
    color: #e0dee3;
  }
`;

const TextAreaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;

  width: 425px;
  height: 134px;
`;

const TextOfficialArea = styled.textarea`
  width: 425px;
  height: 134px;

  background: rgba(173, 125, 249, 0.1);
  border-radius: 10px;
  margin-left: 20px;
  outline: none;

  font-family: "SF Pro Text";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  letter-spacing: -0.02em;
  color: #a9a3b3;

  padding:20px

  &::-webkit-scrollbar {
    display: none;
  }
`;

const LoaderSpinnerEmail = styled(Spinner)`
  top: 20%;
`;

const InputUserDetails = styled.input`
  width: 425px;
  height: 54px;
  outline: none;
  background: rgba(173, 125, 249, 0.1);
  border-radius: 10px;
  margin-left: 20px;
  color: gray;
  font-family: "SF Pro Text";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  letter-spacing: -0.02em;

  color: #a9a3b3;

  &::placeholder {
    color: #a9a3b3;
    opacity: 1;
    transform: translateY(0);
    transition: color 0.2s, opacity 0.2s, transform 0.2s;
  }

  &:focus::placeholder {
    color: #a9a3b3;
    opacity: 0.6;
    transform: translateY(-15px);
    font-size: 10px;
  }
`;

function CommissionEmailSection() {
  return (
    <>
      <ContainerCommission>
        <h4>
          Enter the Email Address of the person you want to gift the course{" "}
        </h4>
        <InputUserDetails type="email" placeholder="Email Address" />
        <LoaderSpinnerEmail />
        <TextAreaContainer>
          <TextOfficialArea placeholder="Write a message (optional)" />
        </TextAreaContainer>
      </ContainerCommission>
    </>
  );
}

export default CommissionEmailSection;
