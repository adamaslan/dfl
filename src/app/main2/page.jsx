"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Bubble.module.css";
import ContentCard from "../(components)/ContentCard";
import RecipeList from "../(components)/Recipes";
import RevolvingGLBPage from '../(components)/Logo3D';
import Nav from "../(components)/Nav";


const Home = () => {
  return (
    <div className={styles.vars}> 
    <main className={styles.mainGrid}>
      {/* Featured Food Section */}
      <section className={styles.gridSection}>
        {[
          {
            href: "/raki",
            img: "https://res.cloudinary.com/adamaslan/image/upload/v1664330111/drinksfoodlife/raki_iaoqaw_b5103d.jpg",
            title: "Raki & Turkish Food",
            subtitle: "Dining at Turkish Grill in Queens"
          },
          {
            href: "/sherrycbasedocktailperfectforsummer",
            img: "https://res.cloudinary.com/adamaslan/image/upload/v1660751024/drinksfoodlife/grandarmypunch_e9pums.jpg",
            title: "Summer Cocktails Part 2",
            subtitle: "Grand Army Punch by @chemixtry"
          },
          // Add other food items here
        ].map((item, index) => (
          <Link key={index} href={item.href} className={styles.contentCard}>
            <div className={styles.bubbleMedia}>
              <Image
                src={item.img}
                alt={item.title}
                fill
                className={styles.photo}
              />
            </div>
            <div className={styles.bubbleCaption}>
              <h2>{item.title}</h2>
              <p>{item.subtitle}</p>
            </div>
          </Link>
        ))}
      </section>

      {/* 3D Ad Section */}
      <section className={`${styles.contentCard} ${styles.adBubble}`}>
        <Link href="/about" className={styles.interactive3D}>
          <RevolvingGLBPage 
            glbFile="/dfl-loading3.glb"
            style={{ width: '100%', height: '100%' }}
          />
          <div className={styles.bubbleCaption}>
            <h2>Custom 3D Ads Available!</h2>
            <p>Contact us for immersive advertising solutions</p>
          </div>
        </Link>
      </section>

      {/* Restaurant Guides */}
      <section className={styles.gridSection}>
        {[
          {
            href: "/northdumplingindimessquare",
            img: "https://res.cloudinary.com/adamaslan/image/upload/v1654718488/drinksfoodlife/northdump1_dptuen.jpg",
            title: "North Dumpling Guru",
            subtitle: "Dimes Square Dumplings"
          },
          {
            href: "/besttacosinbk",
            img: "https://res.cloudinary.com/adamaslan/image/upload/v1685058269/tacos1_onlnoj.jpg",
            title: "Taco Poll Brooklyn",
            subtitle: "See our hotly contested results!"
          },
          // Add other guides here
        ].map((item, index) => (
          <Link key={index} href={item.href} className={styles.contentCard}>
            <div className={styles.bubbleMedia}>
              <Image
                src={item.img}
                alt={item.title}
                fill
                className={styles.photo}
              />
            </div>
            <div className={styles.bubbleCaption}>
              <h2>{item.title}</h2>
              <p>{item.subtitle}</p>
            </div>
          </Link>
        ))}
      </section>

      {/* Cultural Highlights */}
      <section className={styles.gridSection}>
        {[
          {
            href: "/coyoacan",
            img: "https://res.cloudinary.com/adamaslan/image/upload/v1654900212/drinksfoodlife/cdmx2_u0b4mi.jpg",
            title: "Discovering Coyoacan",
            subtitle: "Frida, Food, and Culture"
          },
          {
            href: "/naplesbotanicalgardenwelcomesfrida",
            img: "https://res.cloudinary.com/adamaslan/image/upload/v1681154705/drinksfoodlife/frida-diego_fi26ml.jpg",
            title: "Naples Botanical Garden",
            subtitle: "Celebrating Mexican Culture"
          },
          // Add other cultural items
        ].map((item, index) => (
          <Link key={index} href={item.href} className={styles.contentCard}>
            <div className={styles.bubbleMedia}>
              <Image
                src={item.img}
                alt={item.title}
                fill
                className={styles.photo}
              />
            </div>
            <div className={styles.bubbleCaption}>
              <h2>{item.title}</h2>
              <p>{item.subtitle}</p>
            </div>
          </Link>
        ))}
      </section>

      {/* Recipes & Drinks */}
      <section className={`${styles.gridSection} ${styles.recipeBubble}`}>
        <ContentCard />
        <RecipeList />
      </section>

      {/* Additional Features */}
      <section className={styles.gridSection}>
        {[
          {
            href: "/babydaddy",
            img: "https://res.cloudinary.com/adamaslan/image/upload/v1654731696/drinksfoodlife/babydaddy2_u29dmu.png",
            title: "Baby Daddy Please",
            subtitle: "Great Beer Choice"
          },
          {
            href: "/mole",
            img: "https://res.cloudinary.com/adamaslan/image/upload/v1654895312/drinksfoodlife/cdmx1_zm5yyj.jpg",
            title: "Love of Mole",
            subtitle: "Mexican Culinary Journey"
          },
          // Add remaining items
        ].map((item, index) => (
          <Link key={index} href={item.href} className={styles.contentCard}>
            <div className={styles.bubbleMedia}>
              <Image
                src={item.img}
                alt={item.title}
                fill
                className={styles.photo}
              />
            </div>
            <div className={styles.bubbleCaption}>
              <h2>{item.title}</h2>
              <p>{item.subtitle}</p>
            </div>
          </Link>
        ))}
      </section>
    </main>
    </div>
  );
};

export default Home;