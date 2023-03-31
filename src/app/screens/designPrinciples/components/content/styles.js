import styled, { css } from "styled-components";

export const Container = styled.div`
  padding: 1.8rem 1.2rem;
  margin-left: 17vw;
  overflow-y: scroll;
  padding-bottom: 1rem;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Text = styled.p`
  font-size: 14px;
  color: #fff;
  margin-bottom: 0.8rem;
  ${({ m }) =>
    m &&
    css`
      font-size: 17px;
      margin-bottom: 1.5rem;
    `};
`;
