"use client";

import { MobileImage, PcImage, StyledImage } from "ENTITIES/image";
import { useDispatch_, useSelector_ } from "SHARED/global-state";
import { linksSlice } from "SHARED/global-state/slices/links";
import { ptw } from "SHARED/pixel-recalculate";
import styled from "styled-components";

const Container = styled.section`
  display: flex;
  margin-top: ${ptw(54.74)};
  transform: translate(${ptw(-35)}, 0);
  height: ${ptw(609)};
  overflow: hidden;
  justify-content: center;

  @media (max-width: 768px) {
    width: ${ptw(768, 768)};
    height: fit-content;
    flex-direction: column;
    align-items: center;
    margin: auto;
    transform: translate(0, 0);
  }
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${ptw(30)};
  margin-top: ${ptw(59.26)};

  @media (max-width: 768px) {
    gap: ${ptw(30, 768)};
    margin: ${ptw(101, 768)} auto 0;
  }
`;

const Title = styled.h1`
  width: ${ptw(813)};
  height:fit-content;

  font-family: Raleway;
  font-size: ${ptw(64)};
  font-weight: 600;
  line-height: ${ptw(70.4)};
  text-align: left;
  color: black;

  @media (max-width: 768px) {
    width: ${ptw(728, 768)};
    font-size: ${ptw(64, 768)};
    line-height: ${ptw(70.4, 768)};
  }
`;

const Span = styled.span`
  color: #627580;
`;

const Subtitle = styled.p`
  width: ${ptw(530)};
  height: ${ptw(62)};

  font-family: Raleway;
  font-size: ${ptw(22)};
  font-weight: 400;
  line-height: ${ptw(30.8)};
  text-align: left;

  color: #5f696d;

  @media (max-width: 768px) {
    width: ${ptw(530, 768)};
    height: ${ptw(62, 768)};
    font-size: ${ptw(22, 768)};
    line-height: ${ptw(30.8, 768)};
  }
`;

const Join = styled.a<{ $hovered: boolean }>`
  width: ${ptw(208)};
  height: ${ptw(50)};
  padding: ${ptw(10)} ${ptw(20)};
  gap: ${ptw(80)};
  border-radius: ${ptw(10)};

  background: ${(p) => (p.$hovered ? "#092433" : "#627580")};
  color: white;
  margin-top: ${ptw(30)};

  font-family: Raleway;
  font-size: ${ptw(14)};
  font-weight: 500;
  line-height: ${ptw(18)};
  text-align: left;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: ${ptw(172, 768)};
    height: ${ptw(60, 768)};
    padding: ${ptw(14, 768)} ${ptw(24, 768)};
    border-radius: ${ptw(10, 768)};
    font-size: ${ptw(14, 768)};
    line-height: ${ptw(18, 768)};
    margin-top: ${ptw(30, 768)};
  }
`;

export default function Prologue() {
  const dispatch = useDispatch_();

  const { prologue } = useSelector_((s) => s.linksSlice);

  const handleServicePrologue = () => {
    dispatch(
      linksSlice.actions.prologueSeviceRM({
        prologue: { ...prologue!, service: !prologue?.service },
      })
    );
  };

  const handleLeave = () => {
    dispatch(
      linksSlice.actions.prologueSeviceRM({
        prologue: { ...prologue!, service: false },
      })
    );
  };

  return (
    <Container>
      <Text>
        <Title>
          <Span>Brontosaur —</Span> ваш гид в&nbsp;мире ресторанов, баров и кафе
        </Title>
        <Subtitle>
          С нашим сервисом бронирование столиков становится легким и удобным как
          никогда
        </Subtitle>
        <Join
          href="#request"
          $hovered={prologue?.service!}
          onTouchStart={handleServicePrologue}
          onTouchEnd={handleLeave}
          onMouseEnter={handleServicePrologue}
          onMouseLeave={handleLeave}
        >
          Присоединиться
        </Join>
      </Text>
      <MobileImage>
        <StyledImage
          style={{ transform: `translate(${ptw(105)},${ptw(-139)})` }}
          src="https://storage.yandexcloud.net/brontosaur/promo-site/assets/phone.png"
          width={618}
          height={1138}
        ></StyledImage>
      </MobileImage>
      <PcImage>
        <StyledImage
          style={{ transform: `translate(${ptw(7)},${ptw(-1)})` }}
          src="https://storage.yandexcloud.net/brontosaur/promo-site/assets/phone.png"
          width={486}
          height={894}
        ></StyledImage>
      </PcImage>
    </Container>
  );
}
