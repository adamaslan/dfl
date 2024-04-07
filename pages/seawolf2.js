import Head from "next/head";
import styles from "./styles/Layout.module.css";
import ContentCard from "../components/ContentCard";
import headerStyles from "./styles/Header.module.css";

export default function Seawolf() {
  return (
    <>
      <Head>
        <title>Writing Away Your Sunny Days at Sea Wolf</title>
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
      <div className={styles.gridcontainer4}>
        <div className={headerStyles.description}>
          Writing Away Your Sunny Days at Sea Wolf <br />
        </div>
        <div className={styles.gridcontainer5}>
          <img
            className={styles.photo}
            alt="Oysters"
            src="https://res.cloudinary.com/adamaslan/image/upload/v1654824690/drinksfoodlife/notes_bovahb.jpg"
          />
        </div>
        <p>
          Tasty happy hour oysters …Noted. You will have a lot of fun enjoying
          a beautiful day in Bushwick working on some writing at Sea Wolf 🐺.
          Sea Wolf reigns as one of the premiere locations to breathe fresh air
          while you eat or drink tasty things.
        </p>
        <p>
          A solid happy hour and a diverse menu are also big bonuses. Come for
          the people watching right by the Jefferson L stop. Stay for the
          oysters.{" "}
        </p>{" "}
        <p>
          If you're looking for a unique dining experience in Bushwick, Sea
          Wolf is a must-visit destination. The restaurant offers a cozy and
          inviting atmosphere, making it perfect for a casual dinner or a night
          out with friends. Their menu is filled with a variety of options,
          including fresh seafood, vegetarian dishes, and handcrafted
          cocktails. With their commitment to using locally-sourced ingredients
          and their attention to detail, Sea Wolf has quickly become a favorite
          among locals and visitors alike. Whether you're stopping by for happy
          hour or enjoying a full meal, Sea Wolf is sure to leave a lasting
          impression.
        </p>
        <p>
          Checkout{" "}
          <a href="https://www.seawolfbk.com">
            <u>Sea Wolf</u>
          </a>{" "}
          for more info. They have a lot of fun events and promos that keep one
          wanting all their food and drinks.{" "}
        </p>
      </div>
      <ContentCard />
    </>
  );
}
