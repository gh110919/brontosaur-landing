"use client";

import EssenceNumberedButtonsMap from "ENTITIES/essence-numbered-buttons-map";
import EssenceNumberedCardMap from "ENTITIES/essence-numbered-card-map";
import { MobileImage, PcImage, StyledImage } from "ENTITIES/image";
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
  padding: ${ptw(160)} 0 ${ptw(160)};

  @media (max-width: 768px) {
    width: ${ptw(728, 768)};
    gap: ${ptw(60, 768)};
    padding: ${ptw(120, 768)} 0 ${ptw(120, 768)};
  }
`;

const Title = styled.strong`
  width: ${ptw(812)};
  height: fit-content;

  font-family: Raleway;
  font-size: ${ptw(46)};
  font-weight: 600;
  line-height: ${ptw(54)};
  text-align: center;

  color: #092433;

  @media (max-width: 768px) {
    width: ${ptw(728, 768)};
    font-size: ${ptw(46, 768)};
    line-height: ${ptw(54, 768)};
  }
`;

const ImageButtonsBox = styled.div`
  position: relative;
`;

export default function Essence() {
  const dispatch = useDispatch_();

  const { hovered } = useSelector_((s) => s.cardsSlice);

  const handleLeave = () => {
    dispatch(
      cardsSlice.actions.hoveredEssenseRM({
        hovered: { ...hovered, essense: undefined },
      })
    );
  };

  return (
    <Container>
      <Title>
        Что вы увидите <br /> на главной странице
      </Title>
      <ImageButtonsBox>
        <PcImage>
          <StyledImage
            style={{ transform: `translate(${ptw(0.1)},${ptw(20)})` }}
            src="https://storage.yandexcloud.net/brontosaur/promo-site/assets/laptop.png"
            width={1021}
            height={622}
            onClick={handleLeave}
          ></StyledImage>
        </PcImage>
        <MobileImage>
          <StyledImage
            src="https://storage.yandexcloud.net/brontosaur/promo-site/assets/laptop.png"
            width={728}
            height={443}
            onClick={handleLeave}
          ></StyledImage>
        </MobileImage>
        <EssenceNumberedButtonsMap></EssenceNumberedButtonsMap>
        <EssenceNumberedCardMap></EssenceNumberedCardMap>
      </ImageButtonsBox>
    </Container>
  );
}
