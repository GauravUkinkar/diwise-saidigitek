import React, { useState } from "react";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../src/pages/Home';
import Header from "./Comp/Header";
import Services from "./pages/Services";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Service1 from "./pages/Service1";
import Footer from "./component/Footer";
import english from "./content/English";
import marathi from "./content/Marathi";
import Togglebtn from "./Comp/Togglebtn";
import Service2 from "./pages/Service2";
import ScrollTop from "./component/ScrollTop";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiesPolicy from "./pages/CookiesPolicy";
import Notfound from "./pages/Notfound";

function App() {
  const [language, setlanguage] = useState(english);
  const [toggle, settoggle] = useState(true);
  const toggleJsonData = () => {
    setlanguage(language === english ? marathi : english);
    settoggle(!toggle);
  };

  return (
    <>
      <BrowserRouter>
      <ScrollTop/>
      <Togglebtn toggle={toggleJsonData} />
      <Header data={language}/>
        <Routes>
          <Route path="/" element={<Home data={language}/>} ></Route>
          <Route path="/about" element={<About data={language}/>} ></Route>
          <Route path="/election_campaign_support" element={<Services data={language}/>} ></Route>
          <Route path="/social_media_support" element={<Service1 data={language}/>} ></Route>
          <Route path="/data_support" element={<Service2 data={language}/>} ></Route>
          <Route path="/gallery" element={<Gallery data={language}/>} ></Route>
          <Route path="/contact" element={<Contact data={language}/>} ></Route>
          <Route path="/privacy_policy" element={<PrivacyPolicy data={language}/>} ></Route>
          <Route path="/cookies_policy" element={<CookiesPolicy  data={language}/>} ></Route>
          <Route path="/*" element={<Notfound  data={language}/>} ></Route>
        
        </Routes>
        <Footer data={language}/>
      </BrowserRouter>
    </>
  );
}

export default App;
