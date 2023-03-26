import React from "react";
import {
  NavContainer,
  NavContent,
  NavItem,
  NavItemContainer,
  StyledImage,
  OptionsContainer,
  CircularAvatar,
  CircularContainer,
  NavIcon,
  ScoreText,
  PremiumButton,
  PremiumText,
} from "./styles";

import AvatarPic from "@/assets/p.jpeg";
import BellSvg from "@/assets/bell.svg";
import FireSvg from "@/assets/fire.svg";

const options1 = [
  {
    text: "Explore",
  },
  {
    text: "Problems",
  },
  {
    text: "Contest",
  },
  {
    text: "Discuss",
  },
  {
    text: "Interview",
  },
  {
    text: "Store",
  },
];

const options = [
  {
    text: "Problems",
  },
  {
    text: "Contest",
  },
  {
    text: "Design Patterns",
  },
  {
    text: "SOLID",
  },
  {
    text: "Scale",
  },
  {
    text: "System Design",
  },
];

const Navbar = () => {
  return (
    <NavContainer>
      <NavContent>
        <NavItemContainer>
          <StyledImage
            alt="img"
            src="https://leetcode.com/_next/static/images/logo-dark-c96c407d175e36c81e236fcfdd682a0b.png"
            width="22"
            height="24"
          />
          <OptionsContainer>
            {options.map((i, _) => (
              <NavItem key={i.text} text={i.text}>
                {i.text}
              </NavItem>
            ))}
          </OptionsContainer>
        </NavItemContainer>
        <CircularContainer>
          <NavIcon>
            <PremiumButton>
              <PremiumText>Premium</PremiumText>
            </PremiumButton>
          </NavIcon>
          <NavIcon>
            <StyledImage alt="img" src={BellSvg} width="24" height="24" />
          </NavIcon>
          <NavIcon>
            <StyledImage alt="img" src={FireSvg} width="24" height="24" />
            <ScoreText>0</ScoreText>
          </NavIcon>
          <CircularAvatar alt="pic" src={AvatarPic} width="24" height="24" />
        </CircularContainer>
      </NavContent>
    </NavContainer>
  );
};

export default Navbar;
