import styled from "styled-components";
import Editor from "@monaco-editor/react";

export const StyledMonacoEditor = styled(Editor)`
  &::-webkit-scrollbar {
    display: none !important;
  }
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
`;