import React, { useRef } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";

import "./App.scss";
import Cartaz from "./pages/Cartaz/Cartaz";
import Precario from "./pages/Precario/Precario";
import Cashless from "./pages/Cashless/Cashless";
import Ecocopo from "./pages/Ecocopo/Ecocopo";
import ComoChegar from "./pages/ComoChegar/ComoChegar";

const App = () => {
  const appRef = useRef(null);
  return (
    <div className="app" ref={appRef}>
      <Header appRef={appRef} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/cartaz" element={<Cartaz />} />
        <Route exact path="/precario" element={<Precario />} />
        <Route exact path="/comochegar" element={<ComoChegar />} />
        <Route exact path="/ecocopo" element={<Ecocopo />} />
        <Route exact path="/cashless" element={<Cashless />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
