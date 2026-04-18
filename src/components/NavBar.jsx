import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const NAV_ITEMS = [
    { label: "About",     id: "about",     path: "/about" },
    { label: "Portfolio", id: "portfolio", path: "/portfolio" },
    { label: "Skills",    id: "skills",    path: "/skills" },
    { label: "Contact",   id: "contact",   path: "/contact" }
];

function NavBar({ onNavClick }) {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = (item) => {
        setIsOpen(false);
        if (onNavClick) {
            onNavClick(item.id);
        } else {
            navigate(item.path);
        }
    };

    return (
        <>
            {/* Backdrop — mobile only, closes menu on tap */}
            {isOpen && (
                <div
                    className="nav-backdrop"
                    onClick={() => setIsOpen(false)}
                    aria-hidden="true"
                />
            )}

            {/* Hamburger / close toggle — mobile only */}
            <button
                className="nav-hamburger"
                onClick={() => setIsOpen((prev) => !prev)}
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
            >
                {isOpen ? (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" width="22" height="22">
                        <line x1="4" y1="4" x2="20" y2="20" />
                        <line x1="20" y1="4" x2="4" y2="20" />
                    </svg>
                ) : (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" width="22" height="22">
                        <line x1="3" y1="7" x2="21" y2="7" />
                        <line x1="3" y1="12" x2="21" y2="12" />
                        <line x1="3" y1="17" x2="21" y2="17" />
                    </svg>
                )}
            </button>

            {/* Nav menu */}
            <div className={`dropdown-menu-options${isOpen ? " nav-open" : ""}`}>
                {NAV_ITEMS.map((item) => (
                    <button
                        key={item.id}
                        className="dropdown-item"
                        onClick={() => handleClick(item)}
                    >
                        {item.label}
                    </button>
                ))}
            </div>
        </>
    );
}

export default NavBar;
