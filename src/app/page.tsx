"use client";

import IndexPage from "PAGES/index-page";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import { rootStore } from "SHARED/global-state";

export default function Home() {
  return (
    <Provider store={rootStore}>
      <HelmetProvider>
        <IndexPage></IndexPage>
      </HelmetProvider>
    </Provider>
  );
}
