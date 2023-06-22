import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Layout.module.css";
import ContentCard from "../components/ContentCard";

import Link from "next/link";
import Script from "next/script";
import Newsletter from "../components/Newsletter";

export default function Home() {
  return (
    <div className='root'>
      {/* <div className={styles.biggerdiv}> */}
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
        <meta
          property="og:image"
          content="https://res.cloudinary.com/adamaslan/image/upload/v1667159646/drinksfoodlife/dfl-logo_vnu5xy.jpg"
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>{" "}
      <Newsletter />
      <div className={styles.gridcontainer1} id="parent">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'GA_MEASUREMENT_ID');
        `}
        </Script>

        <Link href="/raki" passHref>
          <div className={styles.griditem1}>
            <img
                className="photo"
                alt='food'
              src="https://res.cloudinary.com/adamaslan/image/upload/v1664330111/drinksfoodlife/raki_iaoqaw_b5103d.jpg"
            />{" "}
            <h2> On the Love of Raki and Turkish Food</h2>{" "}
            <h3>Dining at Turkish Grill in Queens</h3>
          </div>
        </Link>

        <Link href="/sherry-cocktail-grandarmypunch" passHref>
          <div className={styles.griditem1}>
            <img
                className="photo"
                alt='cocktail'
              src="https://res.cloudinary.com/adamaslan/image/upload/v1660751024/drinksfoodlife/grandarmypunch_e9pums.jpg"
            />{" "}
            <h2> Summer Cocktails Part 2</h2>{" "}
            <h3>Grand Army Punch by @chemixtry</h3>
          </div>
        </Link>

        <Link href="/ginger-cocktail-danburydonkey" passHref>
          <div className={styles.griditem1}>
            <img
                className="photo"
                alt='cocktail'
              src="https://res.cloudinary.com/adamaslan/image/upload/v1655411125/drinksfoodlife/danburydonkey_mdavxe.jpg"
            />{" "}
            <h2> Summer Cocktails Part 1</h2>{" "}
            <h3>The Danbury Donkey by @chemixtry</h3>
          </div>
        </Link>

        <Link href="/northdumplingindimessquare" passHref>
          <div className={styles.griditem1}>
          <img
              className="photo"
            alt='dumpling'
              src="https://res.cloudinary.com/adamaslan/image/upload/v1654718488/drinksfoodlife/northdump1_dptuen.jpg"
            />{" "}
            <h2> North Dumpling, the Guru of Dimes Square,</h2>{" "}
            <h3> Dumplings Shining Brightly on the Lower East Side</h3>
          </div>
        </Link>
      </div>


      <ContentCard />


      <div className={styles.gridcontainer4}>

        <Link href="/besttacosinbk" passHref>
          <div className={styles.gridcontainer5}>
            <img
                className={styles.photo}
                src="https://res.cloudinary.com/adamaslan/image/upload/v1685058269/tacos1_onlnoj.jpg"   width="500"

                alt="food"
            />
            <h2>Taco Poll Brooklyn <br />See the results of our hotly contested poll!</h2>
          </div>
        </Link>

        <Link href="/artandfish" passHref>
          <div className={styles.gridcontainer5}>
            <img
                className={styles.photo}
                 src="https://res.cloudinary.com/adamaslan/image/upload/v1654729613/drinksfoodlife/fish_ddrxgr.jpg"
                 alt="food"
            />
            <h2>Art and Fish: <br/> The Story of Nicole Burko</h2>
          </div>
        </Link>

        <Link href="./stylish-in-aspen-drinking-rose-at-bonnies" passHref>
          <div className={styles.gridcontainer5}>
            <img
                className={styles.photo}
                src="https://res.cloudinary.com/adamaslan/image/upload/v1678159115/drinksfoodlife/rose_mgk9sv.jpg"
                alt="Aspen"
            />
            <h2>Awe and Culture in Aspen:{" "}<br />
            Whispering Angel Rose at Bonnies</h2>
          </div>
        </Link>

        <Link href="/babydaddy" passHref>
          <div className={styles.gridcontainer5}>
            <img
                className={styles.photo}
                src="https://res.cloudinary.com/adamaslan/image/upload/v1654731696/drinksfoodlife/babydaddy2_u29dmu.png"

                alt="beer"
            />
            <h2>Baby Daddy Please<br />Baby Daddy is a great choice</h2>
          </div>
        </Link>


      <Link href="/mole" passHref>
        <div className={styles.gridcontainer5}>
          <img
              className={styles.photo}
              alt="mole"

              src="https://res.cloudinary.com/adamaslan/image/upload/v1654895312/drinksfoodlife/cdmx1_zm5yyj.jpg"
          />{" "}
          <h2> On the Love of Mole and Mexico<br />Mole, Mexico, Oh My!</h2>
        </div>
      </Link>
      </div>


        <Link href="/coyoacan" passHref>
          <div className={styles.gridcontainer5}>
            <img
                className={styles.photo}
            alt="mole"

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
        <Link href="/seawolf" passHref>
          <div className={styles.gridcontainer5}>
            <img
                className={styles.photo}
              alt="Sea Wolf"

              src="https://res.cloudinary.com/adamaslan/image/upload/v1654824690/drinksfoodlife/notes_bovahb.jpg"
            />{" "}
          </div>
        </Link>
        <Link href="/seawolf" passHref>
          <div className={styles.card6}>
            <h2> Writing Away My Sunny Days at Sea Wolf</h2>
            <h3>Sea Wolf Brings the Boys to the Yard</h3>
          </div>
        </Link>
        <Link href="/naplesbotanicalgardenwelcomesfrida" passHref>
          <div className={styles.gridcontainer5}>
            <img
                className={styles.photo}
              alt="Frida"

              src="https://res.cloudinary.com/adamaslan/image/upload/v1681154705/drinksfoodlife/frida-diego_fi26ml.jpg"
            />{" "}
          </div>
        </Link>
        <Link href="/naplesbotanicalgardenwelcomesfrida" passHref>
          <div className={styles.card8}>
            <h2> Naples Botanical Garden Welcomes Frida and the Casa Azul </h2>
            <h3>
              Celebrating of Art, Nature, and Mexican Culture in Southwest
              Florida
            </h3>
          </div>
        </Link>

      {/* </div> */}
      </div>



  );
}
