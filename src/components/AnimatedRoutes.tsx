import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import React from 'react';

import Home from './Home/Home.tsx';
import About from './About/About.tsx';
import Projects from './Projects/Projects.tsx';
import Contact from './Contact/Contact.tsx';

function AnimatedRoutes() {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
        </AnimatePresence>
    );
}

export default AnimatedRoutes;