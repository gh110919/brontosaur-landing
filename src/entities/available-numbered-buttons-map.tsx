"use client";

import { useDispatch_, useSelector_ } from "SHARED/global-state";
import { cardsSlice } from "SHARED/global-state/slices/cards";
import styled from "styled-components";
import { NumberedButton } from "./numbered-button";

const Container = styled.section`
  display: flex;
`;

export default function AvailableNumberedButtonsMap() {
  const dispatch = useDispatch_();

  const { hovered } = useSelector_((s) => s.cardsSlice);

  const handleElementHover = (i: number) => {
    dispatch(
      cardsSlice.actions.hoveredAvailableRM({
        hovered: { ...hovered, available: i },
      })
    );
  };

  const handleLeave = () => {
    dispatch(
      cardsSlice.actions.hoveredAvailableRM({
        hovered: { ...hovered, available: undefined },
      })
    );
  };

  return (
    <Container>
      <ul>
        {[
          {
            name: "01",
            position: {
              pc: { top: 36, right: 62 },
              mobile: { top: 16, right: 30 },
            },
          },
          {
            name: "02",
            position: {
              pc: { top: 204, right: 62 },
              mobile: { top: 126, right: 30 },
            },
          },
          {
            name: "03",
            position: {
              pc: { bottom: 166, left: 62 },
              mobile: { bottom: 60, left: 30 },
            },
          },
        ].map((e, i) => (
          <li key={i}>
            <NumberedButton
              $position={e.position}
              onClick={() => handleElementHover(i)}
              // onTouchStart={() => handleElementHover(i)}
              // onTouchEnd={handleLeave}
              // onMouseEnter={() => handleElementHover(i)}
              // onMouseLeave={handleLeave}
            >
              {e.name}
            </NumberedButton>
          </li>
        ))}
      </ul>
    </Container>
  );
}
