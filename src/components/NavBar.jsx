import "./style.css";
import Logo from "../assets/MMLogo512.webp";

function NavBar() {
    return (
        <nav className="navbar">
            <img src={Logo} alt="Logo" className="Navlogo" />
            <img width="35" height="35" src="https://img.icons8.com/ios-glyphs/35/535353/menu--v3.png" alt="menu--v3"/>
        </nav>
    )
}

export default NavBar;