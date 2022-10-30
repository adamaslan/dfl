import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Layout.module.css";
import ContentCard from "../components/ContentCard";
import headerStyles from "../styles/Header.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title> Writing Away My Sunny Days at Sea Wolf</title>
        <meta
          property="og:image"
          content="https://res.cloudinary.com/adamaslan/image/upload/v1667159646/drinksfoodlife/dfl-logo_vnu5xy.jpg"/>
        <meta name="description" content="Drinks Food Life. A Bushwick based publication covering the tastiest things in NYC and the rest of the world." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <div className={styles.article1}>
          <p className={headerStyles.description}>
            Writing Away My Sunny Days at Sea Wolf
            <div className="image-wrapper">
              <Image
                className="card4"
                alt="Oysters"
                width={640}
                height={640}
                src="https://res.cloudinary.com/adamaslan/image/upload/v1654824690/drinksfoodlife/notes_bovahb.jpg"
              />{" "}
            </div>
          </p>
          <br />
          <p>
            Tasty dollar oysters …Noted. I had a lot of fun enjoying a beautiful
            day in Bushwick working on some writing at Sea Wolf 🐺. Sea Wolf
            reigns as one of the premiere locations to breath fresh air while
            you eat or drink tasty things.
          </p>
          <p>
            A solid happy hour and a diverse menu are also big bonuses. Come for
            the people watching right by the Jefferson L stop. Stay for the
            oysters.{" "}
          </p>{" "}
          <p>
            Checkout{" "}
            <a href="https://www.seawolfbk.com">
              <u>Sea Wolf</u>
            </a>
            for more info. They have a lot of fun events and promos that keep
            one wanting all their food and drinks.{" "}
          </p>
        </div>
      </div>
      <ContentCard />
    </>
  );
}
