import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
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
import localsZA from "../assets/localsza.webp";
import castImg from "../assets/cast.png";
import resumeimg from "../assets/resumeimg.JPG";

function Main() {
    const [openSection, setOpenSection] = useState(null);
    const bannerRefs = useRef([]);

    useEffect(() => {
        const banners = bannerRefs.current.slice();

        banners.forEach((img) => {
            if (img) img.classList.add("animate-once");
        });
        const removeClass = (e) => e.target.classList.remove("animate-once");
        banners.forEach((img) => {
            if (img) img.addEventListener("animationend", removeClass);
        });
        return () => {
            banners.forEach((img) => {
                if (img) img.removeEventListener("animationend", removeClass);
            });
        };
    }, []);

    const sections = [
        {
            key: "about",
            img: About,
            alt: "About Me",
            title: "Your Digital Growth Partner",
            content: <p>As a seasoned entrepreneur with over 12 years of hands-on experience, 
                my career has been dedicated to mastering scalable operations, 
                supply chain logistics, and direct B2B sales within the South African informal sector.
                <br></br><br></br> 

                My journey began with a wholesale hair product business that grew to supply over 500 township salons—
                a testament to my innate understanding of market needs, procurement challenges, and community-centric business models. 
                This was followed by pivotal roles in government project management where I refined my skills in data integrity, 
                project oversight, and community training, and successful ventures in direct B2B sales to township spaza shops.
                <br></br><br></br>

                This diverse practical background—combined with an intense focus on cutting-edge digital expertise—culminated 
                in the creation of LOCALS.ZA.
                <br></br><br></br>

                I personally conceived and developed the LOCALS.ZA digital platform, an innovative solution designed to empower 
                small and micro-businesses. Leveraging my extensive knowledge in full-stack development, social media marketing, 
                and web analytics, I engineered a robust system that solves the core problems of fragmented procurement and 
                logistical challenges in the informal sector.
                <br></br><br></br>

                I am passionate about the transformative power of SaaS solutions and committed to empowering SME businesses 
                to thrive by giving them the digital tools and economies of scale needed to compete effectively in today's 
                rapidly evolving landscape. Let's unlock your business's full potential together.
                <br></br><br></br>
            </p>
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
                                <a href="https://locals-za.co.za/" target="_blank" rel="noopener noreferrer">
                                    <img src={localsZA} alt="localsZA-image" className="projects-image" />
                                </a>
                                <h3 className="projects-heading">LocalsZA</h3>
                            </div>
                            <p>LocalsZA is a full‑stack ecommerce and logistics PWA built to connect local shops, wholesalers and drivers. 
                                The frontend is a Vite + React + TypeScript (componentized by pages: storefront, product view, cart, 
                                admin dashboard, drivers) with Context APIs for Cart, Favorites and Waze routing. 
                                The backend is Node/Express using the Firebase Admin SDK for secure Firestore reads/writes and Storage for product images. 
                                Payments are handled via a PayFast service (server‑side signature generation and verification).
                            </p>
                        </div>
                        <div className="projects">
                            <div className="projects-heading">
                                <Link to="/cast-solutions">
                                    <img src={castImg} alt="cast-solutions" className="projects-image" />
                                </Link>
                                <h3 className="projects-heading">Cast Solutions</h3>
                            </div>
                            <p>Cast Solutions is a web application that helps casting agencies and talent managers organize auditions, 
                                manage talent submissions, and streamline the casting process.<br></br> The platform allows you to create and 
                                manage audition lists, receive detailed talent submissions (including images and videos), 
                                mark favorites, and easily share or present shortlisted candidates. <br></br>
                                With secure authentication and a user-friendly interface, Cast Solutions simplifies audition 
                                management and enhances collaboration between agencies and talent.</p>
                        </div>
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
                        <p>Driven Full Stack Developer with experience in React.js, Node.js, and Next.js, currently developing a digital
                            sales and last mile delivery platform with proven abilities in API design & integrations, database management,
                            end-to-end deployment and payment gateway integrations. Combining my technical skills to solve real world
                            business problems around me and with 12 years of experience in sales, web analytics, social media marketing
                            and business operations experience, bringing other complimentary and soft skills to teams or companies.
                        </p>
                        <h3>EDUCATION</h3>
                        <h4>Software Engineering | Mar 2024 - Nov 2024</h4>
                        <p>HyperionDev</p>
                        <h4>Full-Stack Development | Dec 2024 - July 2025</h4>
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
                                <img width="45" height="45" src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/45/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png" alt="react-img"/>
                                <p>React</p>
                            </div>
                            <div className="skill-item">
                                <img width="45" height="45" src="https://img.icons8.com/fluency/48/typescript--v1.png" alt="typescript-img"/>
                                <p>TypeScript</p>
                            </div>
                            <div className="skill-item">
                                <img width="45" height="45" src="https://img.icons8.com/color/45/javascript--v1.png" alt="javascript-img"/>
                                <p>JavaScript</p>
                            </div>
                            <div className="skill-item">
                                <img width="45" height="45" src="https://img.icons8.com/windows/45/node-js.png" alt="nodejs-img"/>
                                <p>Node.js</p>
                            </div>
                            <div className="skill-item">
                                <img width="45" height="45" src="https://img.icons8.com/clouds/45/api.png" alt="api-img"/>
                                <p>API</p>
                            </div>
                            <div className="skill-item">
                                <img width="45" height="45" src="https://img.icons8.com/color/45/vite.png" alt="vite-img"/>
                                <p>Vite</p>
                            </div>
                            <div className="skill-item">
                                <img width="45" height="45" src="https://img.icons8.com/ios/45/html.png" alt="HTML-img"/>
                                <p>HTML</p>
                            </div>
                            <div className="skill-item">
                                <img width="45" height="45" src="https://img.icons8.com/color/45/css3.png" alt="css-img"/>
                                <p>CSS</p>
                            </div>
                            <div className="skill-item">
                                <img width="45" height="45" src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/45/external-ui-design-computer-science-flaticons-lineal-color-flat-icons.png" alt="UI-img"/>
                                <p>UI Design</p>
                            </div>
                            <div className="skill-item">
                                <img width="45" height="45" src="https://img.icons8.com/fluency/45/web-analystics.png" alt="web-analytics-img"/>
                                <p>Web Analytics</p>
                            </div>
                            <div className="skill-item">
                                <img width="45" height="45" src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/45/external-social-media-marketing-marketing-technology-flaticons-lineal-color-flat-icons-5.png" alt="social-img"/>
                                <p>Social Media Marketing</p>
                            </div>
                        </div>
                        <h3>Experience</h3>
                        <div className="experience-item">
                        <h4>Full Stack Developer | June 2025 – Present</h4>
                            <ul>
                                <li>Developed and shipped full‑stack features for LocalsZA, including an admin management dashboard
                                    tracking business KPI’s and CRUD features , shared-cart sharing, and PayFast payment integration.
                                </li>
                                <li>Built reusable React + TypeScript components and context to manage app state and UX flows.</li>
                                <li>Integrated Firebase and authored backend controllers/services for secure API logic</li>
                                <li>Integrated PWA features: Workbox-based service worker, asset caching, lazy loading, and responsive
                                    grid for large screens and analytics hooks instrumented at interaction points
                                </li>
                            </ul>
                        </div>
                        <div className="experience-container">
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
                                <h4>Sales & Business Operations Manager | 2013 - 2017</h4>
                                <p>Successfully scaled a Hair products wholesale
                                    business, serving over 500 salons. I'm adept at
                                    inventory management, optimizing sales, and
                                    leading small teams and translating complex
                                    business needs into actionable, profitable strategies.
                                    HerrKhonact (Pty) Ltd
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
            <div className="main">
                <NavBar onMenuClick={handleMenuClick} />
                <div className="heading-container">
                    <img src={mobilegif} alt="Mobile Animation" className="mobile-gif" />
                    <video autoPlay loop muted className="pc-video">
                        <source src={pcvideo} type="video/mp4" />
                    </video>
                </div>
                {sections.map((section, idx) => (
                    <div className="container" key={section.key} id={section.key}>
                        <img
                            ref={el => bannerRefs.current[idx] = el}
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