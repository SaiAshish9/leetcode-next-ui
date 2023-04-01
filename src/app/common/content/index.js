import React from "react";
import { Container } from "./styles";

const Content = ({ selectedOption, textContent }) => {
  return <Container>{textContent[selectedOption]?.text}</Container>;
};

export default Content;
