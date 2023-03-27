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
  FeaturedContent,
  FeaturedContentItem,
  FeaturedStyledImg,
  FeaturedStyledText,
  ShowMoreText,
  StyledArrowDownImg,
  ShowMoreContent,
  LockImage,
  LockImageContainer,
  FeaturedContentText,
} from "./styles";
import SettingsImg from "@/assets/settings.svg";
import StudyPlanImg from "@/assets/lc_sts.svg";
import ArrowRightImg from "@/assets/arrow_right.svg";
import ArrowDownImg from "@/assets/arrow_down.svg";
import LockSvg from "@/assets/lock.svg";

import AssetImg1 from "@/assets/asset1.png";
import AssetImg2 from "@/assets/asset2.png";
import AssetImg3 from "@/assets/asset3.png";

const SessionCard = () => {
  const assetInfo = [
    {
      img: AssetImg1,
      text: "Top Interview Questions",
    },
    {
      img: AssetImg2,
      text: "Top 100 Liked Questions",
    },
    {
      img: AssetImg3,
      text: "Top Facebook Questions",
      locked: true,
    },
  ];

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
          <FeaturedContentText>Featured Lists</FeaturedContentText>
          <FeaturedContent>
            {assetInfo.map((i, _) => (
              <FeaturedContentItem key={i.text}>
                <FeaturedStyledImg src={i.img} alt="image" />
                <LockImageContainer>
                  <FeaturedStyledText>{i.text}</FeaturedStyledText>
                  {i.locked && <LockImage src={LockSvg} alt="lock" />}
                </LockImageContainer>
              </FeaturedContentItem>
            ))}
          </FeaturedContent>
          <ShowMoreContent>
            <StyledArrowDownImg src={ArrowDownImg} alt="img" />
            <ShowMoreText>Show More</ShowMoreText>
          </ShowMoreContent>
        </Content>
      </Card>
    </SessionContainer>
  );
};

export default SessionCard;
