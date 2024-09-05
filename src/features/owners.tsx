import { ptw } from "SHARED/pixel-recalculate";
import styled from "styled-components";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${ptw(60)};
  transform: translate(0, ${ptw(19)});
  padding: 0 0 ${ptw(240)};

  @media (max-width: 768px) {
    padding: ${ptw(110, 768)} 0 ${ptw(120, 768)};
    gap: ${ptw(70, 768)};
  }
`;

const Title = styled.strong`
  width: ${ptw(362)};
  height: fit-content;

  font-family: Raleway;
  font-size: ${ptw(24)};
  font-weight: 500;
  line-height: ${ptw(32)};
  text-align: center;

  color: #5f696d;

  @media (max-width: 768px) {
    width: ${ptw(362, 768)};
    font-size: ${ptw(24, 768)};
    line-height: ${ptw(32, 768)};
  }
`;

const Text = styled.p`
  width: ${ptw(1234)};
  height: ${ptw(300)};

  font-family: Raleway;
  font-size: ${ptw(46)};
  font-weight: 600;
  line-height: ${ptw(59.8)};
  text-align: center;

  color: #092433;
  transform: translate(0, ${ptw(19)});

  @media (max-width: 768px) {
    width: ${ptw(728, 768)};
    height: ${ptw(440, 768)};
    font-size: ${ptw(42, 768)};
    line-height: ${ptw(54.6, 768)};
  }
`;

const Span = styled.span`
  color: #627580;
`;

export default function Owners() {
  return (
    <Container>
      <Title>
        Владельцам <br /> и администраторам заведений
      </Title>
      <Text>
        <Span>Brontosaur — это революционное решение </Span>
        для&nbsp;управления вашим заведением. Мы предлагаем простое и удобное
        <Span>управление резервами и&nbsp;заказами,</Span>
        чтобы вы&nbsp;могли сосредоточиться на&nbsp;
        <Span>улучшении&nbsp;обслуживания </Span>
        ваших&nbsp;гостей
      </Text>
    </Container>
  );
}
