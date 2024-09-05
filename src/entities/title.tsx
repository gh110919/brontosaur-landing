import { ptw } from "SHARED/pixel-recalculate";
import styled from "styled-components";

export const Title = styled.strong`
  width: ${ptw(600)};
  height: fit-content;

  font-family: Raleway;
  font-size: ${ptw(46)};
  font-weight: 600;
  line-height: ${ptw(54)};
  text-align: center;

  color: #092433;

  @media (max-width: 768px) {
    width: ${ptw(728, 768)};
    font-size: ${ptw(46, 768)};
    line-height: ${ptw(54, 768)};
  }
`;
