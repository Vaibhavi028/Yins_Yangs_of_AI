import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./navbar.js";
import Home from "./home.jsx";
import Surveys from "./surveys.js";
import Researchs from "./researchs.js";
import Interviews from "./interviews.js";

const App = () => {
 return (
   <Router>
     <Navbar />
     <main className="main-content">
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/surveys" element={<Surveys />} />
         <Route path="/researches" element={<Researchs />} />
         <Route path="/interviews" element={<Interviews />} />
       </Routes>
     </main>
   </Router>
 );
};

export default App;
