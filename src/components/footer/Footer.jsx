import React from "react";
import logo from "../../assets/images/gamemano-logo-2-removebg-preview.png";
const Footer = () => {
  return (
    <footer class="section-footer">
      <div class="grid container grid--footer">
        <div class="logo-col">
          <div class="footer-logo">
            <img src={logo} alt="gamemano-logo" class="gamemano-logo" />
            <p class="footer-text">
              GameMano is a product development company that exclusively focuses
              on game entertainment. We craft beautiful and exciting games that
              people want to continue playing. With our efficient industry
              experience, we will take care of your gaming needs from start to
              finish.
            </p>
          </div>
        </div>
        <nav class="nav-col">
          <p class="footer-heading">useful links</p>
          <ul class="footer-nav">
            <li>
              <a class="footer-links" href="#">
                home
              </a>
            </li>
            <li>
              <a class="footer-links" href="#">
                product
              </a>
            </li>
            <li>
              <a class="footer-links" href="#">
                about us
              </a>
            </li>
            <li>
              <a class="footer-links" href="#">
                contact us
              </a>
            </li>
          </ul>
        </nav>
        <nav class="nav-col">
          <p class="footer-heading">Follow us on</p>
          <ul class="social-links">
            <li>
              <a href="#" class="footer-links">
                <ion-icon class="footer-icon" name="logo-facebook"></ion-icon>
              </a>
            </li>
            <li>
              <a href="#" class="footer-links">
                <ion-icon class="footer-icon" name="logo-instagram"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" class="footer-links">
                <ion-icon class="footer-icon" name="logo-twitter"></ion-icon>
              </a>
            </li>
            <li>
              <a href="#" class="footer-links">
                <ion-icon class="footer-icon" name="logo-youtube"></ion-icon>
              </a>
            </li>
          </ul>
        </nav>
        <ion-icon name="rocket-outline" class="footer-icon"></ion-icon>
      </div>
      <div>
        <p class="copyright">
          Copyright &copy; <span class="year">2027</span> by Omnifood, Inc. All
          Right Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
