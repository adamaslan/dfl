import headerStyles from "../styles/Header.module.css";
import Link from "next/link";
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
        <Link href="/" passHref>
          <a>
            {" "}
            <span>Drinks Food</span> Life{" "}
          </a>
        </Link>
      </h1>
    </div>
  );
};

export default Header;
