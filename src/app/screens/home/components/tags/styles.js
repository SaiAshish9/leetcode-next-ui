import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TagName = styled.p`
  color: #fff;
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    color: rgb(10 132 255);
  }
`;

export const TagCount = styled.p`
   color: #eff2f699;
   background-color: #ffffff1a;
   border-radius: 10px;
   height: 18px;
   display: flex;
   align-items: center;
   justify-content: center;
`;
