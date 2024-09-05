import { useDispatch_, useSelector_ } from "SHARED/global-state";
import { cardsSlice } from "SHARED/global-state/slices/cards";
import styled from "styled-components";
import { NumberedButton } from "./numbered-button";

const Container = styled.section`
  display: flex;
`;

export default function EssenceNumberedButtonsMap() {
  const dispatch = useDispatch_();

  const { hovered } = useSelector_((s) => s.cardsSlice);

  const handleElementHover = (i: number) => {
    dispatch(
      cardsSlice.actions.hoveredEssenseRM({
        hovered: { ...hovered, essense: i },
      })
    );
  };

  const handleLeave = () => {
    dispatch(
      cardsSlice.actions.hoveredEssenseRM({
        hovered: { ...hovered, essense: undefined },
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
              pc: { top: 108, left: 62 },
              mobile: { top: 57, left: 30 },
            },
          },
          {
            name: "02",
            position: {
              pc: { top: 228, left: 62 },
              mobile: { top: 137, left: 30 },
            },
          },
          {
            name: "03",
            position: {
              pc: { bottom: 110, left: 62 },
              mobile: { bottom: 59, left: 30 },
            },
          },
          {
            name: "04",
            position: {
              pc: { bottom: 221, right: 62 },
              mobile: { bottom: 176, right: 30 },
            },
          },
        ].map((e, i) => (
          <li key={i}>
            <NumberedButton
              $position={e.position}
              onTouchStart={() => handleElementHover(i)}
              onTouchEnd={handleLeave}
              onMouseEnter={() => handleElementHover(i)}
              onMouseLeave={handleLeave}
            >
              {e.name}
            </NumberedButton>
          </li>
        ))}
      </ul>
    </Container>
  );
}
