import React, { useState } from "react";
import { Container } from "./styles";
import { Navbar, SideNav, Content } from "@/common";

const DesignPatterns = () => {
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

export default DesignPatterns;
