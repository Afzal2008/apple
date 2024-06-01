import React from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Accessories from "./pages/Accessories";
import Store from "./pages/Store";
import IPhone from "./pages/IPhone";
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/accessories" element={<Accessories />}></Route>
          <Route path="/store" element={<Store/>}></Route>
          <Route path="/iPhone" element={<IPhone/>}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
