import headerStyles from "../styles/Header.module.css";

import Head from "next/head";

const Header = () => {
  return (
    <div>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Palette+Mosaic&display=swap"
          rel="stylesheet"
        />
      </Head>
      <h1 className={headerStyles.title}>
        <span>Drinks Food</span> Life
      </h1>
      <p className={headerStyles.description}>
        Keep up to date with the latest on Drinks Food and Liiiife.
      </p>
    </div>
  );
};

export default Header;
