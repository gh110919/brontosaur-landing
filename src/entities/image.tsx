import { ptw } from "SHARED/pixel-recalculate";
import styled from "styled-components";

type TStyledImageProps = { src: string; width: number; height: number };

export const StyledImage = styled.div<TStyledImageProps>`
  position: relative;
  width: ${(p) => ptw(p.width)};
  height: ${(p) => ptw(p.height)};
  &::before {
    content: "";
    width: ${(p) => ptw(p.width)};
    height: ${(p) => ptw(p.height)};
    position: absolute;
    background-image: url(${(p) => p.src});
    background-size: ${(p) => ptw(p.width)} ${(p) => ptw(p.height)};
  }

  @media (max-width: 768px) {
    width: ${(p) => ptw(p.width, 768)};
    height: ${(p) => ptw(p.height, 768)};
    &::before {
      width: ${(p) => ptw(p.width, 768)};
      height: ${(p) => ptw(p.height, 768)};
      background-size: ${(p) => ptw(p.width, 768)} ${(p) => ptw(p.height, 768)};
    }
  }
`;

export const MobileImage = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
  }
`;

export const PcImage = styled.div`
  display: flex;
  @media (max-width: 768px) {
    display: none;
  }
`;
