import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import Content from "./component";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div style={{ display: "flex", flexDirection: "column", gap: "50px" }}>
      <App />
      <Content />
    </div>
  </StrictMode>
);
