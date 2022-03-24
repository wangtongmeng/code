import React from "react";
import ReactDOM from "react-dom";

import { FixedSizeList as List } from "react-window";
import "./reactWindow.css";

const Row = ({ index, style }) => <div style={style}>Row {index}</div>;

const Example = () => (
  <List height={150} itemCount={1000} itemSize={35} width={300}>
    {Row}
  </List>
);

ReactDOM.render(<Example />, document.getElementById("root"));
