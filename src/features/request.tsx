"use client";
import RequestFormPopup from "ENTITIES/request-form-popup";
import RequestSuccessPopup from "ENTITIES/request-success-popup";
import { useDispatch_, useSelector_ } from "SHARED/global-state";
import { linksSlice } from "SHARED/global-state/slices/links";
import { popupSlice } from "SHARED/global-state/slices/popup";
import { ptw } from "SHARED/pixel-recalculate";
import styled from "styled-components";

const Container = styled.section`
  display: flex;
  justify-content: space-between;
  width: ${ptw(1368)};
  height: ${ptw(168)};
  padding: ${ptw(40)};
  border-radius: ${ptw(14)};

  background: #e7eff4;
  margin: ${ptw(24)} auto ${ptw(160)};

  @media (max-width: 768px) {
    width: ${ptw(728, 768)};
    height: ${ptw(264, 768)};
    padding: ${ptw(40, 768)};
    gap: ${ptw(40, 768)};
    border-radius: ${ptw(14, 768)};
    margin: ${ptw(20, 768)} auto ${ptw(120, 768)};
    flex-direction: column;
  }
`;

const Title = styled.strong`
  width: ${ptw(550)};
  height: fit-content;

  font-family: Raleway;
  font-size: ${ptw(32)};
  font-weight: 600;
  line-height: ${ptw(40)};
  text-align: left;

  @media (max-width: 768px) {
    width: fit-content;
    font-size: ${ptw(32, 768)};
    line-height: ${ptw(40, 768)};
  }
`;

const Text = styled.p`
  width: ${ptw(409)};
  height: ${ptw(24)};

  font-family: Raleway;
  font-size: ${ptw(18)};
  font-weight: 500;
  line-height: ${ptw(24)};
  text-align: left;

  color: #5f696d;

  @media (max-width: 768px) {
    width: ${ptw(409, 768)};
    height: ${ptw(24, 768)};
    font-size: ${ptw(18, 768)};
    line-height: ${ptw(24, 768)};
  }
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    gap: ${ptw(20, 768)};
  }
`;

const Button = styled.button<{ $hovered: boolean }>`
  width: ${ptw(283)};
  height: ${ptw(50)};
  padding: ${ptw(10)} ${ptw(30)};
  border-radius: ${ptw(10)};

  background: ${(p) => (p.$hovered ? "#092433" : "#627580")};
  color: white;

  font-family: Raleway;
  font-size: ${ptw(14)};
  font-weight: 500;
  line-height: ${ptw(18)};
  text-align: left;

  display: flex;
  justify-content: center;
  align-items: center;
  transform: translate(0, ${ptw(19)});

  @media (max-width: 768px) {
    transform: translate(0, 0);
    width: ${ptw(648, 768)};
    height: ${ptw(60, 768)};
    padding: ${ptw(14, 768)} ${ptw(30, 768)};
    border-radius: ${ptw(10, 768)};
    font-size: ${ptw(14, 768)};
    line-height: ${ptw(18, 768)};
  }
`;

export default function Request() {
  const dispatch = useDispatch_();

  const { request } = useSelector_((s) => s.linksSlice);
  const { request: requestPopup } = useSelector_((s) => s.popupSlice);

  const handleRequestForm = () => {
    dispatch(
      linksSlice.actions.requestFormRM({
        request: { ...request!, form: !request?.form },
      })
    );
  };

  const handleLeave = () => {
    dispatch(
      linksSlice.actions.requestFormRM({
        request: { ...request!, form: false },
      })
    );
  };

  const handleButtonClick = () => {
    dispatch(
      popupSlice.actions.requestFormRM({
        request: {
          ...requestPopup,
          form: !requestPopup?.form,
        },
      })
    );
  };

  return (
    <Container>
      <TextBox>
        <Title>Оставить заявку на подключение</Title>
        <Text>Заполните данные для подключения к сервису</Text>
      </TextBox>
      <Button
        id="request"
        $hovered={request?.form!}
        onTouchStart={handleRequestForm}
        onTouchEnd={handleLeave}
        onMouseEnter={handleRequestForm}
        onMouseLeave={handleLeave}
        onClick={handleButtonClick}
      >
        Заполнитиь данные
      </Button>
      <RequestFormPopup></RequestFormPopup>
      <RequestSuccessPopup></RequestSuccessPopup>
    </Container>
  );
}
