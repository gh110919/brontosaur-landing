import AdditionalAdvantages from "FEATURES/additional-advantages";
import Advantages from "FEATURES/advantages";
import Available from "FEATURES/available";
import Connections from "FEATURES/connections";
import Epilogue from "FEATURES/epilogue";
import Essence from "FEATURES/essence";
import Functional from "FEATURES/functional";
import MainAdvantages from "FEATURES/main-advantages";
import Owners from "FEATURES/owners";
import Prologue from "FEATURES/prologue";
import Request from "FEATURES/request";
import { ptw } from "SHARED/pixel-recalculate";
import styled from "styled-components";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 768px) {
    width: ${ptw(768, 768)};
    align-items: center;
  }
`;

export default function MainComponent() {
  return (
    <Main>
      <Prologue></Prologue>
      <Advantages></Advantages>
      <Essence></Essence>
      <Functional></Functional>
      <Available></Available>
      <Owners></Owners>
      <Connections></Connections>
      <MainAdvantages></MainAdvantages>
      <AdditionalAdvantages></AdditionalAdvantages>
      <Epilogue></Epilogue>
      <Request></Request>
    </Main>
  );
}
