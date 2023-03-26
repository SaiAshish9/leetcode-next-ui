import React from "react";
import LC1 from "@/assets/lc.png";
import LC2 from "@/assets/lc1.png";
import LC3 from "@/assets/lc2.png";
import { Container, StyledImg } from "./styles";

const Banner = () => {
  const images = [LC1, LC2, LC3];

  return (
    <Container>
      {images.map((i, _) => (
        <StyledImg key={i} src={i} alt="img" />
      ))}
    </Container>
  );
};

export default Banner;
