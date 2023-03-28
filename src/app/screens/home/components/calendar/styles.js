import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div``;

export const Card = styled.div`
  background: rgb(40 40 40);
  width: 100%;
  padding: 0.7rem 0;
  border-radius: 0.5rem;
  box-shadow: 0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 #0000, 0px 1px 3px #0000003d,
    0px 2px 8px #00000029;
  margin-bottom: 1rem;
  margin-top: 3.6rem;
  position: relative;
  padding: 1rem 0.8rem;
`;

export const StyledImageContainer = styled.div`
  height: 70px;
  position: absolute;
  right: 1rem;
  top: -2rem;
`;

export const StyledImageContent = styled.div`
  position: relative;
  height: 100%;
`;

export const StyledImage = styled(Image)`
  height: 100%;
  width: fit-content;
  &:hover {
    opacity: 1;
  }
  cursor: pointer;
`;

export const StyledImage1 = styled(Image)`
  height: 100%;
  position: relative;
  bottom: 100%;
  width: fit-content;
  opacity: 0.6;
  &:hover {
    opacity: 1;
  }
  cursor: pointer;
`;

export const StyledDayText = styled.p`
  color: #eff1f6bf;
  font-size: 0.8rem;
  margin-top: 0.2rem;
`;

export const CalendarCont = styled.div`
  display: flex;
  align-items: center;
`;

export const TimelineText = styled.p`
  color: #ebebf54d;
  font-size: 10px;
  position: relative;
  top: 1px;
  margin-left: 4px;
`;
