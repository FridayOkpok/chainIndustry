import styled from "styled-components";

export const CardComponent = styled.div`
  background: rgba(173, 125, 249, 0.1);
  border-radius: 32px;
`;

export const ButtonStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 32px;
  width: 288px;
  height: 70px;
  cursor: pointer;

  background: #de3561;
  border-radius: 12px;
`;

export const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 1;
  z-index: 3;
  transition: 0.3s ease-in-out;
`;

export const ExploreCard = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 24px 24px 32px;
  gap: 10px;

  width: 260px;
  background: rgba(173, 125, 249, 0.1);
  border-radius: 16px;
`;

export const Spinner = styled.div`
  position: absolute;
  top: 50%;
  right: 1px;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  border: 2px solid transparent;
  border-top-color: #de3561;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
