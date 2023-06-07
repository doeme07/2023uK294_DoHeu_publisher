import React from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ReactDOM, { Root } from "react-dom/client";
import reportWebVitals from "../../reportWebVitals";

const root = ReactDOM.createRoot(
    document.getElementById('root') as Root);
);

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </React.StrictMode>
);

reportWebVitals();