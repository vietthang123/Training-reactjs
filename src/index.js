import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import Loop from "./loopInside";
import LevelChild from "./levelChild";
import CheckBox from "./checkboxAndUncheckbox";
import DongThoai from "./lyricDongThoai";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    {/* <App />
    <br />
    <Loop />
    <br />
    <LevelChild />
    <br />
    <CheckBox /> */}
    <br />
    <DongThoai />
  </StrictMode>
);
