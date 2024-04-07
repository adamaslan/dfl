import Head from "next/head";
import styles from "./styles/Layout.module.css";
import ContentCard from "../components/ContentCard";
import headerStyles from "./styles/Header.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>On the Love of Mole and Coyoacan</title>
        <meta
          name="description"
          content="A journey through Coyoacan Market and all the great things we found including Mole"
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/adamaslan/image/upload/v1654900212/drinksfoodlife/cdmx2_u0b4mi.jpg"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.gridcontainer4}>
        <div className={headerStyles.description}>
          Getting Deep in Coyoacan <br />
        </div>
        <div className={styles.gridcontainer5}>
          <img
            className={styles.photo}
            alt="mole"
            src="https://res.cloudinary.com/adamaslan/image/upload/v1654900212/drinksfoodlife/cdmx2_u0b4mi.jpg"
          />
        </div>
        <p>
          I love Coyoacan. I love Frida Kahlo. What a lovely way to spend the
          day, visiting the Blue House and the market in Coyoacan! It was also
          a deeply emotional experience. Having visited a flower-filled
          graveyard nearby. I was struck by the living flower plants growing
          amongst freshly laid flowers soon to dry juxtaposed to signs on the
          graves that would feature sad laments at death and loss. After all
          of that, I was ready for some{" "}
          <a href="./mole">
            <u>mole</u>
          </a>
        </p>
      </div>
      <ContentCard />
    </>
  );
}
