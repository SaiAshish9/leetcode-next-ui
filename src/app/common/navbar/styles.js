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

// max-width: 79vw;
export const NavContent = styled.div`
  width: 100%;
  max-width: 72vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 1.25rem;
  height: 3.1rem;
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
  font-size: 0.9rem;
  padding-bottom: 0.75rem;
  font-weight: 400;
  border-bottom: 2.4px solid transparent;
  :hover {
    color: rgba(255, 255, 255);
  }
  ${({ text, route }) =>
    text == "System Design"
      ? css`
          color: rgb(255 161 22);
          :hover {
            color: rgb(255 161 22);
          }
        `
      : route
      ? css`
          border-bottom: 2.4px solid #fff;
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
  margin-right: 1.2rem;
  display: flex;
  cursor: pointer;
`;

export const ScoreText = styled.p`
  color: rgb(138 138 138);
  font-weight: 500;
  font-size: 14px;
  margin-left: 0.27rem;
  position: relative;
  top: 2px;
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
  font-size: 14px;
  padding: 0.375rem 0.75rem;
  border-radius: 5px;
  height: fit-content;
`;

export const StudyPlanContent = styled.div`
  display: flex;
  align-items: center;
`;
