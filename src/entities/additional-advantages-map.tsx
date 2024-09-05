import styled from "styled-components";
import { StyledImage } from "./image";
import { ptw } from "SHARED/pixel-recalculate";
import { TitleImageBox } from "./title-image-box";

const Container = styled.section`
  display: flex;
  padding-bottom: ${ptw(160)};
`;

const AdditionalList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${ptw(24)};

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    gap: ${ptw(20, 768)};
  }
`;

const Card = styled.div`
  width: ${ptw(672)};
  height: ${ptw(200)};
  padding: ${ptw(30)};
  border-radius: ${ptw(14)};

  background: #e7eff4;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: ${ptw(728, 768)};
    height: ${ptw(200, 768)};
    padding: ${ptw(30, 768)};
  }
`;

const CardTitle = styled.strong`
  width: ${ptw(365)};
  height: fit-content;

  font-family: Raleway;
  font-size: ${ptw(22)};
  font-weight: 600;
  line-height: ${ptw(28.6)};
  text-align: left;
  transform: translate(0, ${ptw(-5)});

  @media (max-width: 768px) {
    width: ${ptw(448, 768)};
    height: ${ptw(45, 768)};
    font-size: ${ptw(22, 768)};
    line-height: ${ptw(28.6, 768)};
  }
`;

const CardText = styled.p`
  width: ${ptw(577)};
  height: fit-content;

  font-family: Raleway;
  font-size: ${ptw(18)};
  font-weight: 500;
  line-height: ${ptw(24)};
  text-align: left;

  color: #5f696d;

  @media (max-width: 768px) {
    width: ${ptw(578, 768)};
    height: fit-content;
    font-size: ${ptw(18, 768)};
    line-height: ${ptw(24, 768)};
  }
`;

export default function AdditionalAdvantagesMap() {
  return (
    <Container>
      <AdditionalList>
        {[
          {
            title: "Аналитика",
            image: "assets/chart_icon_50.svg",
            text: "Используйте данные для повышения эффективности работы",
          },
          {
            title: "Повышенние удовлетворенности клиентов",
            image: "assets/stonks_icon_50.svg",
            text: "Улучшайте качество обслуживания, сокращая время ожидания",
          },
          {
            title: "Специальные предложения и акции",
            image: "assets/tick_icon_50.svg",
            text: "Создавайте промо-акции для привлечения новых гостей и повышения лояльности текущих",
          },
          {
            title: "Мультирегиональность",
            image: "assets/position_icon_50.svg",
            text: "Brontosaur автоматически определяет местоположение пользователя и отображает заведения в его городе. Пользователь также может вручную выбрать другой город",
          },
        ].map((e, i) => {
          return (
            <li key={i}>
              <Card>
                <TitleImageBox>
                  <CardTitle>{e.title}</CardTitle>
                  <StyledImage
                    src={e.image}
                    width={50}
                    height={50}
                  ></StyledImage>
                </TitleImageBox>
                <CardText>{e.text}</CardText>
              </Card>
            </li>
          );
        })}
      </AdditionalList>
    </Container>
  );
}
