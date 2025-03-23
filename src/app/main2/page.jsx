"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Bubble.module.css";
import ContentCard from "../(components)/ContentCard";
import RecipeList from "../(components)/Recipes";
// import RevolvingGLBPage from '../(components)/Logo3D';
import Nav from "../(components)/Nav";
import dynamic from 'next/dynamic';

// Dynamically import 3D component with SSR disabled
const RevolvingGLBPage = dynamic(
  () => import('../(components)/Logo3D'),
  { ssr: false }
);

const Home = () => {
  // Content arrays remain the same as previous answer
  
  return (
    <div className={styles.vars}>
      <main className={styles.mainGrid}>
        {/* Featured Food Section */}
        <section className={styles.gridSection}>
          {foodItems.map((item, index) => (
            <Link key={index} href={item.href} className={styles.gridCard}>
              <div className={styles.squareAspect}>
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className={styles.photo}
                  priority={index < 4}
                />
              </div>
              <div className={styles.captionBox}>
                <h2>{item.title}</h2>
                <p>{item.subtitle}</p>
              </div>
            </Link>
          ))}
        </section>

        {/* 3D Ad Section */}
        <section className={`${styles.gridCard} ${styles.adBubble}`}>
          <Link href="/about">
            <div className={styles.threeDContainer}>
              <RevolvingGLBPage 
                glbFile="/dfl-loading3.glb"
                style={{ 
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  top: 0,
                  left: 0
                }}
              />
            </div>
            <div className={styles.captionBox}>
              <h2>Custom 3D Ads Available!</h2>
              <p>Contact us for immersive advertising solutions</p>
            </div>
          </Link>
        </section>

        {/* Other sections remain similar with proper color classes */}
        
        {/* Cultural Highlights Section */}
        <section className={styles.gridSection}>
          {culturalItems.map((item, index) => (
            <Link key={index} href={item.href} className={styles.gridCard}>
              <div className={styles.squareAspect}>
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className={styles.photo}
                />
              </div>
              <div className={styles.captionBox}>
                <h2>{item.title}</h2>
                <p>{item.subtitle}</p>
              </div>
            </Link>
          ))}
        </section>

        {/* Recipes & Content */}
        <section className={styles.gridSection}>
          <div className={styles.gridCard}>
            <ContentCard />
          </div>
          <div className={`${styles.gridCard} ${styles.adBubble}`}>
            <RecipeList />
          </div>
        </section>

        {/* Additional Features */}
        <section className={styles.gridSection}>
          {featureItems.map((item, index) => (
            <Link key={index} href={item.href} className={styles.gridCard}>
              <div className={styles.squareAspect}>
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className={styles.photo}
                />
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