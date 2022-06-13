import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home";
import { MainGlobal } from "./ContexGlobal/Global";

const App = () => {
  return (
    <MainGlobal>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </MainGlobal>
  );
};

export default App;
