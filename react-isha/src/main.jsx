import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Practice from "./Practice.jsx";
import "./tailwind.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Practice />
  </StrictMode>
);
