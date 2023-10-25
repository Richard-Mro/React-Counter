import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/CounterPage";
import TestErrorBoundary from "./TestErrorBoundary";
import NotFound from "../Pages/404-Page";
import "./styles/App.css";
import "./styles/index.css";

import { ThemeContext } from "./Theme";

const ErrorBoundaryTest = () => {
  throw new Error("Error Boundary");
};

const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div className={`App ${theme}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/testError" element={<TestErrorBoundary />}/>
          <Route path="/error" element={<ErrorBoundaryTest />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
