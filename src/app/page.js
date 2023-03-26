"use client";

import { Navbar } from "./common";
import { HomeScreen } from "./screens";

function HomeScreenContainer() {
  return (
    <>
      <Navbar />
      <HomeScreen />
    </>
  );
}

export default function Home() {
  return <HomeScreenContainer />;
}
