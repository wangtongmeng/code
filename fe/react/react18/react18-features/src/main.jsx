import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import NewBatchUpdatePage from "./routes/NewBatchUpdatePage";
import SuspensePage from "./routes/SuspensePage";
import StartTransitionPage from "./routes/StartTransitionPage";
import UpdatePriorityPage from "./routes/UpdatePriorityPage";
import UseDeferredValuePage from "./routes/UseDeferredValuePage";
import UseTransitionPage from "./routes/UseTransitionPage";
// import OldBatchUpdatePage from "./routes/OldBatchUpdatePage";
// import App from "./App.jsx";
// import './index.css'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    {/* <NewBatchUpdatePage /> */}
    {/* <SuspensePage /> */}
    {/* <StartTransitionPage /> */}
    {/* <UpdatePriorityPage /> */}
    {/* <UseDeferredValuePage /> */}
    <UseTransitionPage />
  </StrictMode>
);
