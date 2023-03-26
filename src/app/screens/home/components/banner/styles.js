import styled from "styled-components";
import Image from "next/image";

export const StyledImg = styled(Image)`
  width: 32%;
  height: 100%;
  border-radius: 13px;
  cursor: pointer;
  box-shadow: 0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 #0000, 0px 1px 3px #0000003d,
    0px 2px 8px #00000029;
`;

export const Container = styled.div`
  padding-top: 2.7rem;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-right: 0px;
  margin-right: 0px;
`;
