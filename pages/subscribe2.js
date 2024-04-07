import Head from "next/head";
// import Image from "next/image";
import styles from "./styles/Layout.module.css";
import ContentCard from "../components/ContentCard";
import headerStyles from "./styles/Header.module.css";
// import Newsletter from "../components/Newsletter";

export default function Home() {
  return (
    <>
      <Head>
        <title>Subscribe </title>
        <meta
          name="description"
          content="Subscribe to our Newletter to hear about all our fun events and other fun events around the city."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/adamaslan/image/upload/v1667159646/drinksfoodlife/dfl-logo_vnu5xy.jpg"
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>
     <div className={styles.gridcontainer4}>
          <div className={headerStyles.description}>
            Subscribe to Drinks Food Life
            {/* <Newsletter /> */}
            <div className="istyles.gridcontainer5">
            <img
                className={styles.photo}
                alt="Party"
                src="https://res.cloudinary.com/adamaslan/image/upload/v1654725062/drinksfoodlife/amaro-monte_omsl1h.jpg"
              />{" "}
            </div>
          
          <br />
          <h3>
            Please follow us on Instagram{" "}
            <a
              href="https://www.instagram.com/drinksfoodlife/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <u>HERE</u>
            </a>
          </h3>
          <h2>Sign Up to Our Amazing Non-Spammy Newsletter Below: </h2>

          <script
            async
            data-uid="44b0c96346"
            src="https://hustling-artisan-4563.ck.page/44b0c96346/index.js"
          ></script>
          <p>
            Founded with the desire to focus on drinks and food, but then life
            in its most general yet effervescent spirit came through. We have
            had contributions from @chemixtry, @journeyswithjaphe , Loic Luspo,
            @omlettehoe, @cosmicveggie and others.
          </p>
        </div>
      </div>
      <ContentCard />
    </>
  );
}
