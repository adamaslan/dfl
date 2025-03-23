"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Bubble.module.css";
import ContentCard from "../(components)/ContentCard";
import RecipeList from "../(components)/Recipes";
import Nav from "../(components)/Nav";
import dynamic from 'next/dynamic';

const RevolvingGLBPage = dynamic(
  () => import('../(components)/Logo3D'),
  { 
    ssr: false,
    loading: () => <div className={styles.loadingBubble} />
  }
);

const Home = () => {
  // Content arrays with gradient classes
  const foodItems = [
    {
      href: "/raki",
      img: "https://res.cloudinary.com/adamaslan/image/upload/v1664330111/drinksfoodlife/raki_iaoqaw_b5103d.jpg",
      title: "Raki & Turkish Food",
      subtitle: "Dining at Turkish Grill in Queens",
      gradient: styles.gradient1
    },
    // ... rest of food items with gradients
  ];

  const culturalItems = [
    {
      href: "/coyoacan",
      img: "https://res.cloudinary.com/adamaslan/image/upload/v1654900212/drinksfoodlife/cdmx2_u0b4mi.jpg",
      title: "Discovering Coyoacan",
      subtitle: "Frida, Food, and Culture",
      gradient: styles.gradient3
    },
    // ... rest of cultural items with gradients
  ];

  const featureItems = [
    {
      href: "/babydaddy",
      img: "https://res.cloudinary.com/adamaslan/image/upload/v1654731696/drinksfoodlife/babydaddy2_u29dmu.png",
      title: "Baby Daddy Please",
      subtitle: "Great Beer Choice",
      gradient: styles.gradient4
    },
    // ... rest of feature items with gradients
  ];

  return (
    <div className={styles.vars}>
      <Nav />
      <main className={styles.mainGrid}>
        {/* Featured Food Section with Bubbles */}
        <section className={styles.gridSection}>
          {foodItems.map((item, index) => (
            <Link 
              key={index} 
              href={item.href} 
              className={`${styles.gridCard} ${item.gradient} ${styles.bubbleHover}`}
            >
              <div className={styles.squareAspect}>
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className={styles.photo}
                  priority={index < 4}
                />
                <div className={styles.imageOverlay} />
              </div>
              <div className={styles.captionBox}>
                <h2>{item.title}</h2>
                <p>{item.subtitle}</p>
              </div>
            </Link>
          ))}
        </section>

        {/* 3D Ad Section */}
        <section className={`${styles.gridCard} ${styles.adBubble} ${styles.float}`}>
          <Link href="/about" className={styles.interactive3D}>
            <div className={styles.threeDContainer}>
              <RevolvingGLBPage 
                glbFile="/dfl-loading3.glb"
                className={styles.threeDModel}
              />
              <div className={styles.bubbleParticles} />
            </div>
            <div className={styles.captionBox}>
              <h2>Custom 3D Ads Available!</h2>
              <p>Contact us for immersive advertising solutions</p>
            </div>
          </Link>
        </section>

        {/* Portrait Ad */}
        <section className={`${styles.gridCard} ${styles.portraitAd}`}>
          <div className={styles.adContent}>
            <span className={styles.adLabel}>Sponsored</span>
            <div className={styles.adPlaceholder} />
          </div>
        </section>

        {/* Cultural Highlights */}
        <section className={styles.gridSection}>
          {culturalItems.map((item, index) => (
            <Link 
              key={index} 
              href={item.href} 
              className={`${styles.gridCard} ${item.gradient} ${styles.bubbleHover}`}
            >
              <div className={styles.squareAspect}>
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className={styles.photo}
                />
                <div className={styles.imageOverlay} />
              </div>
              <div className={styles.captionBox}>
                <h2>{item.title}</h2>
                <p>{item.subtitle}</p>
              </div>
            </Link>
          ))}
        </section>

        {/* Landscape Ad */}
        <section className={`${styles.gridCard} ${styles.landscapeAd}`}>
          <div className={styles.adContent}>
            <span className={styles.adLabel}>Partner Content</span>
            <div className={styles.adPlaceholder} />
          </div>
        </section>

        {/* Recipes & Content */}
        <section className={`${styles.gridSection} ${styles.rainbowGrid}`}>
          <div className={`${styles.gridCard} ${styles.gradient5}`}>
            <ContentCard />
          </div>
          <div className={`${styles.gridCard} ${styles.gradient3} ${styles.float}`}>
            <RecipeList />
          </div>
        </section>

        {/* Additional Features */}
        <section className={styles.gridSection}>
          {featureItems.map((item, index) => (
            <Link 
              key={index} 
              href={item.href} 
              className={`${styles.gridCard} ${item.gradient} ${styles.bubbleHover}`}
            >
              <div className={styles.squareAspect}>
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className={styles.photo}
                />
                <div className={styles.imageOverlay} />
              </div>
              <div className={styles.captionBox}>
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