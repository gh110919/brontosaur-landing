"use client";

import { useSelector_ } from "SHARED/global-state";
import { ptw } from "SHARED/pixel-recalculate";
import styled from "styled-components";
import { NumberedButton } from "./numbered-button";

const Container = styled.section`
  display: flex;
`;

type TButtonCard = Partial<{
  $state: boolean;
  $position: {
    pc: Partial<{
      top: number;
      bottom: number;
      right: number;
      left: number;
    }>;
    mobile: Partial<{
      top: number;
      bottom: number;
      right: number;
      left: number;
    }>;
  };
}>;

const ButtonCard = styled.div<TButtonCard>`
  width: ${ptw(315)};
  padding: ${ptw(30)};
  border-radius: ${ptw(14)};
  background: #e7eff4;
  color: black;
  display: ${(p) => (p.$state ? "flex" : "none")};
  flex-direction: column;
  gap: ${ptw(20)};
  position: absolute;
  z-index: 10;

  top: ${(p) => {
    return p.$position?.pc.top ? `${ptw(p.$position?.pc.top)}` : "auto";
  }};
  right: ${(p) => {
    return p.$position?.pc.right ? `${ptw(p.$position?.pc.right)}` : "auto";
  }};
  bottom: ${(p) => {
    return p.$position?.pc.bottom ? `${ptw(p.$position?.pc.bottom)}` : "auto";
  }};
  left: ${(p) => {
    return p.$position?.pc.left ? `${ptw(p.$position?.pc.left)}` : "auto";
  }};

  @media (max-width: 768px) {
    width: ${ptw(357, 768)};
    height: fit-content;
    padding: ${ptw(30, 768)};
    border-radius: ${ptw(14, 768)};
    gap: ${ptw(20, 768)};
    padding: ${ptw(30, 768)};

    top: ${(p) => {
      return p.$position?.mobile.top
        ? `${ptw(p.$position?.mobile.top, 768)}`
        : "auto";
    }};
    right: ${(p) => {
      return p.$position?.mobile.right
        ? `${ptw(p.$position?.mobile.right, 768)}`
        : "auto";
    }};
    bottom: ${(p) => {
      return p.$position?.mobile.bottom
        ? `${ptw(p.$position?.mobile.bottom, 768)}`
        : "auto";
    }};
    left: ${(p) => {
      return p.$position?.mobile.left
        ? `${ptw(p.$position?.mobile.left, 768)}`
        : "auto";
    }};
  }
`;

const ButtonBox = styled.div<{ $index: number }>`
  display: flex;
  justify-content: ${(p) =>
    p.$index !== 0 && p.$index !== 1 && p.$index !== 2 ? "start" : "end"};

  @media (max-width: 768px) {
    justify-content: ${(p) =>
      p.$index !== 0 && p.$index !== 1 && p.$index !== 2 ? "end" : "start"};
  }
`;

const CardTitle = styled.strong`
  width: ${ptw(255)};
  height: fit-content;

  font-family: Raleway;
  font-size: ${ptw(18)};
  font-weight: 600;
  line-height: ${ptw(24)};
  text-align: left;

  color: #092433;

  @media (max-width: 768px) {
    width: ${ptw(297, 768)};
    font-size: ${ptw(18, 768)};
    line-height: ${ptw(24, 768)};
  }
`;

const CardText = styled.p`
  width: ${ptw(255)};
  height: fit-content;
  font-family: Raleway;
  font-size: ${ptw(14)};
  font-weight: 500;
  line-height: ${ptw(18)};
  text-align: left;

  color: #5f696d;

  @media (max-width: 768px) {
    width: ${ptw(286, 768)};
    font-size: ${ptw(14, 768)};
    line-height: ${ptw(18, 768)};
  }
`;

export default function EssenceNumberedCardMap() {
  const { hovered } = useSelector_((s) => s.cardsSlice);

  return (
    <Container>
      <ul>
        {[
          {
            name: "01",
            position: {
              pc: { top: -64, left: -173 },
              mobile: { top: -115, left: 1 },
            },
            title: "Форма поиска по названиям заведений",
            text: "Мгновенно найдите ваши любимые места, просто введя их названия в поисковую строку",
          },
          {
            name: "02",
            position: {
              pc: { top: 20, left: -173 },
              mobile: { top: -30, left: 1 },
            },
            title: "Модуль с заведениями рядом",
            text: "Brontosaur использует вашу геопозицию, чтобы показать ближайшие заведения. Вы можете настроить радиус показа для оптимального выбора",
          },
          {
            name: "03",
            position: {
              pc: { bottom: 80, left: -173 },
              mobile: { bottom: 30, left: 1 },
            },
            title: "Модуль с новинками меню",
            text: "Следите за самыми свежими добавлениями в меню всех заведений, отсортированными по дате и времени появления в базе",
          },
          {
            name: "04",
            position: {
              pc: { bottom: 191, right: -173 },
              mobile: { bottom: 145, right: 1 },
            },
            title: "Карточки заведений по рейтингу",
            text: "Откройте для себя лучшие заведения на основе их рейтингов, которые учитывают количество просмотров и лайков. Каждая карточка включает фото, основную информацию, адрес и средний чек",
          },
        ].map((e, i) => (
          <li key={i}>
            <ButtonCard $position={e.position} $state={i === hovered?.essense}>
              <CardTitle>{e.title}</CardTitle>
              <CardText>{e.text}</CardText>
              <ButtonBox $index={i}>
                <NumberedButton
                  style={{ position: "static" }}
                  $backColor="#FFFFFF"
                  $textColor=" #627580"
                >
                  {e.name}
                </NumberedButton>
              </ButtonBox>
            </ButtonCard>
          </li>
        ))}
      </ul>
    </Container>
  );
}
