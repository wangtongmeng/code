import React from "react";
import AppCss from "./App.module.css";
const { useState } = React;
const App = () => {
  const [title, setTitle] = useState("短标题");
  const style1 = {
    color: "red",
  };
  const style2 = {
    color: "green",
  };
  return (
    <div>
      <h3 className={AppCss.title} style={title === "短标题" ? style1 : style2}>
        {title}
      </h3>
      <button
        onClick={() =>
          setTitle(
            title === "短标题" ? "长标题长标题长标题长标题长标题" : "短标题"
          )
        }
      >
        切换
      </button>
    </div>
  );
};

export default App;
