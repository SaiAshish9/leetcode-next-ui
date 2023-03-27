import React from "react";
import { Container, TagName } from "./styles";

const Tags = () => {
  const tags = [
    {
      tag: "Array",
      count: 1325,
    },
    {
      tag: "String",
      count: 604,
    },
    {
      tag: "Hash Table",
      count: 460,
    },
    {
      tag: "Dynamic Programming",
      count: 421,
    },
    {
      tag: "Math",
      count: 419,
    },
    {
      tag: "Sorting",
      count: 301,
    },
    {
      tag: "Greedy",
      count: 296,
    },
  ];

  return (
    <Container>
      {tags.map((i, _) => (
        <TagName key={i.tag}>{i.tag}</TagName>
      ))}
    </Container>
  );
};

export default Tags;
