"use client";

import { Provider } from "react-redux";
import { rootStore } from "SHARED/global-state";
import FooterComponent from "WIDGETS/footer";
import HeaderComponent from "WIDGETS/header";
import MainComponent from "WIDGETS/main";

export default function IndexPage() {
  return (
    <Provider store={rootStore}>
      <HeaderComponent></HeaderComponent>
      <MainComponent></MainComponent>
      <FooterComponent></FooterComponent>
    </Provider>
  );
}
