"use server";

import dynamic from "next/dynamic";
import Loading from "./loading";

const DynamicIndex = dynamic(() => import("PAGES/index-page"), {
  loading: () => <Loading></Loading>,
  suspense: true,
  ssr: false,
});

export default async function Home() {
  return <DynamicIndex></DynamicIndex>;
}
