import React from "react";
import {
  CalendarCont,
  Card,
  Container,
  StyledDayText,
  TimelineText,
} from "./styles";

import CalendarImg from "@/assets/calendar.svg";

const Calender = () => {
  return (
    <Container>
      <Card>
        <CalendarCont>
          <StyledDayText>Day 28</StyledDayText>
          <TimelineText>07:10:55 left</TimelineText>
        </CalendarCont>
      </Card>
    </Container>
  );
};

export default Calender;
