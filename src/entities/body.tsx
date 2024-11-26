"use client";

import { ptw } from "SHARED/pixel-recalculate";
import styled from "styled-components";

export const Body = styled.body`
  width: ${ptw(1440)};
  margin: auto;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: ${ptw(768, 768)};
  }
`;
