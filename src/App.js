import { createContext, useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom"
import { motion } from 'framer-motion';
import '@dotlottie/player-component';

import "./App.scss"
import Background from "./components/Background";
import AnimatedRoutes from "./components/AnimatedRoutes";

export const ThemeContext = createContext(null);

function App() {

  useEffect(() => {
  const screenWidth = visualViewport.width;

  if (screenWidth > 1000) {
    document.querySelector("#background").autoplay = true;
  }
  }, []);

  const [theme, setTheme] = useState("dark");
  function toggleTheme() {
    setTheme((curr) => (curr === "dark" ? "light" : "dark"));
  };

  const location = useLocation();
  const isHome = location.pathname === '/';
    
  return<div classNameName="App" id={theme}>
          <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <Background/>
            <div className="nav-wrapper">
              <div className="nav-bar">
                <div className="nav-left">
                  <NavLink className="logo" exact="true" activeclassname="active" to='/'>
                    <img src="media/home.png" id="logo_img" alt=""/>
                  </NavLink>
                    { isHome && 
                    (<motion.div 
                      className="full-name" 
                      initial={{opacity: 0}}
                      animate={{
                        opacity: 1, 
                        transition: {
                          duration: 2,
                          ease: 'backInOut'
                        }
                      }}
                      exit={{opacity: 0}}
                      >
                        <div className="name">david lee</div>
                        <div className="sub-name">software engineer & designer</div>
                    </motion.div> 
                    )}
                </div>
                <div className="nav-right">
                  <div className="theme-button">
                    <img src="media/theme.png" id="logo_img" onClick={() => toggleTheme()} alt=""/>
                  </div>
                </div>
              </div>
            </div>
            <AnimatedRoutes/>
          </ThemeContext.Provider>
        </div>;
}

export default App;
