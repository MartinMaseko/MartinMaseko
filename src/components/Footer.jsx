import "./style.css";

function Footer() {
    return (
        <div className="footer-container">
            <a href="tel:0629973007" className="footer-icon" title="Call">
                <img width="30" height="30" src="https://img.icons8.com/3d-fluency/30/smartphone.png" alt="smartphone"/>
            </a>
            <a
                href="https://wa.me/27629973007"
                className="footer-icon"
                title="WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img width="30" height="30" src="https://img.icons8.com/3d-fluency/30/whatsapp-logo.png" alt="whatsapp-logo"/>
            </a>
            <a href="mailto:martinmasekodev@gmail.com" className="footer-icon" title="Email">
                <img width="30" height="30" src="https://img.icons8.com/3d-fluency/30/gmail.png" alt="gmail"/>
            </a>
            <a href="https://www.linkedin.com/in/martin-maseko-a76762367/" target="_blank" rel="noopener noreferrer">
                <img width="30" height="30" src="https://img.icons8.com/3d-fluency/30/linkedin--v2.png" alt="linkedin--v2" className="linkedin-icon"/>
            </a>
            
        </div>
    );
}

export default Footer;