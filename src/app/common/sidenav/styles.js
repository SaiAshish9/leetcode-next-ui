import styled, { css } from "styled-components";
import Image from "next/image";

export const Container = styled.div`
  width: 17vw;
  height: calc(100% - 50px);
  border-right: 1px solid rgb(61 61 61);
  position: absolute;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Option = styled.p`
  color: #eff1f6bf;
  font-size: 0.9rem;
  padding: 1.8rem 1.2rem;
  border-bottom: 1px solid rgb(61 61 61);
  border-left: 4px solid transparent;
  cursor: pointer;
  ${({ selected }) =>
    selected &&
    css`
      border-left: 4px solid #fff;
    `}
`;


export const StyledSearchImage = styled(Image)`
  height: 1.08rem;
  width: 1.08rem;
`;

export const TextInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const InputContainer = styled.input`
  border: none;
  outline: none;
  color: #fff !important;
  background-color: transparent;
  padding-left: 0.375rem;
  padding-right: 0.25rem;
  font-size: 0.9rem;
  &:placeholder {
    color: rgba(138 138 138, 0.7);
  }
`;