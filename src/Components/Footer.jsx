import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="logo">
          <p>Powered by</p>
          <img src="/images/DH.png" alt="DH-logo" />
        </div>

        <div className="logos">
          <img src="/images/ico-facebook.png" alt="facebook logo" />
          <img src="/images/ico-instagram.png" alt="instagram logo" />
          <img src="/images/ico-whatsapp.png" alt="whatsapp logo" />
          <img src="/images/ico-tiktok.png" alt="tiktok logo" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
