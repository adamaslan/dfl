import Head from "next/head";
// import Image from "next/image";
import styles from "../styles/Layout.module.css";
import ArticlesHashmap from "../(components)/Hasher";
// import headerStyles from "../styles/Header.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          ZXY Gallery and Drinks Food Life team up for Art Event and Amaro
          Montenegro Tasting in Bushwick
        </title>
        <meta
          property="og:image"
          content="https://res.cloudinary.com/adamaslan/image/upload/v1654725062/drinksfoodlife/amaro-monte_omsl1h.jpg"
        />
        <meta name="description" content="Amaro Roofparty in Bushwick" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.gridcontainer4}>

      <ArticlesHashmap />
      </div>
    </>
  );
}
