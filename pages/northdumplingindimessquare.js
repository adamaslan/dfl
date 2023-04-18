import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Layout.module.css";
import ContentCard from "../components/ContentCard";
import headerStyles from "../styles/Header.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          ZXY Gallery and Drinks Food Life team up for Art Event and Amaro
          Montenegro Tasting
        </title>
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
      <div className={styles.container}>
        <div className={styles.article1}>
          <p className={headerStyles.description}>
            In Love with North Dumpling
          </p>

          <div className="image-wrapper">
            <img className="photo" alt="dumps" src="/northdump1.jpg" />{" "}
          </div>
          <p>
            {" "}
            North Dumpling you are the most beautiful dumpling spot and you dont
            even know it. I follow the directions for your frozen dumplings that
            you pasted on to the glass display next to the spring rolls
            seemingly years ago. Eternal endless bliss pours through your
            dumplings. Bountiful is the vitality of the owners ps.{" "}
          </p>
          <p>As a fan of authentic Chinese cuisine, I can confidently say that North Dumpling is the best dumpling spot in the Lower East Side. I follow the directions for your frozen dumplings that you pasted on to the glass display next to the spring rolls seemingly years ago. With each succulent bite of these homemade dumplings, I am transported to a realm of eternal, endless bliss, where the flavors of Asia come alive.

</p> <p>Located on Essex St, North Dumpling is a true gem in the local food scene of NYC. The Chinese-style dumplings are a beloved staple of this city's cuisine, and North Dumpling's take on them is simply unmatched. Whether you're a seasoned dumpling enthusiast or new to the game, these frozen dumplings are a must-try.
</p> <p>
And let us not forget the vitality of your owners, whose passion for creating the perfect dumpling is evident in every morsel. Their dedication to preserving the flavors and traditions of Chinese cuisine is truly admirable. Thank you for being a part of the vibrant food culture of the Lower East Side, North Dumpling.
        </p></div>
      </div>

      <ContentCard />
    </>
  );
}
