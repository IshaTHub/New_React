import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//import Practice from "./Practice.jsx";
import App from "./App.jsx";
// import "./tailwind.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
   <App />
  </StrictMode>
);
