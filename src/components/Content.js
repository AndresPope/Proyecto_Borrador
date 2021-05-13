import React from "react";
import "@awsui/global-styles/index.css";
import "./styles.css";

import Form from "./Form";

const RandomBar = () => {
  return <div style={{ height: 41, backgroundColor: "blue" }}>Some bar</div>;
};

export default function Content() {
  return (
    <div id="b" className="pad-top bad-bot">
      <div
        id="h"
        style={{
          position: "fixed",
          top: 0,
          height: "auto !important",
          zIndex: 1003,
          margin: 0,
          padding: 0,
          border: 0,
          width: "100%",
        }}
      >
        <RandomBar />
      </div>
      <div id="cc">
        <Form />
      </div>
    </div>
  );
}
