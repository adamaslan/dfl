import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Layout.module.css";
import ContentCard from "../components/ContentCard";
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
        <p>By Adam Aslan</p>
        <p>
          ZXY Gallery and Drinks Food Life teamed up for an art pop up that
          featured an Amaro Montenegro tasting on the rooftop of ZXY Gallery in Bushwick. The evening transformed the gallery's rooftop into an ideal place for tasting an exceptional amaro. Local artists showcased their work, while guests sipped on expertly crafted cocktails featuring Amaro Montenegro, a versatile Italian herbal liqueur known international. The rest was history. Insert upside down smiley face here. </p> <p> The event embodied the Drinks Food Life spirit - where a love for good food, drinks, and art come together to create unique experiences transcending the typical atmosphere one usually encounters with cocktails and culture. 
        </p>
        <p>
          ZXY Gallery is located by the Williamsburg and Bushwick border. Cosmic Veggie is a curatorial platform that focuses on art experiences paired with food and drinks.
        </p>
        <p>
          Check out their instagram for more info <a href="https://www.instagram.com/zxygallery/"><u>here</u></a>
        </p>
        <p>Amaro Montenegro dates back to 1885 when it was originally called "Elisir Lungavita" or the "elixir of life". While the name has changed the original recipe has remained constant for over a century. From maceration to distillation, Amaro Montenegro has become a leader in the world of botanic spirts.</p>
        <p>
          For more on Amaro Montenegro visit <a href="http://www.amaromontenegro.com"><u>www.amaromontenegro.com</u></a>
        </p>
      </div>
      <ContentCard />
    </>
  );
}
