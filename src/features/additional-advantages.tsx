import AdditionalAdvantagesMap from "ENTITIES/additional-advantages-map";
import { Title } from "ENTITIES/title";
import { ptw } from "SHARED/pixel-recalculate";
import styled from "styled-components";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${ptw(60)};
  @media (max-width: 768px) {
    gap: ${ptw(58, 768)};
    padding: ${ptw(60, 768)} 0 ${ptw(56, 768)};
  }
`;

export default function AdditionalAdvantages() {
  return (
    <Container>
      <Title>Дополнительные преимущества</Title>
      <AdditionalAdvantagesMap></AdditionalAdvantagesMap>
    </Container>
  );
}
