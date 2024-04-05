import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Layout.module.css";
import ContentCard from "../(components)/ContentCard"; 
import headerStyles from "../styles/Header.module.css";

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
        <div className={headerStyles.description}>
          Drinking Amaro Montenegro at ZXY Gallery
        </div>
        <div className={styles.gridcontainer5}>
          <img
            className={styles.photo}
            alt="Amaro Bottle"
            src="https://res.cloudinary.com/adamaslan/image/upload/v1654725062/drinksfoodlife/amaro-monte_omsl1h.jpg"
          />
        </div>
        <p>
          ZXY Gallery and Drinks...Food...Life! teamed up for Art pop up that
          featured an Amaro Montenegro tasting on the rooftop of ZXY Gallery in Bushwick. The rest was history. Insert upside down smiley face here. Loic Luspo, french model and professional handball athlete, models for the photo.
        </p>
        <p>
          ZXY Gallery is located by the Williamsburg and Bushwick border. Cosmic Veggie is a curatorial platform that focuses on art experiences paired with food and drinks.
        </p>
        <p>
          Check out their instagram for more info <a href="https://www.instagram.com/zxygallery/"><u>here</u></a>
        </p>
        <p>
          For more on Amaro Montenegro visit <a href="http://www.amaromontenegro.com"><u>www.amaromontenegro.com</u></a>
        </p>
      </div>
      <ContentCard />
    </>
  );
}
