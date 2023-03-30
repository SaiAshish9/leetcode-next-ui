import React from "react";
import { Container, Text } from "./styles";

const textContent = [
  {
    text: (
      <>
        <Text>
          Principles are best practices to follow to allow scalable architecture
          and software craftmanship.
        </Text>
        <Text>
          Design patterns are techniques about how to do the design and
          architect your code.
        </Text>
        <Text>
          Each design pattern has a different use case and is applicable to a
          different scenario.
        </Text>
      </>
    ),
  },
  {
    text: <></>,
  },
  {
    text: (
      <>
        <Text>
          Single Responsibility
        </Text>
        <Text>
          A class should have only one and only one reason to change.
        </Text>
        <Text>
          Open/Closed 
        </Text>
        <Text>
          Software entities should be open for extension but closed for modification.
        </Text>
        <Text>
            
        </Text>
      </>
    ),
  },
];

const Content = () => {
  return <Container>{textContent[2].text}</Container>;
};

export default Content;
