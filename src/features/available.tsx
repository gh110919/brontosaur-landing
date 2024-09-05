import AvailableNumberedButtonsMap from "ENTITIES/available-numbered-buttons-map";
import AvailableNumberedCardMap from "ENTITIES/available-numbered-card-map";
import { MobileImage, PcImage, StyledImage } from "ENTITIES/image";
import { Title } from "ENTITIES/title";
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
    padding: ${ptw(50, 768)} 0 ${ptw(50, 768)} ;
  }
`;

const ImageCardsBox = styled.div`
  position: relative;
  transform: translate(${ptw(1)}, ${ptw(20)});
`;

export default function Available() {
  return (
    <Container>
      <Title>
        Что вам доступно <br /> на странице заведения
      </Title>
      <ImageCardsBox>
        <PcImage>
          <StyledImage
            src="assets/laptop_2.png"
            width={1021}
            height={622}
          ></StyledImage>
        </PcImage>
        <MobileImage>
          <StyledImage
            src="assets/laptop_2.png"
            width={728}
            height={443}
          ></StyledImage>
        </MobileImage>
        <AvailableNumberedButtonsMap></AvailableNumberedButtonsMap>
        <AvailableNumberedCardMap></AvailableNumberedCardMap>
      </ImageCardsBox>
    </Container>
  );
}
