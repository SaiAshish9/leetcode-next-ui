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
  AnonymousSettingsButton,
  AnonymousRow,
  StyledImg,
  StyledPlanImg,
  PlanContent,
  PlanTitle,
  StudyPlanContent,
  PlanSubTitle,
  StyledArrowRightImg,
  StudyPlanRightContent,
} from "./styles";
import SettingsImg from "@/assets/settings.svg";
import StudyPlanImg from "@/assets/lc_sts.svg";
import ArrowRightImg from "@/assets/arrow_right.svg";

const SessionCard = () => {
  return (
    <SessionContainer>
      <Card>
        <Content>
          <SessionTopContainer>
            <SessionText>Session</SessionText>
            <AnonymousRow>
              <AnonymousButton>Anonymous</AnonymousButton>
              <AnonymousSettingsButton>
                <StyledImg alt="image" src={SettingsImg} />
              </AnonymousSettingsButton>
            </AnonymousRow>
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
      <Card>
        <Content>
          <StudyPlanContent>
            <StyledPlanImg src={StudyPlanImg} alt="plan" />
            <StudyPlanRightContent>
              <PlanContent>
                <PlanTitle>Study Plan</PlanTitle>
                <PlanSubTitle>Complete and win badges</PlanSubTitle>
              </PlanContent>
              <StyledArrowRightImg src={ArrowRightImg} alt="img" />
            </StudyPlanRightContent>
          </StudyPlanContent>
        </Content>
      </Card>
      <Card>
        <Content>
          <SessionText>Featured Lists</SessionText>
        </Content>
      </Card>
    </SessionContainer>
  );
};

export default SessionCard;
