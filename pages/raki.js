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
        <title>On the Love of Raki and Turkish Food</title>
          <meta
          property="og:image"
          content="https://res.cloudinary.com/adamaslan/image/upload/v1667159646/drinksfoodlife/dfl-logo_vnu5xy.jpg"/>
        <meta name="description" content="Drinks Food Life. A Bushwick based publication covering the tastiest things in NYC and the rest of the world." />
       <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <div className={styles.article1}>
          <br />
          <p className={headerStyles.description}>
            On the Love of Raki and Turkish Food <br />
            <div className="image-wrapper">
              <Image
                alt="fish plate"
                width={872}
                height={554}
                src="https://res.cloudinary.com/adamaslan/image/upload/v1664330111/drinksfoodlife/raki_iaoqaw_b5103d.jpg"
              />{" "}
            </div>
          </p>
          <p>
            A little bit of Raki goes a long way. Add a couple ice cubes and
            suddlenly its a glory of cloud liquid. Keep adding cubes and it
            still has that strong anise taste. All of these things add up to
            make it a great digestif or first drink.{" "}
          </p>{" "}
          <br />
          <p>
            {" "}
            Turkish Grill in Sunnyside Queens is a great place to enjoy Raki. It
            costs only 12 dollars and comes with this elegant and efficient set
            up.
          </p>
          <br />
          <p>
            Learn more about{" "}
            <a href="http://www.efealkollu.com.tr/index.php/en/history-of-raki/">
              <u>the history of raki</u>
            </a>{" "}
            here.
          </p>
        </div>
      </div>

      <ContentCard />
    </>
  );
}
