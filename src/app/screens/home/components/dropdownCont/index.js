import React from "react";
import {
  ArrowDowmImage,
  BubbleContainer,
  Container,
  Dropdown,
  DropdownContainer,
  PickOneBubble,
  PickOneContainer,
} from "./styles";

import DropdownArrorDownImg from "@/assets/dropdown_arrow_down.svg";
import PickImg from "@/assets/pick.svg";

const options = [
  {
    text: "Lists",
  },
  {
    text: "Difficulty",
  },
  {
    text: "Status",
  },
  {
    text: "Tags",
  },
];

const DropdownCont = () => {
  return (
    <Container>
      <DropdownContainer>
        {options.map((i, _) => (
          <Dropdown key={i.text}>
            {i.text}
            <ArrowDowmImage src={DropdownArrorDownImg} alt="img" />
          </Dropdown>
        ))}
      </DropdownContainer>
      <PickOneContainer>
        <BubbleContainer>
          <PickOneBubble src={PickImg} alt="img" />
        </BubbleContainer>
        Pick One
      </PickOneContainer>
    </Container>
  );
};

export default DropdownCont;
