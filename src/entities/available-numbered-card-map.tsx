import { useSelector_ } from "SHARED/global-state";
import { ptw } from "SHARED/pixel-recalculate";
import styled from "styled-components";
import { NumberedButton } from "./numbered-button";

const Container = styled.section`
  display: flex;
`;

type TButtonCard = Partial<{
  $state: boolean;
  $position: {
    pc: Partial<{
      top: number;
      bottom: number;
      right: number;
      left: number;
    }>;
    mobile: Partial<{
      top: number;
      bottom: number;
      right: number;
      left: number;
    }>;
  };
}>;

const ButtonCard = styled.div<TButtonCard>`
  width: ${ptw(315)};

  padding: ${ptw(30)};
  border-radius: ${ptw(14)};

  background: #e7eff4;
  color: black;

  display: ${(p) => (p.$state ? "flex" : "none")};
  flex-direction: column;
  gap: ${ptw(20)};

  position: absolute;
  z-index: 10;

  top: ${(p) => {
    return p.$position?.pc.top ? `${ptw(p.$position?.pc.top)}` : "auto";
  }};
  right: ${(p) => {
    return p.$position?.pc.right ? `${ptw(p.$position?.pc.right)}` : "auto";
  }};
  bottom: ${(p) => {
    return p.$position?.pc.bottom ? `${ptw(p.$position?.pc.bottom)}` : "auto";
  }};
  left: ${(p) => {
    return p.$position?.pc.left ? `${ptw(p.$position?.pc.left)}` : "auto";
  }};

  @media (max-width: 768px) {
    width: ${ptw(304, 768)};
    height: fit-content;
    padding: ${ptw(30, 768)};
    border-radius: ${ptw(14, 768)};
    gap: ${ptw(20, 768)};

    top: ${(p) => {
      return p.$position?.mobile.top
        ? `${ptw(p.$position?.mobile.top, 768)}`
        : "auto";
    }};
    right: ${(p) => {
      return p.$position?.mobile.right
        ? `${ptw(p.$position?.mobile.right, 768)}`
        : "auto";
    }};
    bottom: ${(p) => {
      return p.$position?.mobile.bottom
        ? `${ptw(p.$position?.mobile.bottom, 768)}`
        : "auto";
    }};
    left: ${(p) => {
      return p.$position?.mobile.left
        ? `${ptw(p.$position?.mobile.left, 768)}`
        : "auto";
    }};
  }
`;

const ButtonBox = styled.div<{ $index: number }>`
  display: flex;
  justify-content: ${(p) =>
    p.$index !== 0 && p.$index !== 1 ? "end" : "start"};

  @media (max-width: 768px) {
    justify-content: ${(p) =>
      p.$index !== 0 && p.$index !== 1 ? "start" : "end"};
  }
`;

const CardText = styled.p`
  width: ${ptw(255)};
  height: fit-content;
  font-family: Raleway;
  font-size: ${ptw(18)};
  font-weight: 600;
  line-height: ${ptw(24)};
  text-align: left;

  color: #5f696d;

  @media (max-width: 768px) {
    width: ${ptw(244, 768)};
    height: fit-content;
    font-size: ${ptw(18, 768)};
    line-height: ${ptw(24, 768)};
  }
`;

export default function AvailableNumberedCardMap() {
  const { hovered } = useSelector_((s) => s.cardsSlice);

  return (
    <Container>
      <ul>
        {[
          {
            name: "01",
            position: {
              pc: { top: -62, right: -173 },
              mobile: { top: -82, right: 1 },
            },
            text: "Просматривать фото и видео галереи",
          },
          {
            name: "02",
            position: {
              pc: { top: 106, right: -173 },
              mobile: { top: 30, right: 1 },
            },
            text: "Узнавать более подробную информацию о заведении",
          },
          {
            name: "03",
            position: {
              pc: { bottom: 136, left: -173 },
              mobile: { bottom: 30, left: 1 },
            },
            text: "Ознакомиться с новинками меню",
          },
        ].map((e, i) => (
          <li key={i}>
            <ButtonCard
              $position={e.position}
              $state={i === hovered?.available}
            >
              <CardText>{e.text}</CardText>
              <ButtonBox $index={i}>
                <NumberedButton
                  style={{ position: "static" }}
                  $backColor="#FFFFFF"
                  $textColor=" #627580"
                >
                  {e.name}
                </NumberedButton>
              </ButtonBox>
            </ButtonCard>
          </li>
        ))}
      </ul>
    </Container>
  );
}
