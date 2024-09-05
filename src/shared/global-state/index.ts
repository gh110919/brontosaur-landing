import { Reducer, combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { cardsSlice } from "./slices/cards";
import { linksSlice } from "./slices/links";
import { popupSlice } from "./slices/popup";
import { inputsSlice } from "./slices/inputs";

const slices = {
  cardsSlice,
  linksSlice,
  popupSlice,
  inputsSlice,
};

type TReducers<S extends typeof slices> = {
  [K in keyof S]: S[K] extends { reducer: Reducer<infer State> }
    ? Reducer<State>
    : never;
};

export const rootStore = configureStore({
  reducer: combineReducers(
    Object.fromEntries(
      Object.entries(slices)?.map(([key, { reducer }]) => [key, reducer])
    ) as TReducers<typeof slices>
  ),
  devTools: true,
});

export type RootState = ReturnType<typeof rootStore.getState>;
export type AppDispatch = typeof rootStore.dispatch;

export const useDispatch_: () => AppDispatch = useDispatch;
export const useSelector_: TypedUseSelectorHook<RootState> = useSelector;
