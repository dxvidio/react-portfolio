import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from 'framer-motion'

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