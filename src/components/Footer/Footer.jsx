import React from "react";
import "./footerStyles.css";

const Footer = () => {
  const currentyear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>&copy; {currentyear} designed and built by scottydotcom</p>
    </footer>
  );
};

export default Footer;
