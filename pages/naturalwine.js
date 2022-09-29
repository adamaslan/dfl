import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Layout.module.css";
import ContentCard from "../components/ContentCard";

import headerStyles from "../styles/Header.module.css";

export default function Home() {
  return (
    <>
      <Head>
        git
        <title>On the Art and Spear Fishing of Nicole Burko </title>
       <meta name="Natural Wine Bushwick" content="Natural Red Wine purchased at Irving Bottle" />
        <meta name="Drinks Food Life Bushwick" content="Based in NYC covering Food Spirits and Wine based around Bushwick Ridgewood Chinatown and the LES. " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <div className={styles.article1}>
          <p className={headerStyles.description}>
            An Awkward Question about Natural Wine
          </p>
          <div className="image-wrapper">
            <Image alt="wine" width={554} height={554} src="/coup-wine.jpg" />{" "}
          </div>
          <p>
            {" "}
            An awkward question is posed, “hey...there...I'm looking for a
            ...natural wine...something funky...that isn’t going to cost over
            twenty five dollars?”{" "}
          </p>{" "}
          <p>
            If you are like me, then your normal speaking voice is ridden with
            pauses so as to humbly point out a lack of certainty. Luckily, the people at <a><u>Irving Bottle<u/></a>W]hen it comes
            to the new movement of natural wines, one could say the whole
            movement should be speaking in such a tone. A movement that is
            clearly going to gain steam in 2019, natural wines do not come with
            a specific certification one has to pay for necessarily, like a wine
            that is certified organic or biodynamic for example and thus, the
            definition of natural is open to interpretation.
          </p>
          <p>
            {" "}
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
            {" "}
            What is the best reason? The unique funky taste. When I awkwardly
            asked an employee at Irving Bottle, located on...Irving Ave (who
            would have guessed???) in Bushwick Brooklyn, if they had a funky yet
            affordable natural red, I was delighted to find out that this
            neighborhood gem did indeed carry an array of such wines. The wine
            they suggested to me was the Coup de Canon produced by Gregory
            Leclerc of Domaine Chahut et Prodiges located in the Loire Valley.{" "}
          </p>
        </div>
      </div>
      <div className="wrapper">
        <a href="./amaromontenegro">
          <ContentCard
            img="https://lh3.googleusercontent.com/SpfSt4EadOjpRUZCfjEPu_bl5mCTyXq5skTyHKKqwcCt1hUzXHZ5ZxU9rPg_oY4e_tIZQQnZb4RD4FjBFzJTmMGKArLmctic3R1oD7GbBy_kXHazlVy1QdGWiN0ywz1GGenQRrCl2w=w2400"
            title="Drinking Amaros at ZXY Gallery"
            description="Amaro Montenegro making an appearance at ZXY Gallery"
            tag="amaromontenegro"
            href="amaromontenegro"
          />
        </a>

        <a href="./northdumpling">
          <ContentCard
            img="https://images.unsplash.com/photo-1529928520614-7c76e2d99740?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
            title="North Dumpling"
            description="In love with North Dumpling "
            href="northdumpling"
          />
        </a>
      </div>
    </>
  );
}
