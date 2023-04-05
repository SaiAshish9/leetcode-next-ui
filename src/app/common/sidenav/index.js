import React from "react";
import { Container, InputContainer, Option, StyledSearchImage, TextInputContainer } from "./styles";
import SearchIcon from "@/assets/search.svg";

const SideNav = ({ selectedOption, setSelectedOption, options }) => {
  function handleClick(e, option) {
    e.preventDefault();
    e.stopPropagation();
    setSelectedOption(option);
  }

  return (
    <Container>
      <Option>
        <TextInputContainer>
          <StyledSearchImage src={SearchIcon} alt="img" />
          <InputContainer placeholder="Search questions" />
        </TextInputContainer>
      </Option>
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
