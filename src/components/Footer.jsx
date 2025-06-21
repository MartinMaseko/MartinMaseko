import "./style.css";
import { useState } from 'react';
import emailjs from "emailjs-com";

function Footer() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: '',
    });

    // State to manage submission status
    const [submissionStatus, setSubmissionStatus] = useState("");

    /**
   * Handles input changes in the form.
   * Updates the corresponding field in the formData state.
   * @param {Object} e - The event object from the input field.
   */
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    /**
   * Handles form submission.
   * Logs the form data and resets the form fields.
   * @param {Object} e - The event object from the form submission.
   */
    const handleSubmit = (e) => {
        e.preventDefault();

        // EmailJS configuration
        const serviceID = "service_b9yvyn9"; // EmailJS Service ID
        const templateID = "template_55rebfu"; // EmailJS Template ID
        const userID = "yc6V-LgOseD5_LXAf"; // EmailJS User ID

        emailjs
        .send(serviceID, templateID, formData, userID)
        .then(
            (response) => {
            console.log("SUCCESS!", response.status, response.text);
            setSubmissionStatus("success");
            // Reset the form fields after submission
            setFormData({
                name: "",
                phone: "",
                email: "",
                message: "",
            });
            },
            (error) => {
            console.error("FAILED...", error);
            setSubmissionStatus("error");
            }
        );
    };

    return (
        <div className="footer-container">
            {/* Contact Section */}
            <div className="contact-section">
                <h1>Contact Me</h1>
                <form id="contactForm" onSubmit={handleSubmit}>
                {/* Name Field */}
                <h3 htmlFor="name">Name</h3>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                />

                {/* Phone Number Field */}
                <h3 htmlFor="phone">Phone Number</h3>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                />

                {/* Email Field */}
                <h3 htmlFor="email">Email</h3>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                />

                {/* Message Field */}
                <h3 htmlFor="message">Message</h3>
                <textarea
                    id="message"
                    name="message"
                    rows="4"
                    cols="50"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter your message"
                />

                {/* Submit Button */}
                <button id='contactform-submitbtn' type="submit">Submit</button>
                </form>
                {/* Success Message */}
                {submissionStatus === "success" && (
                    <p className="email-report">
                    Thank you for reaching out, we will be in contact with you soon.
                    </p>
                )}

                {/* Error Message */}
                {submissionStatus === "error" && (
                    <p className="email-report">
                    Failed to send the message. Please try again later.
                    </p>
                )}
            </div>
            <div className="footer-contact">
                <div className="footer-text">
                    <a href="tel:0629973007" className="footer-icon" title="Call">
                        <img width="30" height="30" src="https://img.icons8.com/3d-fluency/30/smartphone.png" alt="smartphone"/>
                    </a>
                    <p>0629973007</p>
                </div>
                <div className="footer-text">
                    <a
                        href="https://wa.me/27629973007"
                        className="footer-icon"
                        title="WhatsApp"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img width="30" height="30" src="https://img.icons8.com/3d-fluency/30/whatsapp-logo.png" alt="whatsapp-logo" className="footer-icon"/>
                    </a>
                    <p>WhatsApp Me</p>
                </div>
                <div className="footer-text">
                    <a href="mailto:martinmasekodev@gmail.com" className="footer-icon" title="Email">
                        <img width="30" height="30" src="https://img.icons8.com/3d-fluency/30/gmail.png" alt="gmail" className="footer-icon"/>
                    </a>
                    <p>Email Me</p>
                </div>
                <div className="footer-text">
                    <a href="https://www.linkedin.com/in/martin-maseko-a76762367/" target="_blank" rel="noopener noreferrer" className="footer-icon">
                        <img width="30" height="30" src="https://img.icons8.com/3d-fluency/30/linkedin--v2.png" alt="linkedin--v2" className="footer-icon"/>
                    </a>
                    <p>LinkedIn</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;