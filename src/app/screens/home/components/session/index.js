import React from "react";
import {
  SessionContainer,
  Card,
  SessionText,
  Content,
  LevelText,
  ScoreText,
  TotalText,
  TextContainer,
  ScoreTextContainer,
  Circle,
  StatsContainer,
  StatsContent,
  SessionTopContainer,
  AnonymousButton,
} from "./styles";

const SessionCard = () => {
  return (
    <SessionContainer>
      <Card>
        <Content>
          <SessionTopContainer>
            <SessionText>Session</SessionText>
            <AnonymousButton>Anonymous</AnonymousButton>
          </SessionTopContainer>
          <StatsContainer>
            <Circle />
            <StatsContent>
              <TextContainer>
                <LevelText easy>Easy</LevelText>
                <ScoreTextContainer>
                  <ScoreText>637 </ScoreText>
                  <TotalText>/637</TotalText>
                </ScoreTextContainer>
              </TextContainer>
              <TextContainer>
                <LevelText medium>Medium</LevelText>
                <ScoreTextContainer>
                  <ScoreText>1386 </ScoreText>
                  <TotalText>/1386</TotalText>
                </ScoreTextContainer>
              </TextContainer>
              <TextContainer>
                <LevelText>Hard</LevelText>
                <ScoreTextContainer>
                  <ScoreText>580 </ScoreText>
                  <TotalText>/580</TotalText>
                </ScoreTextContainer>
              </TextContainer>
            </StatsContent>
          </StatsContainer>
        </Content>
      </Card>
      <Card />
      <Card />
    </SessionContainer>
  );
};

export default SessionCard;
