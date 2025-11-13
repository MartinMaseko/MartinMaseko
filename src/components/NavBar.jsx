import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Logo from "../assets/MMLogo512.webp";

function NavBar({ onMenuClick }) {
    const [open, setOpen] = useState(false);
    const menuRef = useRef(null);

    const handleMenuClick = () => setOpen(!open);

    const handleNavClick = (target) => {
        setOpen(false);
        if (onMenuClick) onMenuClick(target);
        const el = document.getElementById(target);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    // Close menu
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setOpen(false);
            }
        };

        if (open) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [open]);

    return (
        <nav className="navbar">
            <Link to="/" className="nav-link">
                <img src={Logo} alt="Logo" className="Navlogo" />
            </Link>
            <div className="menu-wrapper" ref={menuRef}>
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