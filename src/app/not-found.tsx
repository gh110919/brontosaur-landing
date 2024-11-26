"use client";

import { Helmet, HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import { rootStore } from "SHARED/global-state";
import { ptw } from "SHARED/pixel-recalculate";
import styled from "styled-components";
import HeaderComponent from "WIDGETS/header";

const Body = styled.body`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${ptw(34)};
`;

const Title = styled.h1`
  width: ${ptw(722)};
  height: fit-content;

  font-family: Raleway;
  font-size: ${ptw(46)};
  font-weight: 600;
  line-height: ${ptw(54)};
  text-align: center;

  @media (max-width: 768px) {
    width: ${ptw(415, 768)};
    height: ${ptw(162, 768)};
    font-size: ${ptw(46, 768)};
    line-height: ${ptw(54, 768)};
  }
`;

const Link = styled.a`
  width: ${ptw(255)};
  height: ${ptw(50)};
  padding: ${ptw(10)} ${ptw(16)};
  border-radius: ${ptw(10)};

  font-family: Raleway;
  font-size: ${ptw(14)};
  font-weight: 500;
  line-height: ${ptw(18)};
  text-align: left;

  background: #627580;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: ${ptw(255, 768)};
    height: ${ptw(60, 768)};
    padding: ${ptw(14, 768)} ${ptw(16, 768)};
    border-radius: ${ptw(10, 768)};
    font-size: ${ptw(14, 768)};
    line-height: ${ptw(18, 768)};
  }
`;

export default function NotFound() {
  return (
    <html lang="ru">
      <Body>
        <Provider store={rootStore}>
          <HelmetProvider>
            <Helmet>
              <title>Не найдено</title>
            </Helmet>
            <HeaderComponent></HeaderComponent>
            <Container>
              <Title>К сожалению, этой страницы нет в нашем меню</Title>
              <Link href="/">Вернуться на главную</Link>
            </Container>
          </HelmetProvider>
        </Provider>
      </Body>
    </html>
  );
}
