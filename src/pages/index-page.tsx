"use client";

import { Helmet } from "react-helmet-async";
import { ptw } from "SHARED/pixel-recalculate";
import styled from "styled-components";
import FooterComponent from "WIDGETS/footer";
import HeaderComponent from "WIDGETS/header";
import MainComponent from "WIDGETS/main";

const Body = styled.body`
  width: ${ptw(1440)};
  margin: auto;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: ${ptw(768, 768)};
  }
`;

export default function IndexPage() {
  return (
    <Body>
      <Helmet>
        <title>Главная</title>
      </Helmet>
      <HeaderComponent></HeaderComponent>
      <MainComponent></MainComponent>
      <FooterComponent></FooterComponent>
    </Body>
  );
}
