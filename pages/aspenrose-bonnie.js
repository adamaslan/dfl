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
        <title>Awe and Culture in Aspen: Rose and 3D Graphics</title>
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
          Awe and Culture in Aspen: Rose and 3D Graphics <br />
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
           Aspen combines transcendental meaning with a stylish gluttony. If you are going to treat yourself, why not just go all the way, but if you are trying to do it in a cost effective way that's another story.    </p>{" "}
          <br />
          <p>
            {" "}
            Style can be defined as a way of doing things or appearing.
          </p>
          <p>Turkish Grill is located at 4203 Queens Blvd, Sunnyside, NY 11104</p>


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
