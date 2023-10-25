import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/CounterPage";
import TestErrorBoundary from "./TestErrorBoundary";
import NotFound from "./Pages/404-Page";
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
          <Route path="/" element={<Home />} 
            {
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}/>
          <Route path="/testError" element={<TestErrorBoundary />}
            {
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}></Route>
          <Route path="/error" element={<ErrorBoundaryTest />} {
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}/>
          <Route path="*" element={<NotFound />} {
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}/>
        </Routes>
      </div>
    </>
  );
};

export default App;
