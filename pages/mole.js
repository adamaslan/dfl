//mole

import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Layout.module.css";
import ContentCard from "../components/ContentCard";

import headerStyles from "../styles/Header.module.css";

export default function Home() {
  return (
    <>
      <Head>
        git
        <title>On the Love of Mole and Coyoacan</title>
        <meta
          property="og:image"
          content="https://res.cloudinary.com/adamaslan/image/upload/v1667159646/drinksfoodlife/dfl-logo_vnu5xy.jpg"
        />
        <meta
          name="description"
          content="Drinks Food Life. A Bushwick based publication covering the tastiest things in NYC and the rest of the world."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <div className={styles.article1}>
          <br />
          <p className={headerStyles.description}>
            On the Love of Mole at Meson Antugua Santa Catarina
            <br />
            <div className="image-wrapper">
              <Image alt="mole" width={872} height={872} src="/mole.jpg" />{" "}
            </div>
          </p>
          <p>
            I love Mole. You can get in dry form at the market in{" "}
            <a href="./coyoacan">
              <u>Coyoacan</u>
            </a>{" "}
            or you can get it in mousse form at the Meson Antigua Santa Catarina
            which is right next to the Parque Santa Catarina. It also comes with
            a cute apple shaped duck. Nuff said.
          </p>
          <div className="image-wrapper">
            <Image
              alt="mole duck"
              width={872}
              height={872}
              src="https://res.cloudinary.com/adamaslan/image/upload/v1654895312/drinksfoodlife/cdmx1_zm5yyj.jpg"
            />{" "}
          </div>
        </div>
      </div>
      <ContentCard />
    </>
  );
}
