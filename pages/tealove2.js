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
          On the Love of Loose Tea: 5 Reasons Why Loose Tea is Great
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
      <div className={styles.gridcontainer4}>
        <div className={headerStyles.description}>
          5 Reasons Why You Should Drink Loose Teas
          <br />
          <img
            className={styles.photo}
            alt="market"
            src="https://res.cloudinary.com/adamaslan/image/upload/v1654718487/drinksfoodlife/teasecret1_corwi6.jpg"
          />{" "}
        </div>
        <p>
          Lots to say about the tea in its loosest form and genmaicha...and Porto
          Rico Importing Company which dates back to 1907. Here are 5 reasons why
          loose tea is great!
        </p>
        <ol>
          <li>
            <strong>Lots of flavor:</strong> Loose tea leaves are larger and less
            processed than tea found in bags, which means they retain more of their
            natural oils and flavor.
          </li>
          <li>
            <strong>Higher quality:</strong> Loose tea is often made from better
            quality tea leaves compared to the broken leaves and dust found in tea
            bags.
          </li>
          <li>
            <strong>Health benefits:</strong> Loose tea contains antioxidants,
            polyphenols, and other beneficial compounds that can help support
            overall health and well-being.
          </li>
          <li>
            <strong>Customizable:</strong> Loose tea allows for more control over
            the strength and flavor of your tea. You can adjust the amount of tea
            leaves and steeping time to your liking.
          </li>
          <li>
            <strong>Eco-friendly:</strong> Loose tea generates less waste than tea
            bags, which are often made with non-biodegradable materials like nylon
            or polyester.
          </li>
        </ol>
      </div>
      <ContentCard />
      <div className={styles.smain}>
        Contact us cause this is now the footer
      </div>
    </>
  );
}
