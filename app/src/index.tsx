import React from "react";
import ReactDOM from "react-dom/client";
import { AuthContextProvider } from "./context/authContext";
import { App } from "./ui/App";
import { LoaderContextProvider } from "./context/loaderContext";


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <LoaderContextProvider>
      <AuthContextProvider>
        <App/>
      </AuthContextProvider>
    </LoaderContextProvider>
  </React.StrictMode>
);
