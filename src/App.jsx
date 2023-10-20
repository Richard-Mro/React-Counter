import React from "react";
import { Route, Routes} from "react-router-dom";
import Home from "./Home";
import TestErrorBoundary from "./TestErrorBoundary"
import NotFound from "./404-Page";
import './App.css'

const ErrorBoundaryTest = () => {
  throw new Error("Error Boundary");
};

const App = () => {
  return (
    <>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/testError" element={<TestErrorBoundary/>}></Route>
        <Route path="/error" element={<ErrorBoundaryTest />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
