import React from "react";
import LC1 from "@/assets/lc.png";
import LC2 from "@/assets/lc1.png";
import LC3 from "@/assets/lc2.png";
import { Container, StyledImg } from "./styles";

import L1Img from "@/assets/l1.png";
import L2Img from "@/assets/l2.png";
import L3Img from "@/assets/l3.png";
import L4Img from "@/assets/l4.png";
import L5Img from "@/assets/l5.png";
import L6Img from "@/assets/l6.png";
import L7Img from "@/assets/l7.png";
import L8Img from "@/assets/l8.png";

const LImages = [
  {
    img: L1Img,
  },
  {
    img: L2Img,
  },
  {
    img: L3Img,
  },
  {
    img: L4Img,
  },
  {
    img: L5Img,
  },
];

const Banner = () => {
  const images = [LC1, LC2, LC3];

  return (
    <>
      <Container>
        {images.map((i, _) => (
          <StyledImg key={i} src={i} alt="img" />
        ))}
      </Container>
      <Container>
        {LImages.map((i, _) => (
          <StyledImg key={i.img} src={i.img} alt="img" />
        ))}
      </Container>
    </>
  );
};

export default Banner;
