import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type TCardsState = Partial<{
  hovered: {
    essense?: number;
    available?: number;
  };
  hover: { advantages: boolean };
}>;

const initialState: TCardsState = {
  hovered: {
    essense: undefined,
    available: undefined,
  },
  hover: {
    advantages: false,
  },
};

export const cardsSlice = createSlice({
  name: "cardsSlice",
  initialState,
  reducers: {
    hoveredEssenseRM: (state, action: PayloadAction<typeof state>) => {
      state.hovered!.essense = action.payload.hovered!.essense;
    },
    hoveredAvailableRM: (state, action: PayloadAction<typeof state>) => {
      state.hovered!.available = action.payload.hovered!.available;
    },
    hoverAdvantagesRM: (state, action: PayloadAction<typeof state>) => {
      state.hover!.advantages = action.payload.hover!.advantages;
    },
  },
});
