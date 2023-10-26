import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/CounterPage";
import TestErrorBoundary from "./TestErrorBoundary";
import NotFound from "./Pages/NotFound";
import "./styles/App.css";
import "./styles/index.css";
import { ThemeContext } from "./Theme";
import RealErrorTest from "./RealErrorTest";


const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div className={`App ${theme}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/testError" element={<TestErrorBoundary />} />
          <Route path="*" element={<RealErrorTest/>} />
          <Route path="/notFound" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
