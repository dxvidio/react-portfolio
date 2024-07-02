import { createContext, useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion } from 'framer-motion';
import '@dotlottie/player-component';
import React from 'react';

import "./App.scss"
import AnimatedRoutes from "./components/AnimatedRoutes.tsx";
import { AuroraBackground } from "./components/ui/aurora-background.tsx";

export const ThemeContext = createContext(null);

function App() {

   // useEffect(() => {
   // const screenWidth = visualViewport.width;

   // if (screenWidth > 1000) {
   //     document.querySelector("#background").autoplay = true;
   // }
   // }, []);
   const [theme, setTheme] = useState("light");
   function toggleTheme() {
      setTheme((curr) => (curr === "light" ? "dark" : "light"));
   };

   const location = useLocation();
   const isHome = location.pathname === '/';
    
   return <div className="App" id={theme}>
            {/* <ThemeContext.Provider value={{ theme, toggleTheme }}> */}
               {/* <Background/> */}
               <AuroraBackground>
               <div className="nav-wrapper">
                  <div className="nav-bar">
                     <div className="nav-left">
                           <NavLink className="logo" to='/'>
                              <img src="media/home.png" id="logo_img" width="45px" height="45px" alt=""/>
                           </NavLink>
                           { isHome && 
                           (<motion.div 
                              className="full-name" 
                              id="full-name"
                              initial={{opacity: 0}}
                              animate={{
                                 opacity: 1, 
                                 transition: {
                                       duration: 2,
                                       ease: 'backInOut'
                                 }
                              }}
                              exit={{opacity: 0}}>
                                 <div className="name">
                                       david lee
                                 </div>
                                 <div className="sub-name">
                                       software engineer & designer
                                 </div>
                           </motion.div> 
                           )}
                     </div>
                     <div className="nav-right">
                           <div className="theme-button">
                              <img src="media/theme.png" id="logo_img" onClick={() => toggleTheme()} width="45px" height="45px" alt=""/>
                           </div>
                     </div>
                  </div>
               </div>
               </AuroraBackground>
               <AnimatedRoutes/>
            {/* </ThemeContext.Provider> */}
         </div>;
}

export default App;
