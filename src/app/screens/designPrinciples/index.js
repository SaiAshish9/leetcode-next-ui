import { Navbar } from "@/common";
import React from "react";
import { Content, SideNav } from "./components";
import { Container } from "./styles";

const DesignPrinciples = () => {
  return (
    <>
      <Navbar />
      <Container>
        <SideNav />
        <Content />
      </Container>
    </>
  );
};

export default DesignPrinciples;
