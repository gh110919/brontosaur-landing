import MainAdvantagesMap from "ENTITIES/main-advantages-map";
import { Title } from "ENTITIES/title";
import { ptw } from "SHARED/pixel-recalculate";
import styled from "styled-components";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${ptw(60)};
  align-items: center;
  padding: ${ptw(199)} ${ptw(36)} ${ptw(160)};
  @media (max-width: 768px) {
    gap: ${ptw(60, 768)};
  }
`;

export default function MainAdvantages() {
  return (
    <Container>
      <Title>
        Основные <br /> преимущества для вас
      </Title>
      <MainAdvantagesMap></MainAdvantagesMap>
    </Container>
  );
}
