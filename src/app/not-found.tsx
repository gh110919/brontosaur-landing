"use client";

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
`;

export default function NotFound() {
  return (
    <html>
      <Body>
        <Provider store={rootStore}>
          <HeaderComponent></HeaderComponent>
          <Container>
            <Title>К сожалению, этой страницы нет в нашем меню</Title>
            <Link href="/">Вернуться на главную</Link>
          </Container>
        </Provider>
      </Body>
    </html>
  );
}
