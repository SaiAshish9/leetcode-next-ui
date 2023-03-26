import React from "react";
import {
  HomeComponent,
  Content,
  TopLeftContainer,
  TopRightContainer,
} from "./styles";
import { Banner, SessionCard } from "./components";

const HomeScreen = () => {
  return (
    <HomeComponent>
      <Content>
        <TopLeftContainer>
          <Banner />
        </TopLeftContainer>
        <TopRightContainer>
          <SessionCard />
        </TopRightContainer>
      </Content>
    </HomeComponent>
  );
};

export default HomeScreen;
