import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Layout.module.css";
import ContentCard from "../components/ContentCard";

import headerStyles from "../styles/Header.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Awe and Culture in Aspen: Rose and 3D Graphics</title>
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
          <br />
          <p className={headerStyles.description}>
            Awe and Culture in Aspen: Whispering Angel Rose
            <br />
            <img
              className="photo"
              alt="Aspen"
              src="https://res.cloudinary.com/adamaslan/image/upload/v1678159115/drinksfoodlife/rose_mgk9sv.jpg"
            />{" "}
          </p>
          <p>
            Aspen combines transcendental meaning with a stylish gluttony. If
            you are going to treat yourself, why not just go all the way, but if
            you are trying to do it in a cost effective way that's another
            story.{" "}
          </p>{" "}
          <br />
          <p>
            {" "}
            Style can be defined as a way of doing things or appearing. One
            doesn't haaave to pay a lot of money to be stylish or a glutton, but
            it's pretty hard to avoid it in Aspen.
          </p>
          <p>
            However, if you are able to plan ahead and buy a multi-day pass. You
            can find yourself skiing in one of the best mountains in the US if
            not the world in one of the ski world's most famous locations. Not
            only that, if you go to Bonnie's for lunch, you can get yourself and
            a friend a delicious bottle of Whispering Angel Rose for only 45
            dollars.{" "}
          </p>
          <br />
          <p>
            Learn more about{" "}
            <a href="https://www.esclans.com/product/whispering-angel/">
              <u>the Rose</u>
            </a>{" "}
            here.
          </p>
        </div>
      </div>

      <ContentCard />
    </>
  );
}
