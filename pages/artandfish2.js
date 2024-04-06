import Head from "next/head";
import Image from "next/image";
import styles from "../pages/styles/Layout.module.css";
import ContentCard from "../components/ContentCard";
import headerStyles from "../pages/styles/Header.module.css"; // Use the headerStyles from raki.js

export default function Home() {
  return (
    <>
      <Head>
        git
        <title>On the Art and Spear Fishing of Nicole Burko</title>
        <meta name="description" content="Art meets Fishing" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/adamaslan/image/upload/v1654900212/drinksfoodlife/cdmx2_u0b4mi.jpg"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.gridcontainer4}> {/* Use the gridcontainer4 class from raki.js */}
        <div className={headerStyles.description}>
          On Art and Spear Fishing <br />
          <div className={styles.gridcontainer5}> {/* Use the gridcontainer5 class from raki.js */}
            <img
              className={styles.photo} // Use the same CSS class for the image
              alt="fish plate"
              src="/fish2.jpg"
            />
          </div>
        </div>
        <p>
     Nicole Burko caught a fish free diving in the depths of
          the Atlantic like a ferocious predator, but photos of her submerged
          laying in wait at the bottom of the sea are more precious and
          beautiful than anything else. How nice it is to know that this
          blackened strip bass came from the hands of a friend, Nicole Burko.
        </p>
        <br />
        <p>
          Check out her art here @nicoleburko on instagram    . Also noteworthy, fried
          plantains forever, pescatarian vibes, and new favourite green --&gt;
          Baby Kale. Not that I don’t love my arugula and red lettuce, but
          that baby kale has the cutest name of the leafy greens that I know
          of. Is their cuter leafy green competition?
        </p>
        <br />
        <p>
          Nicole is also an accomplished painter. She earned an MFA at
          Columbia is painting and has shown with{" "}
          <a href="https://www.zxygallery.com">
            <u>ZXY Gallery</u>
          </a>{" "}
          amongst many other prestigious galleries.
        </p>
      </div>
      <ContentCard />
    </>
  );
}
