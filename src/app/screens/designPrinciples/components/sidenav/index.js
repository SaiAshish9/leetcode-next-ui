import React from "react";
import { Container, Option, Text } from "./styles";

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

const SideNav = () => {
  return (
    <Container>
      {options.map((i, k) => (
        <Option key={i} selected={k == 2}>
          {i}
        </Option>
      ))}
    </Container>
  );
};

export default SideNav;
