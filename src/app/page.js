"use client";

import "antd/dist/reset.css";
import "@/main.css";
import "@/globals.css";
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
