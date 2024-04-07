import Head from "next/head";
import Image from "next/image";
import styles from "./styles/Layout.module.css";
import ContentCard from "../components/ContentCard";
import headerStyles from "./styles/Header.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>In Love with Cafe Versailles</title>
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
          <p className={headerStyles.description}>
            In Love with Cafe Versailles
            <div className="image-wrapper">
              <img
                className="photo"
                alt="cafe versailles"
                src="/versailles.jpg"
              />{" "}
            </div>
          </p>
          <br />
          <p>
            This is Adam Aslan. He Loves Cafe Versailles. He took his family
            there. Other families go there. Its like my memory of my grandpa
            eating pumpkin pie as I eat pumpkin pie with my mom's homemade whip
            creme except its like delicious cafecitos and ceviche. Its also
            known as the world's most famous Cuban restraurant, but that
            resonates with me because it has actually touched the hearts of many
            in the Cuban and greater Latino population in Miami regardless of
            income level. They have a location in Little Haiti and in the Miami
            Airport, which makes MIA one of the more culturally relevant
            airports in the US in competition with DEN to name one.
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
      <div className={styles.smain}>
        Contact us cause this is now the footer
      </div>
    </>
  );
}
