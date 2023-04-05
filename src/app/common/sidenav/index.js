import React, { useState } from "react";
import {
  Container,
  InputContainer,
  Option,
  StyledSearchImage,
  TextInputContainer,
} from "./styles";
import SearchIcon from "@/assets/search.svg";

const SideNav = ({ selectedOption, setSelectedOption, options }) => {
  function handleClick(e, option) {
    e.preventDefault();
    e.stopPropagation();
    setSelectedOption(option);
  }

  const [selectedOptions, setOptions] = useState(options);

  function handleChange(e) {
    e.preventDefault();
    e.stopPropagation();
    setOptions(
      options.slice().filter((o) => o.toLowerCase().includes(e.target.value))
    );
  }

  return (
    <Container>
      <Option>
        <TextInputContainer>
          <StyledSearchImage src={SearchIcon} alt="img" />
          <InputContainer
            onChange={(v) => handleChange(v)}
            placeholder={`Search pattern (${selectedOptions?.length ?? 0})`}
          />
        </TextInputContainer>
      </Option>
      {selectedOptions?.map((i, k) => (
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
