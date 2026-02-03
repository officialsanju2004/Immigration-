


import { Routes,Route, BrowserRouter } from "react-router-dom";

import SkyBeatImmigration from "./Components/Immigration";
import USAVisa from "./Components/USa";
import UKVisa from "./Components/Uk";
import EuropeVisa from "./Components/Europe";
import AustraliaVisa from "./Components/Aus";
import CanadaVisa from "./Components/Canada";
import NewZealandVisa from "./Components/NewZealand";
import AboutPage from "./Components/About";
import ContactPage from "./Components/Contact";
export default function AppRouter() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<SkyBeatImmigration/>} />
        <Route path="/usa" element={<USAVisa/>} />

        <Route path="/uk" element={<UKVisa/>} />

        <Route path="/eu" element={<EuropeVisa/>} />

        <Route path="/aus" element={<AustraliaVisa/>} />

        <Route path="/can" element={<CanadaVisa/>} />

        <Route path="/new" element={<NewZealandVisa/>} />
        <Route path="/contact" element={<ContactPage/>} />

        <Route path="/about" element={<AboutPage/>} />


         
       

      </Routes>
    
</BrowserRouter>
  );
}

