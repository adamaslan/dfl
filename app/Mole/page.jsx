// mole.js

import Head from "next/head";
import styles from "../styles/Layout.module.css";
import ContentCard from "../(components)/ContentCard"; 
import headerStyles from "../styles/Header.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>On the Love of Mole and Coyoacan</title>
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
          On the Love of Mole at Meson Antugua Santa Catarina <br />
          <img
            className={styles.photo}
            alt="mole"
            src="/mole.jpg"
          />
        </div>
        <p>
          I love Mole. You can get it in dry form at the market in{" "}
          <a href="./coyoacan">
            <u>Coyoacan</u>
          </a>{" "}
          or you can get it in mousse form at the Meson Antigua Santa Catarina
          which is right next to the Parque Santa Catarina. It also comes with
          a cute apple shaped duck. Nuff said, but here are 7 additional
          reasons why you should love Mole and Meson Antigua Santa Catarina:
        </p>
        <ol>
          <li>Mole is a versatile sauce that can be used to enhance the flavor of many different dishes, including chicken, pork, and vegetables.</li>
          <li>The Meson Antigua Santa Catarina has a wide selection of other traditional Mexican dishes, allowing you to explore the cuisine and try new things.</li>
          <li>The restaurant offers a great selection of drinks to complement your meal, including margaritas and Mexican beers.</li>
          <li>The Meson Antigua Santa Catarina is housed in a charming historic building, giving the restaurant a unique and authentic feel.</li>
          <li>The staff at the Meson Antigua Santa Catarina are friendly and knowledgeable about the menu, and can help you find the perfect dish to suit your taste.</li>
          <li>The mole at the Meson Antigua Santa Catarina is made using traditional techniques and high-quality ingredients, ensuring that you get an authentic and delicious experience.</li>
          <li>Visiting the Meson Antigua Santa Catarina is a great way to experience the rich cultural heritage of Mexico, and to learn more about the history and traditions of Mexican cuisine.</li>
        </ol>
        <div className={styles.gridcontainer5}>
          <img
            className={styles.photo}
            alt="mole duck"
            src="https://res.cloudinary.com/adamaslan/image/upload/v1654895312/drinksfoodlife/cdmx1_zm5yyj.jpg"
          />
        </div>
      </div>
      <ContentCard />
    </>
  );
}
