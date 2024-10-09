import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from 'framer-motion'

import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import FriendActivity from "./Projects/FriendActivity";
import TipIt from "./Projects/TipIt"
import TipItPrivacyPolicy from "./Projects/TipItPrivacyPolicy"


function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/projects/friend-activity" element={<FriendActivity/>}/>
        <Route path="/projects/tipit" element={<TipIt/>}/>
        <Route path="/projects/tipit/privacy-policy" element={<TipItPrivacyPolicy/>}/>
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;