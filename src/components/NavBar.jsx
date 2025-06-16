import React, { useState } from "react";
import "./style.css";
import Logo from "../assets/MMLogo512.webp";

function NavBar({ onMenuClick }) {
    const [open, setOpen] = useState(false);

    const handleMenuClick = () => setOpen(!open);

    const handleNavClick = (target) => {
        setOpen(false);
        if (onMenuClick) onMenuClick(target);
        const el = document.getElementById(target);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <nav className="navbar">
            <img src={Logo} alt="Logo" className="Navlogo" />
            <div className="menu-wrapper">
                <img
                    width="35"
                    height="35"
                    src="https://img.icons8.com/ios-glyphs/35/535353/menu--v3.png"
                    alt="menu--v3"
                    className="menu-icon"
                    onClick={handleMenuClick}
                    style={{ cursor: "pointer" }}
                />
                {open && (
                    <div className="dropdown-menu">
                        <button className="dropdown-item" onClick={() => handleNavClick("about")}>About</button>
                        <button className="dropdown-item" onClick={() => handleNavClick("services")}>Services</button>
                        <button className="dropdown-item" onClick={() => handleNavClick("projects")}>SaaS</button>
                        <button className="dropdown-item" onClick={() => handleNavClick("resume")}>Resume</button>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default NavBar;