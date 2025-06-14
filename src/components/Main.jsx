import React, { useState } from "react";
import "./style.css";
import NavBar from "./NavBar";
import Footer from "./Footer";
import About from "../assets/AboutMe.png";
import resume from "../assets/resume.png";
import services from "../assets/services.png";
import projects from "../assets/projects.png";
import mobilevideo from "../assets/homemobile.mp4";
import pcvideo from "../assets/homePC.mp4";

function Main() {
    const [openSection, setOpenSection] = useState(null);

    const sections = [
        {
            key: "about",
            img: About,
            alt: "About Me",
            title: "About Me",
            content: "Brief description about me."
        },
        {
            key: "resume",
            img: resume,
            alt: "Resume",
            title: "Resume",
            content: "My professional experience and education."
        },
        {
            key: "services",
            img: services,
            alt: "Services",
            title: "Services",
            content: "What I can offer."
        },
        {
            key: "projects",
            img: projects,
            alt: "Projects",
            title: "Projects",
            content: "Some of my work."
        }
    ];

    const handleBannerClick = (key) => {
        setOpenSection(openSection === key ? null : key);
    };

    return (
        <>
            <NavBar />
            <div className="main">
                <div className="heading-container">
                    <video autoPlay loop muted className="mobile-video">
                        <source src={mobilevideo} type="video/mp4" />
                    </video>
                    <video autoPlay loop muted className="pc-video">
                        <source src={pcvideo} type="video/mp4" />
                    </video>
                </div>
                {sections.map(section => (
                    <div className="container" key={section.key}>
                        <img
                            src={section.img}
                            alt={section.alt}
                            className="section-banner"
                            style={{ cursor: "pointer" }}
                            onClick={() => handleBannerClick(section.key)}
                        />
                        {openSection === section.key && (
                            <div className="section-text">
                                <h2>{section.title}</h2>
                                <p>{section.content}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <Footer />
        </>
    );
}

export default Main;