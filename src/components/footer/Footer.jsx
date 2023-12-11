import React from "react";
import Logo from "../../assets/images/logo.svg";
import FooterLogo from "../../assets/images/footer.svg";
import { Link } from "react-router-dom";
import "./footer.css";
const Footer = () => {
  return (
    <>
      <footer className="section-footer">
        <img src={FooterLogo} alt="Footer" />
        <div className="grid container grid--footer">
          <div className="logo-col">
            <Link to="/" className="footer-logo">
              <img src={Logo} alt="logo" className="logo" />
            </Link>
            <p className="footer-description">
              lOGO is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>

          <nav className="nav-col">
            <p className="footer-heading">useful links</p>

            <ul className="footer-nav">
              <li>
                <Link className="footer-links" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="footer-links" to="/product-list">
                  Product
                </Link>
              </li>
              <li>
                <Link className="footer-links" to="">
                  About us
                </Link>
              </li>
              <li>
                <Link className="footer-links" to="">
                  Contact us
                </Link>
              </li>
            </ul>
          </nav>
          <nav className="nav-col">
            <div className="follow-us">
              <p>follow us on</p>
              <ul className="social-links">
                <li>
                  <a
                    href="www.facebook.com"
                    target="_blank"
                    className="footer-links"
                  >
                    <ion-icon
                      className="footer-icon"
                      name="logo-facebook"
                    ></ion-icon>
                  </a>
                </li>
                <li>
                  <a
                    href="www.instagram.com"
                    target="_blank"
                    className="footer-links"
                  >
                    <ion-icon
                      className="footer-icon"
                      name="logo-instagram"
                    ></ion-icon>
                  </a>
                </li>

                <li>
                  <a
                    href="www.twitter.com"
                    target="_blank"
                    className="footer-links"
                  >
                    <ion-icon
                      className="footer-icon"
                      name="logo-twitter"
                    ></ion-icon>
                  </a>
                </li>
                <li>
                  <a
                    href="www.youtube.com"
                    target="_blank"
                    className="footer-links"
                  >
                    <ion-icon
                      className="footer-icon"
                      name="logo-youtube"
                    ></ion-icon>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </footer>
      <div>
        <p className="copyright">COPYRIGT 2021 lOGO ALL RIGHT RESERVED</p>
      </div>
    </>
  );
};

export default Footer;
