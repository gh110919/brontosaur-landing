import ConnectionMap from "ENTITIES/connections-map";
import { Title } from "ENTITIES/title";
import { ptw } from "SHARED/pixel-recalculate";
import styled from "styled-components";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${ptw(60)};
  background: #e7eff4;
  padding: ${ptw(100)} ${ptw(36)};
  border-radius: ${ptw(40)};

  transform: translate(0, ${ptw(39)});
  @media (max-width: 768px) {
    gap: ${ptw(60, 768)};
    margin: ${ptw(44, 768)} 0 ${ptw(56, 768)};
    padding: ${ptw(120, 768)} 0 ${ptw(135, 768)};
    border-radius: ${ptw(40, 768)};
  }
`;

const Caption = styled.p`
  width: 100%;
  height: ${ptw(29)};

  font-family: Raleway;
  font-size: ${ptw(22)};
  font-weight: 600;
  line-height: ${ptw(28.6)};
  text-align: left;

  @media (max-width: 768px) {
    width: ${ptw(728, 768)};
    font-size: ${ptw(22, 768)};
    line-height: ${ptw(28.6, 768)};
    transform: translate(${ptw(14, 768)}, 0);
  }
`;

export default function Connections() {
  return (
    <Container>
      <Title style={{ transform: `translate(${ptw(-5)},0)` }}>
        Варианты подключения
      </Title>
      <ConnectionMap></ConnectionMap>
      <Caption>Абонентская плата – всего 1500 руб/мес</Caption>
    </Container>
  );
}
