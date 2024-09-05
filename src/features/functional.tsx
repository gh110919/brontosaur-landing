import FunctionalMap from "ENTITIES/functional-map";
import { ptw } from "SHARED/pixel-recalculate";
import styled from "styled-components";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${ptw(60)};
  padding: ${ptw(19)} ${ptw(36)} ${ptw(160)};
  @media (max-width: 768px) {
    gap: ${ptw(60, 768)};
    transform: translate(0, ${ptw(-10, 768)});
  }
`;

const Title = styled.strong`
  width: ${ptw(509)};
  height: fit-content;

  font-family: Raleway;
  font-size: ${ptw(46)};
  font-weight: 600;
  line-height: ${ptw(54)};
  text-align: center;

  color: #092433;

  @media (max-width: 768px) {
    width: ${ptw(509, 768)};
    font-size: ${ptw(46, 768)};
    line-height: ${ptw(54, 768)};
  }
`;

export default function Functional() {
  return (
    <Container>
      <Title>Основной функционал бронирования</Title>
      <FunctionalMap></FunctionalMap>
    </Container>
  );
}
