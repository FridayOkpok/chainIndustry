import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ButtonStyles } from "../../style/Style.styled";
import GiftImage from "../../image/gift.png";
import CommissionEmailSection from "./CommissionEmailSection";
// import ValidEmailDisplay from "./EmailIsValid";
import { useDispatch } from "react-redux";
import { CourseStoreAction } from "../../store/CoursesStore";

function UserPayment() {
  const dispatch = useDispatch();
  const [ReferralIsChecked, setReferralIsChecked] = useState(false);
  const [commissionIsChecked, setCommissionIsChecked] = useState(false);

  function onHandelReferralIsChecked() {
    setReferralIsChecked((previous) => !previous);
    setCommissionIsChecked(false);

    ReferralIsChecked
      ? dispatch(CourseStoreAction.commissionIsNotChecked())
      : dispatch(CourseStoreAction.onReferralIsChecked());
  }

  function onCommissionIsChecked() {
    setCommissionIsChecked((previous) => !previous);
    setReferralIsChecked(false);

    commissionIsChecked
      ? dispatch(CourseStoreAction.commissionIsNotChecked())
      : dispatch(CourseStoreAction.onCommissionIsChecked());
  }

  return (
    <BottomTopArea>
      <CheckContainer>
        <Check>
          <InputCheckedValue
            type="checkbox"
            id="my-checkbox"
            checked={`${commissionIsChecked ? `checked` : ``}`}
            onChange={onCommissionIsChecked}
            name="my-checkbox"
            value={`${commissionIsChecked ? `checked` : `unchecked`}`}
          />
          <LabelCustomStyled htmlFor="my-checkbox">
            Use referral commission (₦2,000 Available)
          </LabelCustomStyled>
        </Check>
        <Check>
          <InputCheckedValue
            type="checkbox"
            id="my-checkbox"
            checked={`${ReferralIsChecked ? `checked` : ``}`}
            onChange={onHandelReferralIsChecked}
            name="my-checkbox"
            value={`${ReferralIsChecked ? `checked` : `unchecked`}`}
          />
          <LabelCustomStyled htmlFor="my-checkbox">
            Use referral code to get 10% off
          </LabelCustomStyled>
        </Check>
      </CheckContainer>
      {ReferralIsChecked && (
        <InputUserDetails type="text" placeholder="Referral Code" />
      )}
      {commissionIsChecked && (
        //
        // <ValidEmailDisplay />
        <CommissionEmailSection />
      )}
      {!commissionIsChecked && (
        <GiftButtonStyled>
          <img src={GiftImage} alt="gift image" />
          <h1>Gift a friend </h1>
        </GiftButtonStyled>
      )}
      <PolicyStyledText>
        By enrolling, you agree to our <span> Terms of Use </span> and{" "}
        <span> Privacy Policy. </span>
      </PolicyStyledText>
      <ButttonArea>
        <CancelBtn>cancel</CancelBtn>
        <ProceedStyledBtn>Proceed to payment</ProceedStyledBtn>
      </ButttonArea>
    </BottomTopArea>
  );
}

export default UserPayment;

export const BottomTopArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 30px 0 20px 0;

  gap: 40px;
`;

export const InputCheckedValue = styled.input`
  width: 20px;
  height: 20px;

  background-color: transparent;
  border-radius: 50%;
  cursor: pointer;
  border: 1px solid #90879b;
  -webkit-appearance: none;

  &:checked {
    background-color: #de3561;
    border-color: #de3561;
  }

  &:focus {
    outline: none;
    box-shadow: none;
  }
`;

export const LabelCustomStyled = styled.label`
  width: 347px;
  height: 23px;

  font-family: "SF Pro Text";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 145.34%;
  letter-spacing: -0.03em;

  color: #e0dee3;
`;

const GiftButtonStyled = styled(ButtonStyles)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 18px;
  gap: 10px;
  margin-left: 28px;
  margin-top: 30px;

  width: 140px;
  height: 38px;

  background: rgba(222, 53, 97, 0.4);
  border-radius: 8px;

  & h1 {
    width: 90px;
    height: 19px;

    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 115.9%;
    letter-spacing: -0.02em;

    color: #ffffff;
  }
`;

const CheckContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 12px;
  margin-left: 28px;
  width: 90%;
  height: 58px;
`;

const PolicyStyledText = styled.p`
  margin-left: 28px;
  width: 397px;
  height: 20px;

  font-family: "SF Pro Text";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 145.34%;
  /* or 20px */

  letter-spacing: -0.03em;

  /* Greyscale/Grey 10 */

  color: #e0dee3;

  & span {
    color: #f881a0;
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const Check = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  gap: 5px;
`;

const ButttonArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
  width: 90%;
  height: 60px;
  margin: 0 28px;
`;

const CancelBtn = styled.h1`
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px 32px;
  gap: 10px;

  width: 187px;
  height: 60px;

  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  /* Button/Normal */

  font-family: "SF Pro Text";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 125%;
  /* identical to box height, or 20px */

  letter-spacing: -0.02em;

  /* White */
  cursor: pointer;
  color: #ffffff;
`;

const ProceedStyledBtn = styled.div`
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px 32px;
  gap: 10px;

  width: 390px;
  height: 60px;
  cursor: pointer;
  background: #de3561;
  border-radius: 16px;
  font-family: "SF Pro Text";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 125%;
  letter-spacing: -0.02em;

  color: #ffffff;
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
