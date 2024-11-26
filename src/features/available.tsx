"use client";

import AvailableNumberedButtonsMap from "ENTITIES/available-numbered-buttons-map";
import AvailableNumberedCardMap from "ENTITIES/available-numbered-card-map";
import { MobileImage, PcImage, StyledImage } from "ENTITIES/image";
import { Title } from "ENTITIES/title";
import { useDispatch_, useSelector_ } from "SHARED/global-state";
import { cardsSlice } from "SHARED/global-state/slices/cards";
import { ptw } from "SHARED/pixel-recalculate";
import styled from "styled-components";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${ptw(60)};
  margin: auto;
  padding: 0 0 ${ptw(240)};

  @media (max-width: 768px) {
    gap: ${ptw(50, 768)};
    padding: ${ptw(50, 768)} 0 ${ptw(50, 768)};
  }
`;

const ImageCardsBox = styled.div`
  position: relative;
  transform: translate(${ptw(1)}, ${ptw(20)});
`;

export default function Available() {
  const dispatch = useDispatch_();

  const { hovered } = useSelector_((s) => s.cardsSlice);

  const handleLeave = () => {
    dispatch(
      cardsSlice.actions.hoveredAvailableRM({
        hovered: { ...hovered, available: undefined },
      })
    );
  };

  return (
    <Container>
      <Title>
        Что вам доступно <br /> на странице заведения
      </Title>
      <ImageCardsBox>
        <PcImage>
          <StyledImage
            src="https://storage.yandexcloud.net/brontosaur/promo-site/assets/laptop_2.png"
            width={1021}
            height={622}
            onClick={handleLeave}
          ></StyledImage>
        </PcImage>
        <MobileImage>
          <StyledImage
            src="https://storage.yandexcloud.net/brontosaur/promo-site/assets/laptop_2.png"
            width={728}
            height={443}
            onClick={handleLeave}
          ></StyledImage>
        </MobileImage>
        <AvailableNumberedButtonsMap></AvailableNumberedButtonsMap>
        <AvailableNumberedCardMap></AvailableNumberedCardMap>
      </ImageCardsBox>
    </Container>
  );
}
