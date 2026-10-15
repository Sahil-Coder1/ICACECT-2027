import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

// Hide the static CMT acknowledgment after React mounts
// (crawlers will still see it in the raw HTML source)
const cmtAck = document.getElementById("cmt-acknowledgment");
if (cmtAck) cmtAck.style.display = "none";
