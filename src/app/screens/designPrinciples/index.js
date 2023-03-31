import React, { useState } from "react";
import { Content, SideNav } from "./components";
import { Container } from "./styles";
import { Navbar } from "@/common";

const DesignPrinciples = () => {
  const [selectedOption, setSelectedOption] = useState(3);

  return (
    <>
      <Navbar />
      <Container>
        <SideNav selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
        <Content selectedOption={selectedOption} />
      </Container>
    </>
  );
};

export default DesignPrinciples;
