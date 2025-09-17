import React from "react";
import footerCSS from './Footer.module.css';
function Footer() {
  return (
    <div className={`${footerCSS.Footer_Wrapper} text-white text-center p-4 mt-10`}>
      <p>&copy; {new Date().getFullYear()} Tasty Kitchen Restaurant. All rights reserved. Made by Sara R.</p>
      <div className={footerCSS.social}>
        <i className="ri-facebook-line"></i>
        <i className="ri-instagram-line"></i>
        <i className="ri-youtube-line"></i>
      </div>
    </div>
  );
}

export default Footer;
