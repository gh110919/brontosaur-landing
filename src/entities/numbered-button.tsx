import styled from "styled-components";
import { ptw } from "SHARED/pixel-recalculate";

type TNumberedButtonProps = Partial<{
  $backColor: string;
  $textColor: string;
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

export const NumberedButton = styled.button<TNumberedButtonProps>`
  width: ${ptw(50)};
  height: ${ptw(50)};
  padding: ${ptw(10)} ${ptw(20)};
  border-radius: ${ptw(10)};

  font-family: Raleway;
  font-size: ${ptw(14)};
  font-weight: 500;
  line-height: ${ptw(18)};
  text-align: right;

  background: ${(p) => (p.$backColor ? p.$backColor : "#627580")};
  color: ${(p) => (p.$textColor ? p.$textColor : "white")};

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;

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
    width: ${ptw(60, 768)};
    height: ${ptw(60, 768)};
    font-size: ${ptw(14, 768)};
    line-height: ${ptw(18, 768)};

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
