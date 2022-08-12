import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// import "./mobx-use/1.observer";
// import "./mobx-use/2.autorun";
// import "./mobx-use/3.makeObservable";
// import "./mobx-use/4.computed";
// import "./mobx-use/5.actions";
// import "./mobx-use/6.flow";
// import "./mobx-use/7.bound";
import "./mobx-use/8.makeAutoObservable";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

import { observable } from "mobx";
