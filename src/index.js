import React from "react";
import { VelocityTransitionGroup } from "velocity-react";
import "velocity-animate";
import "velocity-animate/velocity.ui";
import PropTypes from "prop-types";

import Prism from "prismjs";
import "prismjs/themes/prism-dark.css";

const style = {
  container: { margin: "8px auto" },
  pre: {
    width: "100%",
    height: "100%",
    color: "rgb(255, 255, 255)",
    tabSize: "1.5em",
    background: "rgb(40, 44, 52)",
    borderRadius: 10,
    overflow: "auto",
    padding: "1rem 1.5rem",
  },
};

const toHtml = (code, type = "javascript") => {
  return Prism.languages[type]
    ? Prism.highlight(code, Prism.languages[type], type)
    : "";
};

const set = new Set();
let i = 0;

const everyLine = (code, type = "javascript") => {
  const allLines = code.split(/\r?\n/);
  set.clear();
  i = 0;
  return allLines.map((line) => {
    console.log("line: ", line);
    let key = line.trim();
    if (set.has(key)) {
      key = key + "_" + i;
    }
    set.add(key);
    return (
      <div
        dangerouslySetInnerHTML={{ __html: toHtml(line, type) }}
        key={key}
      ></div>
    );
  });
};

// let animationDuration = 500;

const enterAnimation = {
  animation: "transition.bounceLeftIn",
  drag: true,
};
const leaveAnimation = {
  animation: "transition.bounceLeftOut",
  drag: true,
};

const CodeDance = (props) => {
  return (
    <div style={Object.assign({}, style.container, props.containerStyle)}>
      <pre style={style.pre}>
        <code>
          <VelocityTransitionGroup
            enter={enterAnimation}
            leave={leaveAnimation}
          >
            {everyLine(props.code, props.type)}
          </VelocityTransitionGroup>
        </code>
      </pre>
    </div>
  );
};

CodeDance.prototype = {
  code: PropTypes.string.isRequired,
  containerStyle: PropTypes.object,
};

export default React.memo(CodeDance);
