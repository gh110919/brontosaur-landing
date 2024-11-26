import styled from "styled-components";
import { StyledImage } from "./image";
import { ptw } from "SHARED/pixel-recalculate";
import { TitleImageBox } from "./title-image-box";

const Container = styled.section`
  display: flex;
`;

const AdvantagesList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${ptw(24)};

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    gap: ${ptw(20, 768)};
  }
`;

const Card = styled.div`
  width: ${ptw(440)};
  height: ${ptw(300)};
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
  width: ${ptw(220)};
  height: fit-content;

  font-family: Raleway;
  font-size: ${ptw(22)};
  font-weight: 600;
  line-height: ${ptw(28.6)};
  text-align: left;

  color: #092433;

  transform: translate(0, ${ptw(-5)});

  @media (max-width: 768px) {
    width: ${ptw(394, 768)};
    font-size: ${ptw(22, 768)};
    line-height: ${ptw(28.6, 768)};
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
    width: ${ptw(592, 768)};
    height: ${ptw(48, 768)};
    font-size: ${ptw(18, 768)};
    line-height: ${ptw(24, 768)};
  }
`;

export default function MainAdvantagesMap() {
  return (
    <Container>
      <AdvantagesList>
        {[
          {
            title: "Переход в цифровой век",
            image: "https://storage.yandexcloud.net/brontosaur/promo-site/assets/bot_icon_50.svg",
            text: "Забудьте о бумажных записных книжках. Вся информация доступна на планшете",
          },
          {
            title: "Управление бронями",
            image: "https://storage.yandexcloud.net/brontosaur/promo-site/assets/folder_icon_50.svg",
            text: "Администраторы могут легко добавлять и удалять резервы и заказы, видеть занятость столов в реальном времени",
          },
          {
            title: "Полная история операций",
            image: "https://storage.yandexcloud.net/brontosaur/promo-site/assets/page_icon_50.svg",
            text: "Вся история резервов и заказов хранится в системе",
          },
          {
            title: "Индивидуальные профили клиентов",
            image: "https://storage.yandexcloud.net/brontosaur/promo-site/assets/profile_icon_50.svg",
            text: "Просматривайте историю заказов и добавляйте комментарии. Ограничивайте резервы нежелательным посетителям",
          },
          {
            title: "Автоматизация процессов",
            image: "https://storage.yandexcloud.net/brontosaur/promo-site/assets/handset_icon_50.svg",
            text: "Не нужно отвечать на звонки для подтверждения резервов. Вся информация доступна онлайн и обновляется в реальном времени",
          },
          {
            title: "Фиксированные дни без резерва",
            image: "https://storage.yandexcloud.net/brontosaur/promo-site/assets/calendar_icon_50.svg",
            text: "Устанавливайте дни, когда бронирования невозможны, и планируйте ваше заведение более гибко",
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
      </AdvantagesList>
    </Container>
  );
}
