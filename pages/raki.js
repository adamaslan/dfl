import Head from "next/head";

import styles from "../styles/Layout.module.css";
import ContentCard from "../components/ContentCard";

import headerStyles from "../styles/Header.module.css";

export default function Home() {
  return (
    <>
      <Head>
        git
        <title>On the Love of Raki and Turkish Food</title>
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
          <div className={headerStyles.description}>
            On the Love of Raki and Turkish Food <br />
            <div className="image-wrapper">
              <img
                alt="fish plate"
                className="photo"
                src="https://res.cloudinary.com/adamaslan/image/upload/v1664330111/drinksfoodlife/raki_iaoqaw_b5103d.jpg"
              />{" "}
            </div>
          </div>
          <p>
            A little bit of Raki goes a long way. Add a couple ice cubes or water and
            suddenly its a glory of cloud liquid called "Aslan Sütü", meaning "Lion’s Milk". It still has that strong anise taste which is said to inspire power and bravery. All of these things add up to make it a
            great digestif or first drink.{" "}Raki is also a symbol of Turkish culture and hospitality, often served with meze and enjoyed in a similar way of sharing a bottle of wine with friends.
          </p>{" "}

          <p>
            {" "}
            Turkish Grill in Sunnyside Queens is a great place to enjoy Raki. It
            costs only 12 dollars and comes with this elegant and efficient set
            up. You can also order delicious Turkish dishes, such as kebabs, manti, lahmacun, and baklava, to pair with your drink. The restaurant has a fun and cozy and atmosphere, with attentive staff and authentic decor. Turkish Grill is open every day from 11:30 am to 10:30 pm (11:00 pm on weekends), and you can order online or make a reservation.
          </p>
          <p>
            Turkish Grill is located at 4203 Queens Blvd, Sunnyside, NY 11104
          </p>

          <p>
            Learn more about{" "}
            <a href="http://www.efealkollu.com.tr/index.php/en/history-of-raki/">
              <u>the history of raki here.</u>
            </a>{" "}

          </p>
          <p>
Checkout Turkish Grill's website
         <a href='http://www.turkishgrillnewyork.com/'>
             {" "}<u>here.</u>
        </a>{" "}

      </p>
        </div>
      </div>
<div>

</div>
      <ContentCard className={styles.card7} />
    </>
  );
}
