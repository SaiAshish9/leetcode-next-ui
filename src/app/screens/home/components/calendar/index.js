import React from "react";
import {
  CalendarCont,
  Card,
  Container,
  StyledDayText,
  StyledImage,
  StyledImageContainer,
  TimelineText,
  StyledImageContent,
  StyledImage1
} from "./styles";

import CalendarImg from "@/assets/calendar.png";
import CalendarSvgImg from "@/assets/calendar.svg";

const Calender = () => {
  return (
    <Container>
      <Card>
        <CalendarCont>
          <StyledDayText>Day 28</StyledDayText>
          <TimelineText>07:10:55 left</TimelineText>
        </CalendarCont>
        <StyledImageContainer>
          <StyledImageContent>
            <StyledImage
              src={CalendarSvgImg}
              alt="img"
            />
            <StyledImage1 src={CalendarImg} alt="img" />
          </StyledImageContent>
        </StyledImageContainer>
      </Card>
    </Container>
  );
};

export default Calender;
