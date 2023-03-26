import styled, { css } from "styled-components";
import Image from "next/image";

export const NavContainer = styled.div`
  background-color: rgb(40 40 40);
  width: 100%;
  position: fixed;
  z-index: 10;
  box-shadow: 0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 #0000, 0px 1px 3px #0000003d,
    0px 2px 8px #00000029;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
`;

export const NavContent = styled.div`
  width: 100%;
  max-width: 79vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 1.25rem;
  height: 3.9rem;
`;

export const StyledImage = styled(Image)`
  align-self: center;
`;

export const CircularAvatar = styled(Image)`
  border-radius: 50%;
  background: #fff;
`;

export const NavItem = styled.p`
  color: #eff1f6bf;
  align-self: flex-end;
  margin-left: 1.75rem;
  cursor: pointer;
  font-size: 1rem;
  padding-bottom: 1.05rem;
  font-weight: 400;
  border-bottom: 3px solid transparent;
  :hover {
    color: rgba(255, 255, 255);
  }
  ${({ text }) =>
    text == "System Design"
      ? css`
          color: rgb(255 161 22);
          :hover {
            color: rgb(255 161 22);
          }
        `
      : text == "Problems"
      ? css`
          border-bottom: 3px solid #fff;
        `
      : css``};
`;

export const NavItemContainer = styled.div`
  display: flex;
`;

export const OptionsContainer = styled.div`
  display: flex;
`;

export const CircularContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavIcon = styled.div`
  align-self: center;
  margin-right: 1.5rem;
  display: flex;
  cursor: pointer;
`;

export const ScoreText = styled.p`
  color: rgb(138 138 138);
  font-weight: 500;
  font-size: 1.08rem;
  margin-left: 0.36rem;
`;

export const PremiumButton = styled.div`
  // background-color: #1a202c;
  border-radius: 5px;
  color: rgb(255 161 22);
  cursor: pointer;
`;

export const PremiumText = styled.p`
  background-color: #ffffff1a;
  width: fit-content;
  font-size: 1.02rem;
  padding: 0.6rem 0.75rem;
  border-radius: 5px;
  height: fit-content;
`;
