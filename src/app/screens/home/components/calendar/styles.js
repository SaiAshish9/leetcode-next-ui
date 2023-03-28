import Image from "next/image";
import styled, { css } from "styled-components";

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

export const StyledImage = styled(Image)`
  cursor: pointer;
  width: 100%;
  height: 70px;
  width: fit-content;
  position: absolute;
  right: 1rem;
  margin: 0px;
  padding: 0px;
  cursor: pointer;
  top: -2rem;
  ${({ img }) =>
    img
      ? css`
          right: 0.78rem;
          top: -2rem;
          opacity: 0.6;
          &:hover {
            opacity: 1;
          }
        `
      : css``}
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

export const TagsCont = styled.div`
  margin: 1rem 0px 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const TagText = styled.span`
  color: #ebebf54d;
  width: 2rem;
  height: 2rem;
  font-size: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LabelsCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const LabelText = styled.div`
  color: #eff2f699;
  width: 2rem;
  font-size: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LabelTextContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 2rem;
  cursor: pointer;
`;

export const Dot = styled.div`
  background: rgb(239 71 67);
  height: 0.25rem;
  width: 0.25rem;
  border-radius: 50%;
  margin-top: 0.1rem;
`;
