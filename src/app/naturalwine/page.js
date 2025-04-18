import Head from "next/head";
import styles from "../styles/Layout.module.css";
import ContentCard from "../(components)/ContentCard"; 
import headerStyles from "../styles/Header.module.css";
import Image from "next/image";

export default function NaturalWine() {
  return (
    <>
      <Head>
        <title> An Awkward Question about Natural Wine</title>
        <meta
          name="Natural Wine Bushwick"
          content="Natural Red Wine purchased at Irving Bottle"
        />
        <meta
          name="Drinks Food Life Bushwick"
          content="Based in NYC covering Food Spirits and Wine based around Bushwick Ridgewood Chinatown and the LES."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/adamaslan/image/upload/v1667159646/drinksfoodlife/dfl-logo_vnu5xy.jpg"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.gridcontainer4}>
        <div className={headerStyles.description}>
          An Awkward Question about Natural Wine <br />
        </div>
        <div className={styles.gridcontainer5}>
        <Image
    className={styles.photo}
    alt="wine"
    src="/coup-wine.jpg"
    layout="responsive"

    width={500} // Optional: specify the width of the image
    height={500} // Optional: specify the height of the image
  />
        </div>
        <p>
          An awkward question is posed, “hey...there...I&apos;m looking for a
          ...natural wine...something funky...that isn’t going to cost over
          twenty five dollars?”
        </p>
        <p>
          If you are like me, then your normal speaking voice is ridden with
          pauses so as to humbly point out a lack of certainty. Luckily, the
          people at{" "}
          <a
            href="https://irvingbottle.com/"
            target="_blank"
            rel="noreferrer"
          >
            <u>Irving Bottle</u>
          </a>{" "}
          are prepared for this. When it comes to the new movement of natural
          wines, one could say the whole movement should be speaking in such a
          tone. A movement that is clearly going to gain steam in 2019,
          natural wines do not come with a specific certification one has to
          pay for necessarily, like a wine that is certified organic or
          biodynamic for example and thus, the definition of natural is open
          to interpretation.
        </p>
        <p>
          While the question of what makes a wine natural is clearly an
          interesting one, another great question is: why is everybody
          freaking out over natural wines? There are several good answers to
          that question. You could answer that question by mentioning all the
          nods to minimalism that comes with natural wine like the lack of or
          minimal use of sulfites, lack of advanced technology, or lack of
          filtration. Another way you could answer that question would be to
          mention how natural wine uses more old school techniques in the wine
          making process. Lets not forget all the cool labels they come with,
          boutique distributors, stores, and restaurants all dedicated to
          natural wine. However, none of these are the best reasons to freak
          out about natural wine.
        </p>
        <p>
          What is the best reason? The unique funky taste. When I awkwardly
          asked an employee at Irving Bottle, located on...Irving Ave (who
          would have guessed???) in Bushwick Brooklyn, if they had a funky yet
          affordable natural red, I was delighted to find out that this
          neighborhood gem did indeed carry an array of such wines. The wine
          they suggested to me was the Coup de Canon produced by Gregory
          Leclerc of Domaine Chahut et Prodiges located in the Loire Valley.
        </p>
      </div>

      <ContentCard />
    </>
  );
}
