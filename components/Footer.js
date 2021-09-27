import footerStyles from "../styles/Footer.module.css";

import Head from "next/head";

const Footer = () => {
  return (
    <div className={footerStyles.basic}>
      Visit the Drinks Food Life!{" "}
      <a href="https://:www.instagram.com/drinksfoodlife"> HERE</a>
    </div>
  );
};

export default Footer;
