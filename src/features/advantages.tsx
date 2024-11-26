"use client";

import CardsMap from "ENTITIES/cards-map";
import { StyledImage } from "ENTITIES/image";
import { Title } from "ENTITIES/title";
import { useDispatch_, useSelector_ } from "SHARED/global-state";
import { cardsSlice } from "SHARED/global-state/slices/cards";
import { ptw } from "SHARED/pixel-recalculate";
import styled from "styled-components";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${ptw(60)};
  width: ${ptw(1440)};
  height: ${ptw(898)};
  border-radius: ${ptw(40)};
  background: #e7eff4;

  @media (max-width: 768px) {
    position: relative;
    margin-top: ${ptw(-381, 768)};
    padding: ${ptw(120, 768)} 0 ${ptw(100, 768)};
    width: ${ptw(768, 768)};
    height: fit-content;
    gap: ${ptw(60, 768)};
    border-radius: ${ptw(40, 768)};
  }
`;

const CardsJoinBox = styled.div`
  position: relative;
`;

const JoinBox = styled.a<{ $hovered: boolean }>`
  width: ${ptw(440)};
  height: ${ptw(260)};
  padding: ${ptw(30)};
  border-radius: ${ptw(14)};

  background: ${(p) => (p.$hovered ? "#fff" : "#627580")};

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  position: absolute;
  bottom: 0;
  right: 0;

  @media (max-width: 768px) {
    position: static;
    width: ${ptw(728, 768)};
    height: ${ptw(200, 768)};
    margin: ${ptw(20, 768)} 0 ${ptw(20, 768)};
    padding: ${ptw(30, 768)};
  }
`;

const JoinTitle = styled.strong<{ $hovered: boolean }>`
  width: ${ptw(180)};
  height: fit-content;

  font-family: Raleway;
  font-size: ${ptw(22)};
  font-weight: 600;
  line-height: ${ptw(28.6)};
  text-align: left;

  color: ${(p) => (p.$hovered ? "#092433" : "#fff")};
  transform: translate(0, ${ptw(-5)});

  @media (max-width: 768px) {
    width: ${ptw(668, 768)};
    font-size: ${ptw(22, 768)};
    line-height: ${ptw(28.6, 768)};
  }
`;

const ImageBox = styled.div`
  display: flex;
  justify-content: end;
`;

export default function Advantages() {
  const dispatch = useDispatch_();

  const { hover } = useSelector_((s) => s.cardsSlice);

  const action = () => {
    dispatch(
      cardsSlice.actions.hoverAdvantagesRM({
        hover: { ...hover, advantages: !hover?.advantages },
      })
    );
  };

  const handleBoxHover = () => {
    action();
  };

  const handleLeave = () => {
    action();
  };

  return (
    <Container>
      <Title>Преимущества для вас</Title>
      <CardsJoinBox>
        <CardsMap></CardsMap>
        <JoinBox
          $hovered={hover?.advantages!}
          href="#request"
          onTouchStart={handleBoxHover}
          onTouchEnd={handleLeave}
          onMouseEnter={handleBoxHover}
          onMouseLeave={handleLeave}
        >
          <JoinTitle $hovered={hover?.advantages!}>
            Присоединиться к сервису
          </JoinTitle>
          <ImageBox>
            <StyledImage
              src={`${
                hover?.advantages
                  ? "https://storage.yandexcloud.net/brontosaur/promo-site/assets/arrow_down_gray_50.svg"
                  : "https://storage.yandexcloud.net/brontosaur/promo-site/assets/arrow_down_white_50.svg"
              }`}
              width={50}
              height={50}
            ></StyledImage>
          </ImageBox>
        </JoinBox>
      </CardsJoinBox>
    </Container>
  );
}
