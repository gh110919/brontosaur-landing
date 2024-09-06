"use client";
import Popup from "FEATURES/popup";
import { useDispatch_, useSelector_ } from "SHARED/global-state";
import { popupSlice } from "SHARED/global-state/slices/popup";
import { ptw } from "SHARED/pixel-recalculate";
import styled from "styled-components";

const Container = styled.section`
  display: flex;
  flex-direction: column;

  width: ${ptw(672)};
  height: ${ptw(259)};
  padding: ${ptw(40)};
  border-radius: ${ptw(14)};

  background: #e7eff4;
  padding: ${ptw(40)};
  gap: ${ptw(40)};

  @media (max-width: 768px) {
    width: ${ptw(728, 768)};
    height: ${ptw(269, 768)};
    padding: ${ptw(40, 768)};
    border-radius: ${ptw(14, 768)};
    gap: ${ptw(40, 768)};
  }
`;

const Title = styled.strong`
  font-family: Raleway;
  font-size: ${ptw(32)};
  font-weight: 600;
  line-height: ${ptw(40)};
  text-align: center;

  @media (max-width: 768px) {
    width: ${ptw(648, 768)};
    font-size: ${ptw(32, 768)};
    line-height: ${ptw(40, 768)};
  }
`;

const Text = styled.p`
  font-family: Raleway;
  font-size: ${ptw(22)};
  font-weight: 500;
  line-height: ${ptw(28.6)};
  text-align: center;

  color: #5f696d;

  @media (max-width: 768px) {
    width: ${ptw(648, 768)};
    height: ${ptw(29, 768)};

    font-size: ${ptw(22, 768)};
    line-height: ${ptw(28.6, 768)};
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${ptw(20)};
`;

const Button = styled.button`
  width: ${ptw(592)};
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

export default function RequestSuccessPopup() {
  const dispatch = useDispatch_();

  const { request } = useSelector_((s) => s.popupSlice);

  const handleButtonClick = () => {
    dispatch(popupSlice.actions.default());
  };

  return (
    <Popup state={request?.success} backdrop={true}>
      <Container>
        <Content>
          <Title>Заявка успешно отправлена</Title>
          <Text>В течение рабочего дня с вами свяжется менеджер</Text>
        </Content>
        <Button onClick={handleButtonClick}>ОК</Button>
      </Container>
    </Popup>
  );
}
