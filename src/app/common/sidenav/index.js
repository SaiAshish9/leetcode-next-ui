import React, { useState } from "react";
import { Container, Option } from "./styles";

const options = [
  "Design Principles",
  "Principles Vs Patterns",
  "SOLID",
  "Single Responsibility",
  "Open Closed",
  "Liskov Substitution",
  "Interface Segregation",
  "Dependency Inversion",
];

const SideNav = ({ selectedOption, setSelectedOption }) => {
  function handleClick(e, option) {
    e.preventDefault();
    e.stopPropagation();
    setSelectedOption(option);
  }

  return (
    <Container>
      {options.map((i, k) => (
        <Option
          onClick={(e) => handleClick(e, k)}
          key={i}
          selected={k == selectedOption}
        >
          {i}
        </Option>
      ))}
    </Container>
  );
};

export default SideNav;
