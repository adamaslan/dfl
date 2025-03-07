import Head from "next/head";

import styles from "../styles/Layout.module.css";
import ContentCard from "../(components)/ContentCard"; 

import headerStyles from "../styles/Header.module.css";

export default function Home() {
  return (
    <>
      <Head>
        git
        <title> 3 Low Cost High Value Red Wines</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className={styles.gridcontainer1}>
        <div className={styles.article1}>
          <br />
          <p className={headerStyles.description}>
            3 Low Cost High Value Red Wines
            <br />
          </p>
          <p>
            If you are looking for wine that is low in cost and high in value,
            we have found 3 that fit the description perfectly.
          </p>

          <p>
            <h2>1. Santa Rita’s 120 Carménère </h2>
            gridcontainer5
            <div className="gridcontainer5">
              <img   className={styles.photo} alt="120 Wine" src="/120.png" />{" "}
            </div>
            While Carménère is not one of the most popular types of wine out
            there it certainly a solid bodied red that is the pride of Chile.
            What makes Santa Rita’s Carménère stand out from the croud is its
            uniquely pleasent mouthfeel characterized by a deep fruitiness. Is
            it sweet? Yes, but still elegant and with a strong nose full of red
            fruit and crisp spices. Especially recommended for the budding red
            wine enthusiast looking to diversify their palate, the 120 Carménère
            evokes the nostalgia for Chilean culture through its taste as well
            as the ‘120’ series name, which is titled after Doña Paula
            Jaraquemada who hid 120 Chilean revolutionaries during their war for
            independence from Spain.
          </p>
          <h2>2) Fetzer Valley Oaks Cabernet Sauvignon</h2>
          <div className="image-wrapper">

              <img   className={styles.photo}
                     alt="Fetzer Wine"

              src="/fetzer.png"
            />{" "}
          </div>
          <p>
            With grapes grown in the valleys of Mendocino County, Fetzer’s
            Valley Oaks offers delightful black currant aromas of aromas of
            higher priced Cabernet Sauvignons at an extremely affordable cost.
            There is plenty to like about this wine with its rich body and
            smooth finish. Owned by Latin American wine giants Concho y Toro,
            Fetzer has created a lovely Cabernet Sauvignon in the foothills of
            Northern California.
          </p>

          <h2>3) Casillero del Diablo Reserva Cabernet Sauvignon</h2>
          <div className="image-wrapper">
            <img   className={styles.photo}
                   alt="Diablo Wine"

              src="/diablo.png"
            />{" "}
          </div>
          <p>
            Described by the wine maker as “Medium bodied with silky tannins”
            the Casillero del Diablo Reserva is yet another solid bet for those
            looking for value at a modest price. Rich in cherry flavors, this
            Cabernet Sauvignon sitting beautifully in the glass with its dark
            red color foreshadows its great taste just by its appearance alone.
            Finding a solid bottle of red wine at good price is not always the
            easiest thing, but these three reds will not do you wrong. They may
            not be the best examples of their specific type of red but they are
            definitely worth a try.
          </p>
        </div>
      </div>

      <ContentCard />
    </>
  );
}
