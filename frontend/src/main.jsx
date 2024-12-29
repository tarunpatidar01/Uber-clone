import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import CaptainContext from "./context/CaptainContext.jsx";
import { UserDataProvider } from "./context/userContext.jsx";
import { SocketProvider } from "./context/SocketContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CaptainContext>
      <UserDataProvider>
        <SocketProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </SocketProvider>
      </UserDataProvider>
    </CaptainContext>
  </StrictMode>
);