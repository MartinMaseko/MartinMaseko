import { useEffect, useRef, useState } from "react";
import localsLogo from "../assets/localsLogo.png";
import NavBar from "./NavBar";
import "./Landing.css";

const heroBanner = "https://firebasestorage.googleapis.com/v0/b/martinmasekoprofile.firebasestorage.app/o/heroBanner.webp?alt=media&token=a60e0099-9eca-44c9-a656-555e3d9b263c";
const localsHand = "https://firebasestorage.googleapis.com/v0/b/martinmasekoprofile.firebasestorage.app/o/LocalsHand.png?alt=media&token=f84200d8-dad7-49a0-9dc3-19f8596fae0c";

function Landing() {
    const bgRef = useRef(null);
    const heroTextRef = useRef(null);
    const [showTop, setShowTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY;
            const vh = window.innerHeight;

            setShowTop(scrolled > vh * 0.4);

            // Background zooms in continuously as user scrolls
            if (bgRef.current) {
                const scale = 1 + scrolled * 0.0003;
                bgRef.current.style.transform = `scale(${Math.min(scale, 1.6)})`;
            }

            // Hero text zooms in toward viewer then fades out of frame
            if (heroTextRef.current) {
                const progress = Math.min(scrolled / (vh * 0.65), 1);
                const scale = 1 + progress * 0.9;
                const opacity = Math.max(1 - progress * 1.5, 0);
                heroTextRef.current.style.transform = `translate(-50%, -50%) scale(${scale})`;
                heroTextRef.current.style.opacity = opacity;
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Sections are in normal document flow, so scroll straight to the element.
    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="landing-wrapper">
            <NavBar onNavClick={scrollToSection} />

            {/* Scroll to top */}
            <button
                className={`scroll-to-top${showTop ? " scroll-to-top--visible" : ""}`}
                onClick={scrollToTop}
                aria-label="Scroll to top"
            >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" width="20" height="20">
                    <polyline points="18 15 12 9 6 15" />
                </svg>
            </button>

            {/* Fixed parallax background — zooms throughout entire scroll */}
            <div className="landing-bg-container">
                <div
                    ref={bgRef}
                    className="landing-bg"
                    style={{ backgroundImage: `url(${heroBanner})` }}
                />
                <div className="landing-overlay" />
            </div>

            {/* ── Hero ──*/}
            <section className="landing-section landing-hero-section">
                <div ref={heroTextRef} className="landing-hero-text">
                    <h1 className="landing-hero-heading">Martin Maseko</h1>
                    <p className="landing-tagline">Full Stack Developer & Data Engineer &nbsp;·&nbsp; Strategist &nbsp;·&nbsp; Creative</p>
                </div>
            </section>

            {/* ── About ──*/}
            <section id="about" className="landing-section landing-content-section">
                <div className="landing-section-inner">
                    <h2 className="landing-section-heading">About</h2>
                    <div className="landing-about-text">

                        <h3 className="landing-about-subheading">The Rhythm of the 90s &amp; The Hustle</h3>
                        <p>
                            I am a product of Katlehong — a true 90s baby raised on the emergence of
                            hip-hop and the grit of the township. While the music moved me, the
                            "conscious rap" scene did something deeper: it sparked a lifelong habit of
                            reading, self-awareness, and an entrepreneurial mindset.
                        </p>
                        <p>
                            My music career pursuit was a masterclass in resourcefulness. To survive, fund my passion
                            for the music industry, I had to become a jack-of-all-trades — supplying township spazashops with rolling paper branded with our mixtape, 
                            social and digital marketing to sell my instrumentals, running recording , photography & Video studio,  funding the music from project management roles
                            in the government sector conducting occupancy audits & verification of rightful owners of RDP houses in various townships.<br/><br/>
                            Anything to keep the dream alive and in 2023 I generated over R50k in instrumental sales, released a mixtape "Its Not 4U, It's 4 Hustlers Vol.1", had the oppportunity to work with professor
                            and Spikiri. Thats the same year when I stopped music...
                        </p>

                        <div className="landing-about-photos">
                            <img src="https://firebasestorage.googleapis.com/v0/b/martinmasekoprofile.firebasestorage.app/o/snymaanProduct.webp?alt=media&token=3916b04f-ccf9-49b2-a4a3-371df06f78b1" alt="Snymaan product" className="landing-about-photo" />
                            <img src="https://firebasestorage.googleapis.com/v0/b/martinmasekoprofile.firebasestorage.app/o/snymaanPromo.webp?alt=media&token=b17d8a3b-1b0c-4983-a129-34e2f46d9fae" alt="Snymaan promo" className="landing-about-photo" />
                            <img src="https://firebasestorage.googleapis.com/v0/b/martinmasekoprofile.firebasestorage.app/o/C24.png?alt=media&token=eb4937b6-0162-4205-b4c7-beb49ff53aa8" alt="C24" className="landing-about-photo" />
                        </div>
                        <iframe width="100%" height="415" src="https://www.youtube.com/embed/3uOC0b5M85I?si=zFsabIHG0yQzCQBz" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

                        <div className="landing-about-photos">
                            <img src="https://firebasestorage.googleapis.com/v0/b/martinmasekoprofile.firebasestorage.app/o/spikiri.jpg?alt=media&token=94f9c536-de0a-43af-90c0-2e800247a4f4" alt="In the studio with Spikiri" className="landing-about-photo" />
                            <img src="https://firebasestorage.googleapis.com/v0/b/martinmasekoprofile.firebasestorage.app/o/professor.jpg?alt=media&token=b273199d-28bc-4821-ac96-59b1014753c9" alt="In the studio with Professor" className="landing-about-photo" />
                            <img src="https://firebasestorage.googleapis.com/v0/b/martinmasekoprofile.firebasestorage.app/o/studio.jpg?alt=media&token=fb7a2fdb-f486-43cb-93d2-34e17430cfdf" alt="Producing in the studio" className="landing-about-photo" />
                        </div>

                        <h3 className="landing-about-subheading">From Sound Waves to Software</h3>
                        <p>
                            The turning point came when I realized that technology doesn't just support
                            music — it controls it. The technology controls the consumption, production and revenue models the industry will use.
                            Seeing how digital streaming shifted the entire
                            landscape made me want to understand the "how" and "why" behind the platforms.
                        </p>
                        <p>
                            I took a leap into software engineering then moved into data engineering. Today, I'm a certified Full Stack Developer & Data Engineer. My background as a creative & an entrepreneur
                            allows me to bridge the gap between technical logic and human-centric applications.
                        </p>

                        <h3 className="landing-about-subheading">Where I'm Heading</h3>
                        <p>
                            I am currently deepening my expertise by studying Supply Chain Management and
                            Data Engineering. My mission is to build the systems and markets that enable
                            local economies to flourish and leverage applications to scale. I believe that by merging a strategist's
                            mindset with technical execution, we can protect and grow local economies and combat unemployment in local communities.
                        </p>
                        <p>
                            I'm a creative at heart, a developer by trade, and a visionary by nature. 
                        </p>

                    </div>
                </div>
            </section>

            {/* ── Portfolio ── */}
            <section id="portfolio" className="landing-section landing-content-section">
                <div className="landing-section-inner">
                    <h2 className="landing-section-heading">Portfolio</h2>
                    <div className="landing-portfolio-grid">
                        <div className="landing-portfolio-item">
                            <div className="landing-portfolio-thumb">
                                <img src={localsLogo} alt="Locals ZA Company Profile" className="landing-portfolio-img landing-portfolio-img--contain" />
                            </div>
                            <h3>Locals ZA — Company Profile</h3>
                            <p>Official company profile website for Locals ZA — showcasing services, vision, and brand identity.</p>
                            <a href="https://localsza.co.za/" target="_blank" rel="noopener noreferrer" className="landing-portfolio-btn">Click Me</a>
                        </div>
                        <div className="landing-portfolio-item">
                            <div className="landing-portfolio-thumb">
                                <img src={localsHand} alt="Locals ZA Store" className="landing-portfolio-img" />
                            </div>
                            <h3>Locals ZA — PWA</h3>
                            <p>Intergrated Solutions Market and Enterprise software provider
                                dedicated to optimizing the B2B supply chain for the South African retail
                                market
                            </p>
                            <a href="https://locals-za.co.za/" target="_blank" rel="noopener noreferrer" className="landing-portfolio-btn">Click Me</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Skills ── */}
            <section id="skills" className="landing-section landing-content-section">
                <div className="landing-section-inner">
                    <h2 className="landing-section-heading">Skills</h2>
                    <div className="landing-skills-grid">
                        {[
                            { label: "React | React Native", level: 90 },
                            { label: "Node.js | Express.js", level: 88 },
                            { label: "ASP.NET Core | C#", level: 85 },
                            { label: "TypeScript | JavaScript", level: 82 },
                            { label: "RESTful APIs | Integrations", level: 95 },
                            { label: "Python | PySpark", level: 87 },
                            { label: "Microsoft Fabric | Synapse", level: 83 },
                            { label: "Data Modeling | ETL/ELT Pipelines", level: 82 },
                            { label: "Next.js | Spring Boot", level: 75 },
                            { label: "Database Management", level: 85 },
                        ].map(({ label, level }) => (
                            <div key={label} className="landing-skill-row">
                                <span className="landing-skill-label">{label}</span>
                                <div className="landing-skill-bar">
                                    <div
                                        className="landing-skill-fill"
                                        style={{ width: `${level}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Contact ── */}
            <section id="contact" className="landing-section landing-content-section">
                <div className="landing-section-inner">
                    <h2 className="landing-section-heading">Contact</h2>
                    <p className="landing-contact-tagline">Need to collaborate or hire my services?</p>
                    <div className="landing-contact-list">
                        <a href="https://wa.me/27629973007" target="_blank" rel="noopener noreferrer" className="landing-contact-item">
                            <svg className="landing-contact-icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                            </svg>
                            <span>062 997 3007</span>
                        </a>
                        <a href="mailto:martin@localsza.co.za" className="landing-contact-item">
                            <svg className="landing-contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" xmlns="http://www.w3.org/2000/svg">
                                <rect x="2" y="4" width="20" height="16" rx="2"/>
                                <path d="M2 7l10 7 10-7"/>
                            </svg>
                            <span>martin@localsza.co.za</span>
                        </a>
                        <a href="https://www.instagram.com/sir_martinmaseko" target="_blank" rel="noopener noreferrer" className="landing-contact-item">
                            <svg className="landing-contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" xmlns="http://www.w3.org/2000/svg">
                                <rect x="2" y="2" width="20" height="20" rx="5"/>
                                <circle cx="12" cy="12" r="4"/>
                                <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/>
                            </svg>
                            <span>@sir_martinmaseko</span>
                        </a>
                        <a href="https://github.com/MartinMaseko" target="_blank" rel="noopener noreferrer" className="landing-contact-item">
                            <svg className="landing-contact-icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                            </svg>
                            <span>MartinMaseko</span>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Landing;

