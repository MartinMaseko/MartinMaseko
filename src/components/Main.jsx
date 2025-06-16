import React, { useState } from "react";
import "./style.css";
import NavBar from "./NavBar";
import Footer from "./Footer";
import About from "../assets/AboutMe.png";
import resume from "../assets/resume.png";
import services from "../assets/services.png";
import projects from "../assets/projects.png";
import mobilegif from "../assets/homemobile.gif";
import pcvideo from "../assets/homePC.mp4";
import soccerImg from "../assets/soccer.png";
import tapeImg from "../assets/tape.png";
import castImg from "../assets/cast.png";
import resumeimg from "../assets/resumeimg.JPG";

function Main() {
    const [openSection, setOpenSection] = useState(null);

    const sections = [
        {
            key: "about",
            img: About,
            alt: "About Me",
            title: "Your Digital Growth Partner",
            content: <p>As a seasoned entrepreneur with 12 years of experience and a diverse background spanning from wholesale, 
                government projects, and direct B2B sales, I bring a unique blend of street-smart 
                business acumen and cutting-edge digital expertise to the table. 
                My journey began straight out of high school, building a hair product 
                wholesale business that supplied over 500 salons in the township – a testament 
                to my innate understanding of market needs and scalable operations.<br></br><br></br> 
                I then transitioned to managing a significant government project for the Department of Human Settlements, 
                where I honed my skills in project management, data integrity, and community engagement, 
                even training local staff on specialized software. This was followed by a successful venture 
                in direct sales, supplying township spaza shops and perfecting my approach to 
                business-to-business sales.<br></br><br></br>My entrepreneurial drive has always been fueled by my passion to fund my music career.
                Later I produced two kwaito albums and Hip Hop E.p including selling instrumentals online I delved into the music industry 
                as an artist "Staxx Luciano", Sound engineer & producer and manager running artist marketing campaigns & events.<br></br><br></br>
                This pursuit led me to deeply explore the intersection of technology and the music industry, 
                from the evolution of music consumption to the power of digital platforms. 
                This curiosity sparked a career pivot, where I leveraged my natural entrepreneurial skills and 
                acquired extensive knowledge in social media marketing , web analytics , and more recently, full-stack development.<br></br><br></br>
                This diverse practical experience and continuous learning enable me to see the bigger picture. 
                I can quickly assess your business, identify the most impactful tech tools and resources to 
                boost efficiency and revenue, and strategize how to effectively drive traffic. 
                What truly sets me apart is my ability to dive into your data, refining strategies for 
                optimal results.<br></br><br></br> I'm passionate about SaaS solutions, the transformative power of music 
                industry technology, and empowering SME businesses to thrive in today's rapidly evolving 
                digital landscape. Let's unlock your business's full potential together.</p>
        },
        {
            key: "services",
            img: services,
            alt: "Services",
            content: <div className="services-content">
                        <div className="services-text">
                            <div className="service-icon">
                                <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/programming.png" alt="programming"/>
                                <h3 className="service-headings">Website Design & Development</h3>
                            </div>
                            <p>Launch Your Online Presence, Effortlessly. I design and build professional, 
                                user-friendly websites without the High Cost. Get a custom-designed, simple 
                                yet effective website that clearly communicates your value and connects with your audience, 
                                all within your budget.</p>
                        </div>
                        <div className="services-text">
                            <div className="service-icon">
                                <img width="94" height="94" src="https://img.icons8.com/external-flaticons-flat-flat-icons/94/external-saas-big-data-flaticons-flat-flat-icons.png" alt="external-saas-big-data-flaticons-flat-flat-icons"/>
                                <h3 className="service-headings">Saas Solutions</h3>
                            </div>
                            <p>Elevate Your Business with Smart SaaS Solutions. I'll connect you with the right cloud-based tools to automate tasks, 
                                streamline operations, and drive growth, without the complexity of enterprise systems. 
                                Your simple website, empowered by intelligent software.</p>
                        </div>
                        <div className="services-text">
                            <div className="service-icon">
                                <img width="94" height="94" src="https://img.icons8.com/external-flaticons-flat-flat-icons/94/external-web-analytics-ux-and-ui-flaticons-flat-flat-icons.png" alt="external-web-analytics-ux-and-ui-flaticons-flat-flat-icons"/>
                                <h3 className="service-headings">Web Analytics Setup & Reporting</h3>
                            </div>
                            <p>Stop Guessing, Start Growing. I don't just track data; I transform it into actionable insights. Through meticulous Web Analytics Setup & Reporting, 
                                I uncover precisely how users interact with your site, allowing me to refine strategies and web applications that directly boost your traffic, 
                                enhance user experience, and drive measurable revenue.</p>
                        </div>
                        <div className="services-text">
                            <div className="service-icon">
                                <img width="94" height="94" src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/94/external-social-media-marketing-digital-nomad-flaticons-lineal-color-flat-icons-2.png" alt="external-social-media-marketing-digital-nomad-flaticons-lineal-color-flat-icons-2"/>
                                <h3 className="service-headings">Social Media Strategy & Marketing</h3>
                            </div>
                            <p>Beyond Posts: I'll architect your Social Media success with a smart strategy and the right technology. 
                                I'll guide you to implement the ideal web tools, resources, and platforms that align with your 
                                unique business goals, ensuring every social effort translates into measurable growth and results.</p>
                        </div>
                    </div>
        },
        {
            key: "projects",
            img: projects,
            alt: "Projects",
            title: "SaaS Products",
            content: <div className="projects-content">
                        <div className="projects">
                            <div className="projects-heading">
                                <a href="https://napoliclubbapp.netlify.app/" target="_blank" rel="noopener noreferrer">
                                    <img src={soccerImg} alt="Football Club Management System" className="projects-image" />
                                </a>
                                <h3 className="projects-heading">Football Club Management System</h3>
                            </div>
                            <p>A centralized platform for football clubs to manage their operations efficiently.<br></br>
                                It offers features such as club information, membership benefits, 
                                secure login for managers and players, player dashboards, communication tools, 
                                scheduling of events, and management dashboards.<br></br> The app streamlines communication, 
                                record-keeping, and club management, making it easier for clubs to organize activities and 
                                engage with their members.</p>
                        </div>
                        <div className="projects">
                            <div className="projects-heading">
                                <a href="https://tapedeck.netlify.app/staxxluciano" target="_blank" rel="noopener noreferrer">
                                    <img src={tapeImg} alt="tapedeck-image" className="projects-image" />
                                </a>
                                <h3 className="projects-heading">Artist/Band Website Generator</h3>
                            </div>
                            <p>TapeDeck is a platform that empowers musicians and artists to easily create and manage their own 
                                professional web pages.<br></br> Artists can showcase music videos, albums, and press kits, update their 
                                profiles, and share streaming links—all without needing coding skills. <br></br>
                                The app also provides secure login, admin dashboards, and tools for uploading and organizing content,
                                 making it simple for artists to promote their work and connect with fans online.</p>
                        </div>
                        <div className="projects">
                            <div className="projects-heading">
                                <a href="https://cast-solutions.netlify.app/login" target="_blank" rel="noopener noreferrer">
                                    <img src={castImg} alt="cast-solutions" className="projects-image" />
                                </a>
                                <h3 className="projects-heading">Cast Solutions</h3>
                            </div>
                            <p>Cast Solutions is a web application that helps casting agencies and talent managers organize auditions, 
                                manage talent submissions, and streamline the casting process.<br></br> The platform allows you to create and 
                                manage audition lists, receive detailed talent submissions (including images and videos), 
                                mark favorites, and easily share or present shortlisted candidates. <br></br>
                                With secure authentication and a user-friendly interface, Cast Solutions simplifies audition 
                                management and enhances collaboration between agencies and talent.</p>
                        </div>
                    </div>
        },
        {
            key: "resume",
            img: resume,
            alt: "Resume",
            title: "Resume",
            content: <div className="resume-content">
                <img src={resumeimg} alt="Resume" className="resume-image" />
                <div className="resume-icons">
                    <a href="https://github.com/MartinMaseko" target="_blank" rel="noopener noreferrer">
                        <img width="45" height="45" src="https://img.icons8.com/3d-fluency/45/github-logo.png" alt="github-logo" className="github-icon"/>
                    </a>
                    <a href="https://www.linkedin.com/in/martin-maseko-a76762367/" target="_blank" rel="noopener noreferrer">
                        <img width="45" height="45" src="https://img.icons8.com/3d-fluency/45/linkedin--v2.png" alt="linkedin--v2" className="linkedin-icon"/>
                    </a>
                </div>
                        <h3>PROFILE</h3>
                        <p>Driven and adaptive professional with 12 years of
                            entrepreneurial experience,
                            now successfully transitioning into software development. My
                            extensive entrepreneurial experience has cultivated
                            exceptional problem-solving, sales acumen, communication,
                            and project management
                            capabilities, enabling me to contribute effectively as an
                            intrapreneur within an organization.
                        </p>
                        <h3>EDUCATION</h3>
                        <h4>Software Engineering | Mar 2024 - Nov 2024</h4>
                        <p>HyperionDev</p>
                        <h4>Front-End Development | Dec 2024 - May 2025</h4>
                        <p>Scrimba</p>
                        <h4>Social Media Marketing | Apr 2019 - Mar 2020</h4>
                        <p>Digital School of Marketing</p>
                        <h4>Web analytics | Feb 2016 - Nov 2017</h4>
                        <p>Simplilearn</p>
                        <h4>National Senior Certificate | 2013</h4>
                        <p>Abbotts College</p>
                        <h3>Skills</h3>
                        <div className="skills-container">
                            <div className="skill-item">
                                <img width="45" height="45" src="https://img.icons8.com/3d-fluency/45/source-code.png" alt="source-code"/>
                                <p>HTML</p>
                            </div>
                            <div className="skill-item">
                                <img width="45" height="45" src="https://img.icons8.com/color/45/javascript--v1.png" alt="javascript--v1"/>
                                <p>JavaScript</p>
                            </div>
                            <div className="skill-item">
                                <img width="45" height="45" src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/45/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png" alt="external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo"/>
                                <p>React</p>
                            </div>
                            <div className="skill-item">
                                <img width="45" height="45" src="https://img.icons8.com/fluency/45/typescript--v1.png" alt="typescript--v1"/>
                                <p>TypeScript</p>
                            </div>
                            <div className="skill-item">
                                <img width="45" height="45" src="https://img.icons8.com/color/45/css3.png" alt="css3"/>
                                <p>CSS</p>
                            </div>
                            <div className="skill-item">
                                <img width="45" height="45" src="https://img.icons8.com/fluency/45/node-js.png" alt="node-js"/>
                                <p>Node.js</p>
                            </div>
                            <div className="skill-item">
                                <img width="45" height="45" src="https://img.icons8.com/ios/45/api-settings.png" alt="api-settings"/>
                                <p>RESTful API</p>
                            </div>
                            <div className="skill-item">
                                <img width="45" height="45" src="https://img.icons8.com/color/45/python--v1.png" alt="python--v1"/>
                                <p>Python</p>
                            </div>
                            <div className="skill-item">
                                <img width="45" height="45" src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/45/external-django-a-high-level-python-web-framework-that-encourages-rapid-development-logo-shadow-tal-revivo.png" alt="external-django-a-high-level-python-web-framework-that-encourages-rapid-development-logo-shadow-tal-revivo"/>
                                <p>Django</p>
                            </div>
                            <div className="skill-item">
                                <img width="45" height="45" src="https://img.icons8.com/external-soft-fill-juicy-fish/45/external-dev-coding-and-development-soft-fill-soft-fill-juicy-fish.png" alt="external-dev-coding-and-development-soft-fill-soft-fill-juicy-fish"/>
                                <p>DevOps & Cloud</p>
                            </div>
                            <div className="skill-item">
                                <img width="45" height="45" src="https://img.icons8.com/fluency/45/github.png" alt="github"/>
                                <p>GitHub</p>
                            </div>
                            <div className="skill-item">
                                <img width="45" height="45" src="https://img.icons8.com/fluency/45/docker.png" alt="docker"/>
                                <p>Docker</p>
                            </div>
                        </div>
                        <h3>Experience</h3>
                        <div className="experience-container">
                            <div className="experience-item">
                                <h4>Sales & Business Operations Manager | 2013 - 2016</h4>
                                <p>Successfully scaled a Hair products wholesale
                                    business, serving over 500 salons. I'm adept at
                                    inventory management, optimizing sales, and
                                    leading small teams and translating complex
                                    business needs into actionable, profitable strategies.
                                    HerrKhonact (Pty) Ltd
                                </p>
                            </div>
                            <div className="experience-item">
                                <h4>Training & Project Coordinator | 2016 - 2017 </h4>
                                <p>Conducted occupancy audits (verification of rightful
                                    owners of RDP houses in various
                                    townships a project by the Department of Human
                                    Settlements. I delivered training to local community
                                    staff, training them on using software provided for
                                    accurate occupant detail recording
                                    Operation McD Solutions (Pty) Ltd.
                                </p>
                            </div>
                            <div className="experience-item">
                                <h4>Music Production & Sound Engineering | 2018 - 2023 </h4>
                                <p>Managed and operated a successful recording
                                    studio, delivering professional music production
                                    services including recording, mixing, and mastering
                                    for diverse artists. I also provided digital marketing
                                    services to artists & sold Instrumentals online
                                    generating over R50K in 2023.
                                </p>
                            </div>
                        </div>
                    </div>
        }
    ];

    const handleBannerClick = (key) => {
        setOpenSection(openSection === key ? null : key);
    };

    // Add this function to handle menu clicks from NavBar
    const handleMenuClick = (key) => {
        setOpenSection(key);
        // Scroll to the section
        const el = document.getElementById(key);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <NavBar onMenuClick={handleMenuClick} />
            <div className="main">
                <div className="heading-container">
                    <img src={mobilegif} alt="Mobile Animation" className="mobile-gif" />
                    <video autoPlay loop muted className="pc-video">
                        <source src={pcvideo} type="video/mp4" />
                    </video>
                </div>
                {sections.map(section => (
                    <div className="container" key={section.key} id={section.key}>
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
                                {section.content}
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