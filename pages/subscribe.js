import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Layout.module.css";
import ContentCard from "../components/ContentCard";
import headerStyles from "../styles/Header.module.css";
import Newsletter from "../components/Newsletter";

export default function Home() {
  return (
    <>
      <Head>
        <title>Subscribe </title>
        <meta
          name="description"
          content="Subscribe to our Newletter to hear about all our fun events and other fun events around the city."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <div className={styles.article1}>
          <p className={headerStyles.description}>
            Subscribe to Drinks Food Life
            <Newsletter />
            <div className="image-wrapper">
              <Image
                alt="Party"
                width={800}
                height={800}
                src="https://res.cloudinary.com/adamaslan/image/upload/v1654725062/drinksfoodlife/amaro-monte_omsl1h.jpg"
              />{" "}
            </div>
          </p>
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
          <h2>Sign Up to Our Amazing Non-Spammy Newletter Below: </h2>

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
