import styled from "styled-components";
import { StyledImage } from "./image";
import { ptw } from "SHARED/pixel-recalculate";
import { TitleImageBox } from "./title-image-box";

const Container = styled.section`
  display: flex;
`;

const FunctionalCard = styled.div`
  width: ${ptw(440)};
  height: ${ptw(340)};
  padding: ${ptw(34)};
  border-radius: ${ptw(14)};

  background: #e7eff4;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: ${ptw(728, 768)};
    height: ${ptw(220, 768)};
    padding: ${ptw(34, 768)};
  }
`;

const CardTitle = styled.strong`
  width: ${ptw(159)};
  height: fit-content;

  font-family: Raleway;
  font-size: ${ptw(22)};
  font-weight: 600;
  line-height: ${ptw(30.8)};
  text-align: left;

  color: #092433;
  transform: translate(0, ${ptw(-6)});

  @media (max-width: 768px) {
    width: ${ptw(363, 768)};
    font-size: ${ptw(22, 768)};
    line-height: ${ptw(30.8, 768)};
  }
`;

const CardText = styled.p`
  width: ${ptw(372)};
  height: fit-content;

  font-family: Raleway;
  font-size: ${ptw(18)};
  font-weight: 500;
  line-height: ${ptw(24)};
  text-align: left;

  color: #5f696d;

  @media (max-width: 768px) {
    width: ${ptw(583, 768)};
    height: ${ptw(72, 768)};
    font-size: ${ptw(18, 768)};
    line-height: ${ptw(24, 768)};
  }
`;

const FunctionalList = styled.ul`
  display: flex;
  gap: ${ptw(24)};

  @media (max-width: 768px) {
    flex-direction: column;
    gap: ${ptw(20, 768)};
  }
`;

export default function FunctionalMap() {
  return (
    <Container>
      <FunctionalList>
        {[
          {
            title: "Выбор столика",
            text: "Укажите количество гостей, дату и время визита, и система покажет доступные столики. Недоступные столики автоматически исключаются",
            image: "assets/table_icon_50.svg",
          },
          {
            title: "Подтверждение резервирования",
            text: "Выберите доступный столик, ознакомьтесь с его фото. Отправьте резерв и ожидайте подтверждение от администратора в реальном времени",
            image: "assets/confirmation_icon_50.svg",
          },
          {
            title: "Предварительный заказ из меню",
            text: "Добавьте блюда в заказ, оформите и оплатите его - к вашему приходу еда уже будет готова. Меню может быть доступно только в режиме каталога, если это решение владельца заведения",
            image: "assets/menu_icon_50.svg",
          },
        ].map((e, i) => (
          <li key={i}>
            <FunctionalCard>
              <TitleImageBox>
                <CardTitle>{e.title}</CardTitle>
                <StyledImage src={e.image} width={50} height={50}></StyledImage>
              </TitleImageBox>
              <CardText>{e.text}</CardText>
            </FunctionalCard>
          </li>
        ))}
      </FunctionalList>
    </Container>
  );
}
