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
} from "./styles";

import AvatarPic from "@/assets/p.jpeg";

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
          <CircularAvatar alt="pic" src={AvatarPic} width="24" height="24" />
        </CircularContainer>
      </NavContent>
    </NavContainer>
  );
};

export default Navbar;
