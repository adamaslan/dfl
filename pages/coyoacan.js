//d
//mole

import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Layout.module.css";
import ContentCard from "../components/ContentCard";

import headerStyles from "../styles/Header.module.css";

export default function Home() {
  return (
    <>
      <Head>
        
        <title>On the Love of Mole and Coyoacan</title>
        <meta name="coyocan, mole, market, mexico, mexico city, cdmx food" content="A journey through Coyoacan Market and all the great things we found including Mole" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <div className={styles.article1}>
          <br />
          <p className={headerStyles.description}>
            Getting Deep in Coyoacan <br />
            <div className="card4">
              <Image
                alt="mole"
                width={872}
                height={872}
                src="https://res.cloudinary.com/adamaslan/image/upload/v1654900212/drinksfoodlife/cdmx2_u0b4mi.jpg"
              />{" "}
            </div>
          </p>
          <p>
            I love Coyoacan. I love Frida Kahlo. What a lovely way to spend the
            day, visiting the Blue House and the market in Coyoacan! It was also
            a deeply emotional experience. Having visited a flower filled
            graveyard nearby. I was struck by the living flower plants growing
            amongst freshly layed flowers soon to dry juxtaposed to signs on the
            graves that would feature sad lements at death and loss. After all
            of that I was ready for some{" "}
            <a href="./mole">
              <u>mole</u>
            </a>
          </p>
        </div>
      </div>
      <ContentCard />
    </>
  );
}
