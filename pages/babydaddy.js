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
        <title>Baby Daddy Beer Please</title>
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
            Baby Daddy Please <br />
            <div className="image-wrapper">
              <img className="photo" alt="beer can" src="/babydaddy.jpg" />{" "}
            </div>
          </p>
          <p>
            Baby Daddy is a great choice for anyone that wants a highly
            drinkable beer that is full of flavor. With so many styles of beer
            available its easy to make an appreciative glance at the noticebly
            hip design of baby daddy and then get distracted by some other beer
            in the vast array of beers in the world. Ahh...so many tasty beer
            fish in the sea.
          </p>{" "}
          <p>
            Indeed, the anonymity of any beer on the shelf in a major city in
            the US is akin to the modern era of dating. With so many IPAs (not
            to mention session IPAs) on the market, it’s easy to swipe left on
            any beer these days, but Baby Daddy seems to be having more success
            than the rest of the flock these days.
          </p>{" "}
          <p>
            The good tidings have most likely arisen because of the full-bodied
            IPA taste with a very noticeable grapefruit kick that is still
            incredibly easy to drink. A quality product coupled with cool
            packaging and branding that is emblematic Speakeasy ales and lagers
            ensures Baby Daddy IPA will be a bevy daddies, mommies, and the
            whole over 21 year old family will be enjoying for a long time.
            Cheers!
          </p>
        </div>
      </div>

      <ContentCard />
    </>
  );
}
