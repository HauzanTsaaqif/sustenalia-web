import React from 'react';
import './index.css';

import App from './App';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import GeneratePage from './pages/GeneratePage';

import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  StyledEngineProvider,
} from "@mui/material";

import "./global.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login-page",
    element: <LoginPage />,
  },
  {
    path: "/signup-page",
    element: <SignupPage />,
  },
  {
    path: "/generate-page",
    element: <GeneratePage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
