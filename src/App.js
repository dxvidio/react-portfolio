import "./App.scss"
import '@dotlottie/player-component';
import { createContext, useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom"
import Background from './components/Background/Background'
import AnimatedRoutes from "./components/AnimatedRoutes";
import { motion } from 'framer-motion';

export const ThemeContext = createContext(null);

function App() {

    useEffect(() => {
    const screenWidth = visualViewport.width;

    if (screenWidth > 1000) {
        document.querySelector("#background").autoplay = true;
    }
    }, []);
    const [theme, setTheme] = useState("light");
    function toggleTheme() {
        setTheme((curr) => (curr === "light" ? "dark" : "light"));
    };

    const location = useLocation();
    const isHome = location.pathname === '/';
    
  return <div classNameName="App" id={theme}>
            <ThemeContext.Provider value={{ theme, toggleTheme }}>
                <Background/>
                <div className="nav-wrapper">
                    <div className="nav-bar">
                        <div className="nav-left">
                            <NavLink className="logo" exact="true" activeclassname="active" to='/'>
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
                                        DAVID LEE
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
                <AnimatedRoutes/>
            </ThemeContext.Provider>
        </div>;
}

export default App;
