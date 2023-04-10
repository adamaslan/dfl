import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Layout.module.css";
import ContentCard from "../components/ContentCard";

import headerStyles from "../styles/Header.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Naples Botanical Garden Welcomes Frida and the Casa Azul</title>
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
            Naples Botanical Garden Welcomes Frida and the Casa Azul
            <br />
            <img
              className="photo"
              alt="Aspen"
              src="https://res.cloudinary.com/adamaslan/image/upload/v1681154705/drinksfoodlife/frida-diego_fi26ml.jpg"
            />{" "}
          </p>
          <p>
            The Frida Exhibit at the{" "}
            <a href="https://www.naplesgarden.org/">
              <u>Naples Botanical Garden</u>
            </a>{" "}
            is a breathtaking display of Mexican culture, art, and nature. The
            exhibit showcases replicas from Frida Kahlo's Casa Azul, her garden,
            and the plants of Mexico, all of which were central to Kahlo's life
            and art. Frida Kahlo was a renowned Mexican artist who gained
            international recognition for her unique style and portrayal of
            Mexican culture. The Casa Azul, where she was born and raised, is
            now a museum in Mexico City that houses her personal belongings,
            artwork, and a collection of Mexican folk art.
          </p>{" "}
          <br />
          <p>
            {" "}
            The Naples Botanical Garden's Frida Exhibit features replicas of
            some of Kahlo's most iconic works, including her self-portraits, her
            famous portraits of Diego Rivera, and her paintings of Mexican
            culture and nature. The exhibit also includes replicas of Kahlo's
            personal belongings, such as her traditional Mexican dresses, her
            jewelry, and her household items. One of the most impressive aspects
            of the exhibit is the recreation of Kahlo's garden. The garden was a
            vital part of Kahlo's life, and she spent countless hours tending to
            it, planting new species of plants and flowers and creating
            beautiful arrangements. The garden was also a source of inspiration
            for many of her paintings, including her famous painting, "The Two
            Fridas."
          </p>
          <p>
            The Naples Botanical Garden's replica of Kahlo's garden includes a
            variety of plants and flowers that were native to Mexico, such as
            marigolds, dahlias, and Mexican sunflowers. The garden is arranged
            in a way that mirrors the layout of Kahlo's original garden, with
            paths lined with stones and pots filled with brightly colored
            flowers. The exhibit also features a collection of plants from
            Mexico that were important to Kahlo, including the agave plant,
            which is used to make tequila, and the prickly pear cactus, which
            was a staple food source for the indigenous people of Mexico. These
            plants are not only beautiful, but they also offer visitors a
            glimpse into the culture and history of Mexico.
          </p>
          <p>
            Learn more about{" "}
            <a href="https://www.museofridakahlo.org.mx/">
              <u>the Casa Azul</u>
            </a>{" "}
            here.
          </p>
          <img
            alt="Frida"
            className={"photo"}
            src="https://res.cloudinary.com/adamaslan/image/upload/v1681154705/drinksfoodlife/mexican-flowers_zxo1vw.jpg"
          />{" "}
        </div>
      </div>

      <ContentCard />
    </>
  );
}
