import React from "react";
import { App } from "./App";
import "./styles/styles.scss";
import { createRoot } from "react-dom/client";

const domNode = document.getElementById("root");
const root = createRoot(domNode!);
root.render(<App />);
