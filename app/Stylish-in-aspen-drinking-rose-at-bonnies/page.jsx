import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Layout.module.css";
import ContentCard from "../(components)/ContentCard"; 
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
      <div className={styles.gridcontainer4}>
        <div className={headerStyles.description}>
          Awe and Culture in Aspen: Whispering Angel Rose <br />
          <img
            className={styles.photo}
            alt="Aspen"
            src="https://res.cloudinary.com/adamaslan/image/upload/v1678159115/drinksfoodlife/rose_mgk9sv.jpg"
          />
        </div>
        <p>
          Aspen combines transcendental meaning with a stylish gluttony. If
          you are going to treat yourself, why not just go all the way, but if
          you are trying to do it in a cost effective way that's another
          story.
        </p>
        <p>
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
          dollars.
        </p>
        <p>
          Looking for a winter sports destination that offers both luxurious
          amenities and cost-effective options? Aspen might be just what
          you're looking for. With its reputation for stylish gluttony, Aspen
          certainly has plenty of high-end dining options and luxurious
          accommodations. However, these amenities can come at a high cost,
          making it difficult for travelers on a budget to fully enjoy all
          that Aspen has to offer.
        </p>
        <p>
          On the other hand, Aspen does offer some cost-effective options for
          those who plan ahead, such as purchasing a multi-day pass or finding
          affordable dining options. And with its four mountains, including
          Aspen Mountain and Snowmass, visitors can experience some of the
          best ski slopes in the world. Additionally, Aspen boasts world-class
          spas and resorts, making it a great destination for those who want
          to relax and unwind after a day on the slopes.
        </p>
        <p>
          Aspen's natural beauty, stunning scenery, and awe-inspiring
          landscapes can provide a sense of transcendental meaning for some
          visitors. The feeling of being surrounded by the majestic Rocky
          Mountains, the crisp mountain air, and the serene wilderness can
          inspire a sense of awe and wonder, connecting visitors to something
          greater than themselves.
        </p>
        <p>
          Learn more about{" "}
          <a href="https://www.esclans.com/product/whispering-angel/">
            <u>the Rose</u>
          </a>{" "}
          here.
        </p>
      </div>

      <ContentCard />
    </>
  );
}
