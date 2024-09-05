import { ptw } from "SHARED/pixel-recalculate";
import styled from "styled-components";

export const Logo = styled.strong`
  width: ${ptw(128)};
  height: ${ptw(28)};

  font-family: Raleway;
  font-size: ${ptw(24)};
  font-weight: 700;
  line-height: ${ptw(28.18)};
  text-align: left;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: ${ptw(128, 768)};
    height: ${ptw(24, 768)};
    font-size: ${ptw(24, 768)};
    line-height: ${ptw(28.18, 768)};
  }
`;
