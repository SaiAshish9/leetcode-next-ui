import React, { useState } from "react";
import { Container } from "./styles";
import { Navbar, SideNav, Content } from "@/common";

const DesignPatterns = () => {
  const [selectedOption, setSelectedOption] = useState(3);

  const options = [];

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
