import "./styles/styles.scss"
import '@dotlottie/player-component';
import { createContext } from "react";
import { useState } from "react";
import { useEffect } from 'react';

export const ThemeContext = createContext(null);

function App() {

    useEffect(() => {
    const screenWidth = visualViewport.width;

    if (screenWidth > 1000) {
        document.querySelector("#background").autoplay = true;
    }
    }, []);

    function see_img(a) {
        document.getElementById(a).style.opacity = 1;
    }   
    function hide_img(a) {
        document.getElementById(a).style.opacity = 0;
    }   
    function see_page(a) {
        document.getElementById('home-page').style.height = 0;
        document.getElementById('home-page').style.opacity = 0;
        document.getElementById('full-name').style.opacity = 0;
        setTimeout(() => show_page(a), 500);
    }   
    function show_page(b) {
        document.getElementById(b).style.height = "100%";
        document.getElementById(b).style.opacity = 1;
    }   
    function go_home() {
        document.getElementById('about-page').style.height = 0;
        document.getElementById('about-page').style.opacity = 0;
        document.getElementById('projects-page').style.height = 0;
        document.getElementById('projects-page').style.opacity = 0;
        document.getElementById('contact-page').style.height = 0;
        document.getElementById('contact-page').style.opacity = 0;
        setTimeout(() => show_home(), 600);
    }
    function show_home() {
        document.getElementById('full-name').style.opacity = 1;
        document.getElementById('home-page').style.height = "100%";
        document.getElementById('home-page').style.opacity = 1;
    }   

    const [theme, setTheme] = useState("light");
    function toggleTheme() {
        setTheme((curr) => (curr === "light" ? "dark" : "light"));
    };

  return <div className="App" id={theme}>
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
    <div class="video-background">
        <video src="media/greekyogurt.mp4" id="background" poster="media/poster.png" loop muted controls={false} />
    </div>
    <div class="photo-background">
        <img src="media/poster.png" alt=""/>
    </div>
    <div class="nav-wrapper">
        <div class="nav-bar">
            <div class="nav-left">
                <div class="logo">
                    <img src="media/home.png" id="logo_img" width="45px" height="45px" alt="" onClick={() => go_home()}/>
                </div>
                <div class="full-name" id="full-name">
                    <div class="name">
                        DAVID LEE
                    </div>
                    <div class="sub-name">
                        software engineer & designer
                    </div>
                </div>
            </div>
            <div class="nav-right">
                <div class="theme-button">
                    <img src="media/theme.png" id="logo_img" onClick={() => toggleTheme()} width="45px" height="45px" alt=""/>
                </div>
            </div>
        </div>
    </div>
    <main class="content">
        <section class="home-page" data-page="home" id="home-page">
            <div class="menu">
                <div class="menu-content">
                    <div class="link-wrapper">
                        <button onClick={() => see_page('about-page')}>about</button>
                    </div>

                    <div class="link-wrapper">
                        <button onClick={() => see_page('projects-page')}>projects</button>
                    </div>

                    <div class="link-wrapper">
                        <button  onClick={() => see_page('contact-page')}>contact</button>
                    </div> 

                    <div class="dxvid-wrapper">
                        <a href="https://open.spotify.com/artist/4fEApuw5C7FRsOz0Y0ODSy?si=eVnxfyMGQzSb0KUSvb9Z8Q" target="_blank" rel="noreferrer">dxvid</a>
                    </div>
                </div>
            </div>
        </section>

        <section class="about-page" data-page="about" id="about-page">
            <div class="about">
                <div class="about-left">
                    <div class="left-text-wrapper">
                        <div class="left-text">
                            <div class="page-heading">
                                about
                            </div>
                            <hr/>
                            <div class="about-text">
                                Hi, my name is David Lee and I am a third year Computer Science major at UCLA. 
                                As of 2024, my passion for ideating and creating has landed me opportunities to work with real estate company Travel Oasis and GRAMMY-nominated producer John Conte Jr. to develop software products in the domain of marketing and artificial intelligence. 
                                I also enjoy engineering music and graphic design, which I use often in my work as a software developer.
                            </div>
                            <div class="about-resume">
                                <a href="media/about/DavidLee_Resume.pdf" target="_blank" rel="noreferrer">
                                    <img src="media/about/download.png" width="30px" height="30px" alt=""/> resume 
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="about-right">
                    <div class="about-picture">
                        <img src="media/about/1.1.PNG" id="about_img" width="370px" height="370px" style={{ borderRadius: '20% 5% 20% 5%' }} alt=""/>
                    </div>
                </div>
            </div>
        </section>

        <section class="projects-page" data-page="projects" id="projects-page">
            <div class="projects">
                <div class="projects-left-wrapper">
                    <div class="projects-left">
                        <div class="projects-left-menu">
                            <div class="page-heading">
                                projects
                            </div>
                            <hr/>
                            <a href="media/projects/copro/soon.png" target="_blank" rel="noreferrer" onMouseOver={() => see_img('copro')} onMouseOut={() => hide_img('copro')}>
                                <div class="project-title">
                                    <div class="project-title-left">
                                        COPRO AI
                                    </div>
                                    <div class="project-title-right">
                                        In Development
                                    </div>
                                </div>
                            </a>
                            <hr/>
                            <a href="https://traveloasis-us.com/" target="_blank" rel="noreferrer" onMouseOver={() => see_img('traveloasis')} onMouseOut={() => hide_img('traveloasis')}>
                                <div class="project-title">
                                    <div class="project-title-left">
                                        Travel Oasis
                                    </div>
                                    <div class="project-title-right">
                                        Web Development
                                    </div>
                                </div>
                            </a>
                            <hr/>
                            <a href="https://github.com/dxvidio/bruin-rides" target="_blank" rel="noreferrer" onMouseOver={() => see_img('bruinrides')} onMouseOut={() => hide_img('bruinrides')}>
                                <div class="project-title">
                                    <div class="project-title-left">
                                        Bruin Rides
                                    </div>
                                    <div class="project-title-right">
                                        Full Stack Development
                                    </div>
                                </div>
                            </a>
                            <hr/>
                            <a href="https://daw.digital/" target="_blank" rel="noreferrer" onMouseOver={() => see_img('daw')} onMouseOut={() => hide_img('daw')}>
                                <div class="project-title">
                                    <div class="project-title-left">
                                        DAW.digital
                                    </div>
                                    <div class="project-title-right">
                                        Web Development
                                    </div>
                                </div>
                            </a>
                            <hr/>
                            <a href="https://github.com/dxvidio/HEADroom" target="_blank" rel="noreferrer" onMouseOver={() => see_img('headroom')} onMouseOut={() => hide_img('headroom')}>
                                <div class="project-title">
                                    <div class="project-title-left">
                                        HEADroom
                                    </div>
                                    <div class="project-title-right">
                                        Software Development
                                    </div>
                                </div>
                            </a>
                        </div>
                        </div>
                </div>
                
                <div class="projects-right">
                    <div class="project-image" id="copro">
                        <img src="media/projects/copro/copro.png" width="400" height="400" style={{ borderRadius: '20% 5% 20% 5%' }} alt=""/>
                    </div>
                    <div class="project-image" id="traveloasis">
                        <img src="media/projects/traveloasis/traveloasis.png" width="400" height="400" style={{ borderRadius: '20% 5% 20% 5%' }} alt=""/>
                    </div>
                    <div class="project-image" id="bruinrides">
                        <img src="media/projects/bruinrides/bruinrides.png" width="400" height="400" style={{ borderRadius: '20% 5% 20% 5%' }} alt=""/>
                    </div>
                    <div class="project-image" id="daw">
                        <img src="media/projects/daw.digital/daw.png" width="400" height="400" style={{ borderRadius: '20% 5% 20% 5%' }} alt=""/>
                    </div>
                    <div class="project-image" id="headroom">
                        <img src="media/projects/headroom/headroom.png" width="400" height="400" style={{ borderRadius: '20% 5% 20% 5%' }} alt=""/>
                    </div>
                </div>
            </div>
        </section>

        <section class="contact-page" data-page="contact" id="contact-page">
            <div class="contact">
                <div class="contact-left-wrapper">
                    <div class="contact-left">
                        <div class="contact-menu">
                            <div class="page-heading">
                                contact
                            </div>
                            <hr/>
                            <div class="social-menu">
                                <div class="social-icon">
                                    <a href="mailto:davidlee1813@gmail.com" target="_blank" rel="noreferrer">
                                        <dotlottie-player src="https://lottie.host/3978fdde-125d-4adc-8a22-ee3f55ded3d8/JciEl2Uhgc.json" class="social-icon-img" background="transparent" speed="1" alt="by Thao Phan on IconScout" hover loop/>
                                    </a>
                                </div>
                                <div class="social-icon">
                                    <a href="https://www.linkedin.com/in/davidlee1300/" target="_blank" rel="noreferrer">
                                        <dotlottie-player src="https://lottie.host/bf7d4be5-78a6-4d3a-8c06-f102a4be7e6a/afJQBZExKe.json" class="social-icon-img" background="transparent" speed="1" alt="by Thao Phan on IconScout" hover loop/>
                                    </a>
                                </div>
                                <div class="social-icon">
                                    <a href="https://www.instagram.com/dxvidio/" target="_blank" rel="noreferrer">
                                        <dotlottie-player src="https://lottie.host/cea36131-1cda-4242-8c9c-1be6a406b97b/5m0Q2rMCT1.json" class="social-icon-img" background="transparent" speed="1" alt="by Thao Phan on IconScout" hover loop/>
                                    </a>
                                </div>
                                <div class="social-icon">
                                    <a href="https://github.com/dxvidio" target="_blank" rel="noreferrer">
                                        <dotlottie-player src="https://lottie.host/4ac9cae1-0a29-444b-827e-00ae6eeb1c3d/hSsxfL12HS.json" class="social-icon-img" background="transparent" speed="1" alt="by Thao Phan on IconScout" hover loop/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    </ThemeContext.Provider>
  </div>;
}

export default App;
