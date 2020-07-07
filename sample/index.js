import React from "react";
import reactDOM from "react-dom";

import CodeDance from "../src/index";

import codes from "./codes";

const styles = {
  buttons: {
    margin: "5px auto",
    textAlign: "center",
  },
  button: {
    fontSize: "1.2rem",
    margin: "0 24px",
    padding: "5px 10px",
  },
};

const App = (props) => {
  let [index, setValue] = React.useState(0);
  return (
    <div>
      <div style={styles.buttons}>
        <button onClick={() => setValue((index + 1) % 4)} style={styles.button}>
          next
        </button>
        <button onClick={() => setValue((index - 1) % 4)} style={styles.button}>
          pre
        </button>
      </div>

      <CodeDance
        containerStyle={{ width: 780, height: 500 }}
        code={codes[index]}
      ></CodeDance>
    </div>
  );
};

reactDOM.render(<App />, document.body);
