import footerStyles from "../styles/Footer.module.css";
import Head from "next/head";

const Footer = () => {
  return (
    <div className={footerStyles.container}>
      <div className={footerStyles.borderLine}></div> {/* Top border line */}
      <div className={footerStyles.basic}>
        Check out our instagram{"=> "}
        <a
          href="https://www.instagram.com/drinksfoodlife"
          target="_blank"
          rel="noopener noreferrer"
        >
          <u>HERE</u>
        </a>
        !
      </div>
    </div>
  );
};

export default Footer;
