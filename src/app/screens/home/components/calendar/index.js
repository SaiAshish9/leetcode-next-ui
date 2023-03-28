import React from "react";
import {
  CalendarCont,
  Card,
  Container,
  LabelsCont,
  LabelText,
  StyledDayText,
  StyledImage,
  TagsCont,
  TagText,
  TimelineText,
  LabelTextContainer,
  Dot,
} from "./styles";

import CalendarImg from "@/assets/calendar.png";
import CalendarSvgImg from "@/assets/calendar.svg";

const Calender = () => {
  const weekTags = ["S", "M", "T", "W", "T", "F", "S"];

  let keys = [...Array(31).keys()].map((i, _) => i + 1);
  keys = ["", "", "", ...keys, ""];

  return (
    <Container>
      <Card>
        <CalendarCont>
          <StyledDayText>Day 28</StyledDayText>
          <TimelineText>07:10:55 left</TimelineText>
        </CalendarCont>
        <StyledImage src={CalendarSvgImg} alt="img" />
        <StyledImage img src={CalendarImg} alt="img" />
        <TagsCont>
          {weekTags.map((tag, _) => (
            <TagText key={tag}>{tag}</TagText>
          ))}
        </TagsCont>
        <LabelsCont>
          {keys.map((date, k) => (
            <LabelTextContainer key={date}>
              <LabelText>{date}</LabelText>
              {k > 2 && k < 34 && <Dot />}
            </LabelTextContainer>
          ))}
        </LabelsCont>
      </Card>
    </Container>
  );
};

export default Calender;
