import { StyledImage } from "ENTITIES/image";
import { ptw } from "SHARED/pixel-recalculate";
import styled from "styled-components";

const Container = styled.section`
  display: flex;
  justify-content: space-between;

  width: ${ptw(1368)};
  height: ${ptw(470)};
  border-radius: ${ptw(14)};
  padding: ${ptw(40)};
  margin: auto;

  background: #e7eff4;

  position: relative;

  @media (max-width: 768px) {
    width: ${ptw(728, 768)};
    height: ${ptw(700, 768)};
    border-radius: ${ptw(14, 768)};
    padding: ${ptw(40, 768)} ${ptw(30, 768)};
    overflow: hidden;
  }
`;

const Title = styled.strong`
  width: ${ptw(575)};
  height: fit-content;

  font-family: Raleway;
  font-size: ${ptw(46)};
  font-weight: 600;
  line-height: ${ptw(54)};
  text-align: left;

  @media (max-width: 768px) {
    width: ${ptw(575, 768)};
    font-size: ${ptw(46, 768)};
    line-height: ${ptw(54, 768)};
  }
`;

const Span = styled.span`
  color: #5f696d;
`;

const Text = styled.p`
  width: ${ptw(404)};
  height: ${ptw(87)};

  font-family: Raleway;
  font-size: ${ptw(22)};
  font-weight: 500;
  line-height: ${ptw(28.6)};
  text-align: left;

  color: #5f696d;

  @media (max-width: 768px) {
    width: ${ptw(337, 768)};
    height: ${ptw(116, 768)};
    font-size: ${ptw(22, 768)};
    line-height: ${ptw(28.6, 768)};
  }
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 768px) {
    justify-content: start;
    gap: ${ptw(30, 768)};
  }
`;

const Picture = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  @media (max-width: 768px) {
    bottom: ${ptw(-70, 768)};
    right: ${ptw(-105, 768)};
  }
`;

export default function Epilogue() {
  return (
    <Container>
      <TextBox>
        <Title>
          Brontosaur —
          <Span> это ваш шанс войти в новый, информационный век</Span>
        </Title>
        <Text>
          Присоединяйтесь к нам и&nbsp;ощутите, как просто и&nbsp;удобно станет
          управлять вашим заведением!
        </Text>
      </TextBox>
      <Picture>
        <StyledImage
          src="https://storage.yandexcloud.net/brontosaur/promo-site/assets/phone_2.png"
          width={614}
          height={561}
        ></StyledImage>
      </Picture>
    </Container>
  );
}
