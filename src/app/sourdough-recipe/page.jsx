import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Layout.module.css";
import ContentCard from "../(components)/ContentCard"; 
import headerStyles from "../styles/Header.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title> Easy All Purpose Flour Sourdough Recipe 2025</title>
        <meta
          name="liquor, cocktail, drinks, tasty"
          content="Delicious Summer Cocktails by Chemixtry. Tasty Drinks"
        />
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
        Sourdough Recipe 2025
        </div>
        <div className={styles.gridcontainer5}>
              <img
                className={styles.photo}
                alt="cocktail"
                src="https://res.cloudinary.com/adamaslan/image/upload/v1660751024/drinksfoodlife/grandarmypunch_e9pums.jpg"
              />{" "}
            </div>


          <p>
      Sourdough is delicious, but what is an easy enough way to make it with just all purpose flour.

 <br /> <br />
           You can sub in bread flour for 50 percent of the flour or use all purpose. <br />
            <br />
          Enough talk here's the easy recipe:
            <br />
            - Water: 350g
            <br />
            - Starter: 100g (u can use less starter and substitute with a mix of water and flour)
            <br />
            - Total flour: 500g 
            <br />
            - 10 grams salt (adjust as you see fit)
            <br />
            Pre-heat over to 500°F - heat dutch oven up as well
            <br />
            Place some flour in the bottom of the dutch oven, then add dough
            <br />
            Cook for 20 mins at 500°F
            <br />
           Uncover and cook for another 20 mins at 425°F
            <br />
            Let cool for 1 hour if you have the patience!
          </p>

          <p>
          That's it! Please follow us on instagram @drinksfoodlife if you liked this recipe!
          </p>
        </div>

      <ContentCard />
    </>
  );
}
