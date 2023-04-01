import React from "react";
import { Container, Option } from "./styles";


const SideNav = ({ selectedOption, setSelectedOption, options }) => {
  function handleClick(e, option) {
    e.preventDefault();
    e.stopPropagation();
    setSelectedOption(option);
  }

  return (
    <Container>
      {options?.map((i, k) => (
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
