import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Layout.module.css";
import ContentCard from "../(components)/ContentCard"; 

import headerStyles from "../styles/Header.module.css";

export default function Home() {
  return (
    <>
      <Head>
        git
        <title>In Love With Mexico City</title>
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
            In Love With Mexico City <br />
            <div className="image-wrapper">
              <img className="photo" alt="market" src="/mex.png" />{" "}
            </div>
          </p>
          <p>
            Lots to say about the food and drink culture of Mexico, but they got
            peppers, mole, and candy on lock. Nuff said...for now.
          </p>
        </div>
      </div>
      <div className="wrapper">
        <a href="./amaromontenegro">
          <ContentCard
            img="amaro-monte.jpg"
            title="Drinking Amaros at ZXY Gallery"
            description="Amaro at ZXY Gallery"
            tag="amaromontenegro"
            href="amaromontenegro"
            //techdebt-make this into an IMAGE for NEXT Optimization
          />
        </a>

        <a href="./northdumpling">
          <ContentCard
            img="https://images.unsplash.com/photo-1529928520614-7c76e2d99740?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
            title="North Dumpling"
            description="In love with North Dumpling "
            href="northdumpling"
          />
        </a>
      </div>
      <div className={styles.smain}>
        Contact us cause this is now the footer
      </div>
    </>
  );
}
