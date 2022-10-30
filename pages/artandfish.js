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
        <title>On the Art and Spear Fishing of Nicole Burko</title>
        <meta name="description" content="Art meets Fishing" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/adamaslan/image/upload/v1654900212/drinksfoodlife/cdmx2_u0b4mi.jpg"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <div className={styles.article1}>
          <br />
          <p className={headerStyles.description}>
            On Art and Spear Fishing <br />
            <div className="image-wrapper">
              <Image
                alt="fish plate"
                width={872}
                height={554}
                src="/fish2.jpg"
              />{" "}
            </div>
          </p>
          <p>
            My friend Nicole Burko caught a fish free diving in the depths of
            the Atlantic like a ferocious predator, but photos of her submerged
            laying in wait at the bottom of the sea are more precious and
            beautiful than anything else. How nice it is to know that this
            blackened strip bass came from the hands of a friend, Nicole Burko.{" "}
          </p>{" "}
          <br />
          <p>
            {" "}
            Check out her art here @nicoleburko on insta. Also noteworthy, fried
            plantains forever, pescatarian vibes, and new favourite green ->
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
      </div>

      <ContentCard />
    </>
  );
}
