import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Layout.module.css";
import ContentCard from "../components/ContentCard";
import Link from "next/link";
import Newsletter from "../components/Newsletter";

export default function Home() {
  return (
    <>
      <Head>
        <title>Drinks Food Life</title>
        <meta
          name="google-site-verification"
          content="hibJJdNyGOXl4aB0kEVBNFHgXe61cum7gLKs_J2A50A"
        />
        <meta
          name="Drinks Food Life Bushwick"
          content="Based in NYC covering Food Spirits and Wine based around Bushwick Ridgewood Chinatown and the LES. "
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>{" "}
      <Newsletter />
      <div className={styles.cards}>
        <Link href="/grandarmypunch" passHref>
          <div className={styles.card}>
            <Image
              alt="cocktail"
              className={styles.card4}
              width={500}
              height={500}
              src="https://res.cloudinary.com/adamaslan/image/upload/v1664330111/drinksfoodlife/raki_iaoqaw_b5103d.jpg"
            />{" "}
            <h2> On the Love of Raki and Turkish Food</h2>{" "}
            <h3>Dining at Turkish Grill in Queens</h3>
          </div>
        </Link>

        <Link href="/grandarmypunch" passHref>
          <div className={styles.card}>
            <Image
              alt="cocktail"
              className={styles.card4}
              width={500}
              height={500}
              src="https://res.cloudinary.com/adamaslan/image/upload/v1660751024/drinksfoodlife/grandarmypunch_e9pums.jpg"
            />{" "}
            <h2> Summer Cocktails Part 2</h2>{" "}
            <h3>Grand Army Punch by @chemixtry</h3>
          </div>
        </Link>

        <Link href="/summer-22-cocktail-danburydonkey" passHref>
          <div className={styles.card}>
            <Image
              alt="cocktail"
              className={styles.card4}
              width={500}
              height={500}
              src="https://res.cloudinary.com/adamaslan/image/upload/v1655411125/drinksfoodlife/danburydonkey_mdavxe.jpg"
            />{" "}
            <h2> Summer Cocktails Part 1</h2>{" "}
            <h3>The Danbury Donkey by @chemixtry</h3>
          </div>
        </Link>

        <Link href="/northdumpling" passHref>
          <div className={styles.card}>
            <Image
              alt="dumpling"
              className={styles.card4}
              width={500}
              height={500}
              src="https://res.cloudinary.com/adamaslan/image/upload/v1654718488/drinksfoodlife/northdump1_dptuen.jpg"
            />{" "}
            <h2> North Dumpling, my Guru</h2>{" "}
            <h3>I'm in love with North Dumpling, duh.</h3>
          </div>
        </Link>
      </div>
      <ContentCard />
      <Link href="/artandfish" passHref>
        <div className={styles.cards2}>
          <Image
            className={styles.card4}
            src="https://res.cloudinary.com/adamaslan/image/upload/v1654729613/drinksfoodlife/fish_ddrxgr.jpg"
            width={500}
            height={500}
            alt="food"
          />
          <h2>Art and Fish</h2> <h3>The Story of Nicole Burko</h3>
        </div>
      </Link>
      <Link href="/babydaddy" passHref>
        <div className={styles.cards2}>
          <Image
            className={styles.card4}
            src="https://res.cloudinary.com/adamaslan/image/upload/v1654731696/drinksfoodlife/babydaddy2_u29dmu.png"
            width={500}
            height={500}
            alt="beer"
          />
          <h2>Baby Daddy Please</h2> <h3>Baby Daddy is a great choice</h3>
        </div>
      </Link>
      <Link href="/mole" passHref>
        <div className={styles.cards2}>
          <Image
            className={styles.card4}
            alt="mole"
            width={500}
            height={500}
            src="https://res.cloudinary.com/adamaslan/image/upload/v1654895312/drinksfoodlife/cdmx1_zm5yyj.jpg"
          />{" "}
          <h2> On the Love of Mole and Mexico</h2> <h3>Mole, Mexico, Oh My!</h3>
        </div>
      </Link>
      <div className={styles.cards4}>
        <Link href="/coyoacan" passHref>
          <div>
            <Image
              className={styles.card4}
              alt="mole"
              width={500}
              height={500}
              src="https://res.cloudinary.com/adamaslan/image/upload/v1654900212/drinksfoodlife/cdmx2_u0b4mi.jpg"
            />{" "}
          </div>
        </Link>
        <Link href="/coyoacan" passHref>
          <div className={styles.card5}>
            <h2> Getting Deep in Coyoacan</h2>{" "}
            <h3>Frida, the Trees, the Food..Life!</h3>
          </div>
        </Link>
        <Link href="/coyoacan" passHref>
          <div>
            <Image
              alt="Sea Wolf"
              className={styles.card4}
              width={500}
              height={500}
              src="https://res.cloudinary.com/adamaslan/image/upload/v1654824690/drinksfoodlife/notes_bovahb.jpg"
            />{" "}
          </div>
        </Link>
        <Link href="/coyoacan" passHref>
          <div className={styles.card6}>
            <h2> Writing Away My Sunny Days at Sea Wolf</h2>
            <h3>Sea Wolf Brings the Boys to the Yard</h3>
          </div>
        </Link>
      </div>
    </>
  );
}
