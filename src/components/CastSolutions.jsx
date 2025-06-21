import "./style.css";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import castbanner from "../assets/castbanner.webp";
import martinLogo from "../assets/MMLogo512.webp";
import castLogo from "../assets/castlogo.png";
import SAM from "../assets/SAM.png";
import IPS from "../assets/IPS.png";
import CB from "../assets/CB.png";
import FM from "../assets/FM.png";

function CastSolutions() {
  const buyBtnContainerRef = useRef(null);
  const subBtnContainerRef = useRef(null);
  
  useEffect(() => {
    // Keep track of whether buttons have been rendered
    let buyBtnRendered = false;
    let subBtnRendered = false;
    
    // Create a flag to track component mounted state
    let isMounted = true;
    
    // Store ref values to avoid the React warning
    const buyBtnContainer = buyBtnContainerRef.current;
    const subBtnContainer = subBtnContainerRef.current;
    
    // Load the PayPal script dynamically with the correct parameters for subscriptions
    const loadPayPalScript = () => {
      return new Promise((resolve, reject) => {
        // Check if script is already loaded
        if (window.paypal) {
          return resolve(window.paypal);
        }
        
        // Remove any existing PayPal scripts to avoid conflicts
        const existingScript = document.querySelector('script[src*="paypal.com/sdk/js"]');
        if (existingScript) {
          existingScript.parentNode.removeChild(existingScript);
        }
        
        // Create script element with explicit intent=subscription
        const script = document.createElement('script');
        script.src = "https://www.paypal.com/sdk/js?client-id=AQR2-18HXk2TJPrHcUQVqz1HOL1yvbFaC_oAdq657qVqy2297Xb0FiNAP_0bfrv6G1ixFkoLlhiZnf1s&components=buttons,hosted-buttons&vault=true&disable-funding=venmo&currency=USD&intent=subscription";
        script.async = true;
        
        script.onload = () => resolve(window.paypal);
        script.onerror = (err) => reject(err);
        
        document.body.appendChild(script);
      });
    };
    
    // Render hosted button (one-time payment)
    const renderHostedButton = (paypal) => {
      if (!isMounted || buyBtnRendered || !buyBtnContainer) return;
      
      try {
        buyBtnContainer.innerHTML = '';
        paypal.HostedButtons({
          hostedButtonId: "WRUY8CP6BYW3Q",
        }).render(buyBtnContainer);
        buyBtnRendered = true;
        console.log("Hosted button rendered successfully");
      } catch (err) {
        console.error("Error rendering hosted button:", err);
      }
    };
    
    // Render subscription button
    const renderSubscriptionButton = (paypal) => {
      if (!isMounted || subBtnRendered || !subBtnContainer) return;
      
      try {
        subBtnContainer.innerHTML = '';
        
        // Create subscription button
        const button = paypal.Buttons({
          style: {
            shape: 'rect',
            color: 'gold',
            layout: 'vertical',
            label: 'subscribe'
          },
          createSubscription: (data, actions) => {
            return actions.subscription.create({
              plan_id: 'P-5A904580W24672638NBLJLRI',
              application_context: {
                shipping_preference: 'NO_SHIPPING'
              }
            });
          },
          onApprove: (data, actions) => {
            console.log('Subscription created:', data.subscriptionID);
            return actions.subscription.get().then((details) => {
              alert('Subscription completed! Subscription ID: ' + data.subscriptionID);
            });
          },
          onCancel: () => {
            console.log('Subscription canceled');
          },
          onError: (err) => {
            console.error('PayPal subscription error:', err);
            subBtnRendered = false; // Allow retry
          }
        });
        
        // Check if button is eligible before rendering
        if (!button.isEligible || button.isEligible()) {
          button.render(subBtnContainer);
          subBtnRendered = true;
          console.log("Subscription button rendered successfully");
        } else {
          console.error("PayPal button not eligible for rendering");
        }
      } catch (err) {
        console.error("Error rendering subscription button:", err);
      }
    };
    
    // Initialize buttons with retries
    const initializeButtons = async () => {
      let retries = 0;
      const maxRetries = 3;
      
      const attemptInitialization = async () => {
        try {
          // Load PayPal script first
          const paypal = await loadPayPalScript();
          
          // Wait for PayPal to be fully initialized
          setTimeout(() => {
            if (isMounted) {
              // Render buttons in sequence with some delay between them
              renderHostedButton(paypal);
              
              // Render subscription button after a short delay
              setTimeout(() => {
                if (isMounted) {
                  renderSubscriptionButton(paypal);
                }
              }, 500);
            }
          }, 300);
        } catch (err) {
          console.error(`Failed to load PayPal (attempt ${retries + 1}/${maxRetries}):`, err);
          
          if (retries < maxRetries && isMounted) {
            retries++;
            // Wait and retry with exponential backoff
            setTimeout(attemptInitialization, 1000 * Math.pow(2, retries));
          }
        }
      };
      
      await attemptInitialization();
    };
    
    // Start initialization
    initializeButtons();
    
    // Clean up
    return () => {
      isMounted = false;
      
      // Clean container references - using the stored values to avoid warnings
      if (buyBtnContainer) {
        buyBtnContainer.innerHTML = '';
      }
      
      if (subBtnContainer) {
        subBtnContainer.innerHTML = '';
      }
    };
  }, []);
    
  return (
    <>
    <nav className="cast-navbar">
        <Link to="/" >
            <img src={martinLogo} alt="Martin Maseko Logo" className="Navlogo" />
        </Link>    
        <a
            href="https://cast-solutions.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
        >
            <button className="cast-nav-button">Live Demo</button>
        </a>
    </nav>
    <div className="cast-page">
        <div className="cast-banner-wrapper">
            <img src={castbanner} alt="Cast Solutions Banner" className="cast-banner" />
            <div className="cast-banner-overlay">
                <div className="cast-banner-text">
                    <img src={castLogo} alt="Cast Solutions Logo" className="cast-logo" />
                    <p> Manage auditions, talent submissions, 
                        cast briefs with unprecedented efficiency and security. 
                    </p>
                </div>
            </div>
        </div>
        <div className="features-container">
            <h3 className="features-title">Abandon The Traditional System</h3>
            <div className="features-list">
                <div className="feature-item">
                    <img width="75" height="75" src="https://img.icons8.com/external-obvious-line-kerismaker/75/FFFFFF/external-network-network-communication-line-obvious-line-kerismaker-9.png" alt="external-network-network-communication-line-obvious-line-kerismaker-9"/>
                    <p>Multiple Steps & Tools</p>
                </div>
                <div className="feature-item">
                    <img width="75" height="75" src="https://img.icons8.com/ios-filled/75/FFFFFF/time_2.png" alt="time_2"/>
                    <p>Time-Consuming</p>
                </div>
                <div className="feature-item">
                    <img width="75" height="75" src="https://img.icons8.com/ios-filled/75/FFFFFF/collaborating-in-circle.png" alt="collaborating-in-circle"/>
                    <p>Limited Collaboration</p>
                </div>
            </div>
        </div>
        <div className="product-container">
            <div className="product-description visible">
                <img src={SAM} alt="Streamlined Audition Management" className="product-mockup" />
                <div className="product-title-container">
                    <h3 className="product-title">Streamlined Audition Management</h3>
                    <p className="product-text">
                        Agencies can easily create, search, and manage multiple auditions in one place.<br/> <br/>
                        Talent submissions (including images and videos) are organized and accessible, reducing manual paperwork, email and media storage clutter.
                    </p>
                </div>
            </div>
            <div className="product-description visible">
                <img src={IPS} alt="Increased Productivity and Speed" className="product-mockup" />
                <div className="product-title-container">
                    <h3 className="product-title">Increased Productivity and Speed</h3>
                    <p className="product-text">
                        Collects comprehensive talent information (photos, videos, measurements, experience, social links, etc.), enabling better casting decisions.<br/> <br/>
                        Mark and filter favorite submissions, quickly narrowing down top talent.
                    </p>
                </div>
            </div>
            <div className="product-description visible">
                <img src={CB} alt="Improved Collaboration and Communication" className="product-mockup" />
                <div className="product-title-container">
                    <h3 className="product-title">Improved Collaboration and Communication</h3>
                    <p className="product-text">
                        Agencies can generate and share casting briefs, talent picks with a single link,
                        making collaboration with clients and team members seamless.
                    </p>
                </div>
            </div>
            <div className="product-description visible">
                <img src={FM} alt="Form Submission" className="product-mockup" />
                <div className="product-title-container">
                    <h3 className="product-title">Form Submission</h3>
                    <p className="product-text">
                    No manual transcription—data is instantly available and organized. <br/>
                    Submissions are immediately accessible, searchable, and filterable.<br/> <br/>
                    Actors simply scan a QR code which leads them to a form completion. 
                    Casting Agency will also have control over the submission data and get real-time updates from anywhere.
                    </p>
                </div>
            </div>
        </div>
        <div className="cta-container">
            <h3 className="cta-title">Ready to Transform Your Casting Process?</h3>
            <div className="cta-containers">
                <div className="cta-offer">
                    <h4>Cast Solution - Custom</h4>
                    <ul className="cta-list">
                        <li>White Labeling & Custom Domain</li>
                        <li>Access to all features & Custom Features</li>
                        <li>Up to 1000 submissions/month, 20GB storage, 5 admin and unlimited Staff users.</li>
                        <li>Unlimited access to support</li>
                    </ul>
                    <button className="cta-button">Request Quote</button>
                </div>
                <div className="cta-offer">
                    <h4>White Label Solution</h4>
                    <ul className="cta-list">
                        <li>Custom Domain & White Labeling</li>
                        <li>Up to 500 submissions/month, 10GB storage, 3 admin and unlimited Staff users.</li>
                        <li>Unlimited access to support</li>
                    </ul>
                    <h4>R 3499 | Per Year</h4>
                    <div ref={buyBtnContainerRef} id="paypal-container-WRUY8CP6BYW3Q"></div>
                </div>
                <div className="cta-offer">
                    <h4>Cast Solutions Subscription</h4>
                    <ul className="cta-list">
                        <li>Branded Solution & Basic Features</li>
                        <li>Up to 500 submissions/month, 10GB storage, 1 admin and 2 Staff users.</li>
                        <li>Unlimited access to support</li>
                    </ul>
                    <h4>R499 | Per Month</h4>
                    <div ref={subBtnContainerRef} id="paypal-subscription-btn"></div>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}

export default CastSolutions;