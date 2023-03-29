"use client";

import "antd/dist/reset.css";
import "@/main.css";
import "@/globals.css";
import { HomeScreen } from "./screens";
import { Navbar } from "./common";

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
