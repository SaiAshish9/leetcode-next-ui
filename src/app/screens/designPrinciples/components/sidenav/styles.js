import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 17vw;
  height: 100%;
  border-right: 1px solid rgb(61 61 61);
`;

export const Option = styled.p`
  color: #eff1f6bf;
  font-size: 0.9rem;
  padding: 1.8rem 1.2rem;
  border-bottom: 1px solid rgb(61 61 61);
  cursor: pointer;
  ${({ selected }) =>
    selected &&
    css`
      border-left: 4px solid #fff;
    `}
`;