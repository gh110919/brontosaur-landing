import styled from "styled-components";
import { StyledImage } from "./image";
import { ptw } from "SHARED/pixel-recalculate";
import { TitleImageBox } from "./title-image-box";

const Container = styled.section`
  display: flex;
`;

const List = styled.ul`
  display: grid;
  gap: ${ptw(24)};
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    gap: ${ptw(20, 768)};
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: ${ptw(440)};
  height: ${ptw(260)};
  padding: ${ptw(30)};
  border-radius: ${ptw(14)};
  background: white;

  @media (max-width: 768px) {
    width: ${ptw(728, 768)};
    height: ${ptw(200, 768)};
    padding: ${ptw(30, 768)};
  }
`;

const CardTitle = styled.strong`
  width: ${ptw(206)};
  height: fit-content;

  font-family: Raleway;
  font-size: ${ptw(22)};
  font-weight: 600;
  line-height: ${ptw(28.6)};
  text-align: left;
  transform: translate(0, ${ptw(-5)});
  @media (max-width: 768px) {
    width: ${ptw(521, 768)};
    font-size: ${ptw(22, 768)};
    line-height: ${ptw(28.6, 768)};
    transform: translate(${ptw(-1, 768)}, ${ptw(-5, 768)});
  }
`;

const CardText = styled.p`
  width: ${ptw(380)};
  height: fit-content;

  font-family: Raleway;
  font-size: ${ptw(18)};
  font-weight: 500;
  line-height: ${ptw(24)};
  text-align: left;

  color: #5f696d;

  @media (max-width: 768px) {
    width: ${ptw(400, 768)};
    height: ${ptw(48, 768)};
    font-size: ${ptw(18, 768)};
    line-height: ${ptw(24, 768)};
  }
`;

export default function CardsMap() {
  return (
    <Container>
      <List>
        {[
          {
            name: "Бесплатное использование",
            image: "assets/card_icon_50.svg",
            text: "Brontosaur для пользователей всегда бесплатен",
          },
          {
            name: "Удобная регистрация",
            image: "assets/phone_icon_50.svg",
            text: "Регистрация через подтверждение email и номера телефона",
          },
          {
            name: "Интуитивный интерфейс",
            image: "assets/laptop_icon_50.svg",
            text: "Все, что вам нужно, в одном месте",
          },
          {
            name: "Экономия времени",
            image: "assets/time_icon_50.svg",
            text: "Будьте уверены, что столик будет вам доступен, и вас не заставят ждать долго",
          },
          {
            name: "Локальное и персонализированное обслуживание",
            image: "assets/shop_icon_50.svg",
            text: "Легкий доступ к заведением вашего города, с возможностью смены города вручную",
          },
        ].map((e, i) => (
          <li key={i}>
            <Card>
              <TitleImageBox>
                <CardTitle>{e.name}</CardTitle>
                <StyledImage src={e.image} width={50} height={50}></StyledImage>
              </TitleImageBox>
              <CardText>{e.text}</CardText>
            </Card>
          </li>
        ))}
      </List>
    </Container>
  );
}
