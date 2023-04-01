import React, { useState } from "react";
import { Container } from "./styles";
import { Navbar, SideNav, Content } from "@/common";

const DesignPatterns = () => {
  const [selectedOption, setSelectedOption] = useState(0);

  const options = [
    "Singleton",
    "Factory",
    "Builder",
    "Prototype",
    "Proxy",
    "Fascade",
    "Composite",
    "Decorator",
    "Flyweight",
    "Adaptor",
    "Bridge",
    "Observer"
  ];

  const textContent = [];

  return (
    <>
      <Navbar />
      <Container>
        <SideNav
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          options={options}
        />
        <Content selectedOption={selectedOption} textContent={textContent} />
      </Container>
    </>
  );
};

export default DesignPatterns;
