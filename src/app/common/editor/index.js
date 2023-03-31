import React from "react";
import { StyledMonacoEditor } from "./styles";
import Formatter from "auto-format";

const Editor = ({ value, height }) => {
  const options = {
    readOnly: true,
    minimap: { enabled: false },
    overviewRulerLanes: 0,
    wordWrap: "on",
    lineNumbers: "off",
    glyphMargin: false,
    folding: false,
    lineDecorationsWidth: 0,
    tabSize: 2,
    lineNumbersMinChars: 0,
    scrollbar: {
      vertical: "hidden",
      horizontal: "hidden",
      handleMouseWheel: false,
    },
    autoIndent: true,
    formatOnPaste: true,
    formatOnType: true,
  };

  return (
    <StyledMonacoEditor
      theme="vs-dark"
      height={height ?? "18rem"}
      defaultLanguage="java"
      options={options}
      value={value}
    />
  );
};

export default Editor;
