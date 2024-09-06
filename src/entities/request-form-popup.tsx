"use client";
import Popup from "FEATURES/popup";
import { useDispatch_, useSelector_ } from "SHARED/global-state";
import { popupSlice } from "SHARED/global-state/slices/popup";
import { ptw } from "SHARED/pixel-recalculate";
import { useEffect, useRef } from "react";
import styled from "styled-components";
import { StyledImage } from "./image";
import InputListMap from "./input-list-map";
import { Title } from "./title";
import { TitleImageBox } from "./title-image-box";

const Form = styled.form`
  width: ${ptw(904)};
  height: ${ptw(448)};
  padding: ${ptw(40)};
  border-radius: ${ptw(14)};

  background: #e7eff4;

  display: flex;
  flex-direction: column;
  gap: ${ptw(40)};

  @media (max-width: 768px) {
    width: ${ptw(728, 768)};
    height: ${ptw(716, 768)};
    padding: ${ptw(40, 768)};
    border-radius: ${ptw(14, 768)};
  }
`;

const Fieldset = styled.fieldset``;

const Submit = styled.button`
  width: ${ptw(824)};
  height: ${ptw(50)};
  padding: ${ptw(10)} ${ptw(30)};
  border-radius: ${ptw(10)};

  font-family: Raleway;
  font-size: ${ptw(14)};
  font-weight: 500;
  line-height: ${ptw(18)};
  text-align: left;

  background: #627580;
  color: #fff;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: ${ptw(648, 768)};
    height: ${ptw(60, 768)};
    padding: ${ptw(15, 768)} ${ptw(30, 768)};
    border-radius: ${ptw(10, 768)};

    font-size: ${ptw(14, 768)};
    line-height: ${ptw(18, 768)};
  }
`;

export default function RequestFormPopup() {
  const dispatch = useDispatch_();

  const { request } = useSelector_((s) => s.popupSlice);

  const handleCrossClick = () => {
    dispatch(
      popupSlice.actions.requestFormRM({
        request: { ...request, form: !request?.form },
      })
    );
  };

  const inputs = useSelector_((s) => s.inputsSlice);

  const handleFormSubmit = () => {
    console.log(inputs);

    dispatch(
      popupSlice.actions.requestSuccessRM({
        request: { ...request, success: !request?.success },
      })
    );
  };

  const formRef = useRef<HTMLFormElement>(null);
  const submitRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    submitRef.current!.disabled = !formRef.current?.checkValidity();
  });

  return (
    <Popup backdrop state={request?.form}>
      <Form ref={formRef}>
        <TitleImageBox>
          <Title style={{ textAlign: "left" }}>Заполните форму</Title>
          <StyledImage
            src="assets/cross_icon_50_black.svg"
            width={50}
            height={50}
            onClick={handleCrossClick}
          ></StyledImage>
        </TitleImageBox>
        <Fieldset>
          <InputListMap></InputListMap>
        </Fieldset>
        <Submit type="submit" onClick={handleFormSubmit} ref={submitRef}>
          Отправить
        </Submit>
      </Form>
    </Popup>
  );
}
