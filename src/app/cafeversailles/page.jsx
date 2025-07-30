
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Layout.module.css";
import ContentCard from "../(components)/ContentCard"; 
import headerStyles from "../styles/Header.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>In Love with Café Versailles</title>
        <meta
          property="og:image"
          content="/versailles.jpg"
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
            In Love with Café Versailles
            <div className="image-wrapper">
              <img
                className="photo"
                alt="Café Versailles"
                src="/versailles.jpg"
              />
            </div>
          </p>

          <p>
            This is the founding software engineer of Drinks Food Life, Adam Aslan. He loves Café Versailles. He took his family there, as do so many others. It’s like my memory of my grandpa eating pumpkin pie as I eat pumpkin pie with my mom’s homemade whipped crème, except it’s delicious cafecitos and ceviche. It’s also known as the world’s most famous Cuban restaurant, but that resonates with me because it has actually touched the hearts of many in the Cuban and greater Latino population in Miami regardless of income level. They have a location in Little Haiti and in the Miami Airport, which makes MIA one of the more culturally relevant airports in the U.S., in competition with DEN, to name one.
          </p>

          <p>
            Founded in 1971 by Felipe A. Valls Sr., Café Versailles began as a modest family-run establishment on Calle Ocho in Miami’s vibrant Cuban community. Over the decades, it transformed into a cultural landmark—a meeting place where Cuban exiles and locals gathered to share not only authentic food but also memories, political debates, and stories of a bygone era. Its evolution mirrors Miami’s own transformation, expanding to include an on-site bakery and even a branch at Miami International Airport, each extension celebrating the legacy of a restaurant that has been as much about community as it has been about cuisine.
          </p>

          <p>
            Café Versailles is celebrated for its rich and authentic Cuban fare that masterfully blends tradition with innovative touches. The menu boasts iconic dishes like ropa vieja, vaca frita, and roast pork seasoned with signature Cuban mojo, alongside a range of beloved treats—from perfectly crafted cafecitos and pastelitos to the classic Cuban sandwich. Every dish is prepared with meticulous care and locally sourced ingredients, ensuring that each bite encapsulates the warmth, passion, and heritage of Cuban culture. This dedication to preserving authentic flavors has not only made Café Versailles a culinary institution but also a touchstone of Miami’s dynamic cultural identity.
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
            description="In love with North Dumpling"
            href="northdumpling"
          />
        </a>
      </div>

      <div className={styles.smain}>
        Contact us.
      </div>
    </>
  );
}

