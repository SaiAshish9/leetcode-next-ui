import React from "react";
import {
  HomeComponent,
  Content,
  TopLeftContainer,
  TopRightContainer,
} from "./styles";
import { Banner, Options, SessionCard, Tags } from "./components";

const HomeScreen = () => {
  return (
    <HomeComponent>
      <Content>
        <TopLeftContainer>
          <Banner />
          <Tags />
          <Options />
        </TopLeftContainer>
        <TopRightContainer>
          <SessionCard />
        </TopRightContainer>
      </Content>
    </HomeComponent>
  );
};

export default HomeScreen;
