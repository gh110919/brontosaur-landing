import styled from "styled-components";
import { MobileImage, PcImage, StyledImage } from "./image";
import { ptw } from "SHARED/pixel-recalculate";

const Container = styled.section`
  display: flex;
`;

const ConnectionList = styled.ul`
  display: flex;
  justify-content: center;
  gap: ${ptw(24)};

  @media (max-width: 768px) {
    flex-direction: column;
    width: ${ptw(768, 768)};
    align-items: center;
    gap: ${ptw(20, 768)};
  }
`;

const Card = styled.div<{ $last: boolean }>`
  width: ${ptw(440)};
  height: ${ptw(400)};
  border-radius: ${ptw(14)};

  background: ${(p) => (p.$last ? "#627580" : "#ffffff")};

  padding: ${ptw(30)};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    width: ${ptw(728, 768)};
    height: ${ptw(260, 768)};
    padding: ${ptw(30, 768)};
  }
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${ptw(30)};

  @media (max-width: 768px) {
    gap: ${ptw(20, 768)};
  }
`;

const PriceBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${ptw(14)};
`;

type TLast = { $last: boolean };

const CardTitle = styled.strong<TLast>`
  width: ${ptw(368)};
  height: fit-content;
  font-family: Raleway;
  font-size: ${ptw(22)};
  font-weight: 600;
  line-height: ${ptw(28.6)};
  text-align: left;

  color: ${(p) => (p.$last ? "#ffffff" : "#092433")};
  @media (max-width: 768px) {
    width: ${ptw(493, 768)};
    font-size: ${ptw(22, 768)};
    line-height: ${ptw(28.6, 768)};
  }
`;

const CardText = styled.p<TLast>`
  width: ${ptw(308)};
  height: fit-content;

  font-family: Raleway;
  font-size: ${ptw(18)};
  font-weight: 500;
  line-height: ${ptw(24)};
  text-align: left;

  color: ${(p) => (p.$last ? "#ffffff" : "#5f696d")};
  opacity: ${(p) => (p.$last ? "70%" : "100%")};

  @media (max-width: 768px) {
    width: ${ptw(397, 768)};
    height: fit-content;
    font-size: ${ptw(18, 768)};
    line-height: ${ptw(24, 768)};
  }
`;

const PriceTitle = styled.strong<TLast>`
  width: ${ptw(323)};
  height: fit-content;

  font-family: Raleway;
  font-size: ${ptw(14)};
  font-weight: 500;
  line-height: ${ptw(18)};
  text-align: left;

  color: ${(p) => (p.$last ? "#ffffff" : "#5f696d")};
  opacity: ${(p) => (p.$last ? "70%" : "100%")};

  @media (max-width: 768px) {
    width: ${ptw(323, 768)};
    font-size: ${ptw(14, 768)};
    line-height: ${ptw(18, 768)};
    transform: translate(0, ${ptw(-10, 768)});
  }
`;

const Price = styled.p<TLast>`
  width: ${ptw(323)};
  height: ${ptw(29)};

  font-family: Raleway;
  font-size: ${ptw(22)};
  font-weight: 600;
  line-height: ${ptw(28.6)};
  text-align: left;

  color: ${(p) => (p.$last ? "#ffffff" : "#092433")};

  @media (max-width: 768px) {
    width: ${ptw(323, 768)};
    height: ${ptw(29, 768)};
    font-size: ${ptw(22, 768)};
    line-height: ${ptw(28.6, 768)};
  }
`;

const Picture = styled.div`
  position: absolute;
  bottom: ${ptw(-140)};
  right: ${ptw(-278)};
  @media (max-width: 768px) {
    bottom: ${ptw(-137, 768)};
    right: ${ptw(-253, 768)};
  }
`;

export default function ConnectionMap() {
  return (
    <Container>
      <ConnectionList>
        {[
          {
            title: "Без планшета и самостоятельное предоставление материалов",
            text: "Предоставьте свои фото и видео",
            price: "5 000 руб.",
          },
          {
            title: "Индивидуальные условия",
            text: "Оговариваются при подключении к сервису",
            price: "По договоренности",
          },
          {
            title: "С планшетом и съемкой",
            text: "Предоставляем все необходимое: планшет и услуги фото и видеосъемки",
            image: "https://storage.yandexcloud.net/brontosaur/promo-site/assets/tablet.png",
            price: "15 000 руб.",
          },
        ].map((e, i, a) => {
          const last = i === a.length - 1;

          return (
            <li key={i}>
              <Card $last={last}>
                <TextBox>
                  <CardTitle $last={last}>{e.title}</CardTitle>
                  <CardText $last={last}>{e.text}</CardText>
                </TextBox>
                <PriceBox>
                  <PriceTitle $last={last}>Cтоимость подключения</PriceTitle>
                  <Price $last={last}>{e.price}</Price>
                </PriceBox>
                <Picture>
                  <StyledImage
                    src={e.image!}
                    width={572}
                    height={468}
                  ></StyledImage>
                </Picture>
              </Card>
            </li>
          );
        })}
      </ConnectionList>
    </Container>
  );
}
