import React from "react";
import { Button, Container } from "./styles";

const Options = () => {
  const data = [
    {
      icon: null,
      text: "All Topics",
    },
    {
      icon: null,
      text: "Algorithms",
    },
    {
      icon: null,
      text: "Database",
    },
    {
      icon: null,
      text: "Shell",
    },
    {
      icon: null,
      text: "Concurrency",
    },
  ];

  return (
    <Container>
      {data.map((i, _) => (
        <Button highlighted={i.text !== "All Topics"} key={i.text}>
          {i.text}
        </Button>
      ))}
    </Container>
  );
};

export default Options;
