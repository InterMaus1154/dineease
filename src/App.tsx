
import './App.css';
import React, {FC} from 'react';
import {Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";

const P404 : FC = () =>{
  return(
      <h1>Page not found</h1>
  );
};

const App : FC = () =>{
  return(
    <div className="App">
      <Header></Header>
      <main>
          <Routes>
              <Route path={"*"} element={<P404 />}></Route>
              <Route path={"/"} element={<Home />}></Route>
              <Route path={"about-us"} element={<AboutUs />}></Route>
              <Route path={"contact"} element={<Contact />}></Route>
              <Route path={"privacy-policy"} element={<PrivacyPolicy />}></Route>
          </Routes>
      </main>
      <Footer></Footer>
    </div>
  );

};

export default App;
