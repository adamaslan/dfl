"use client"
// import Head from "next/head";
import Image from "next/image";
import styles from "./styles/Layout.module.css";
import ContentCard from "./(components)/ContentCard";
import RecipeList from "./(components)/Recipes";
import Link from "next/link";
import Script from "next/script";
// import Newsletter from "../components/Newsletter";
import RevolvingGLBPage from './(components)/Logo3D';


const Home = () => {
  return <div>
      <head>
      <title>Drinks Food Life</title>
      <meta
        name="google-site-verification"
        content="hibJJdNyGOXl4aB0kEVBNFHgXe61cum7gLKs_J2A50A"
      />
      <meta
        name="Drinks Food Life Bushwick"
        content="Based in NYC covering Food Spirits and Wine based around Bushwick Ridgewood Chinatown and the LES. "
      />
      <meta
        property="og:image"
        content="https://res.cloudinary.com/adamaslan/image/upload/v1667159646/drinksfoodlife/dfl-logo_vnu5xy.jpg"
      />

      <link rel="icon" href="/favicon.ico" />
    </head>{" "}
      
    <div className={styles.gridcontainer1} id="parent">
      {/* <Script
        src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
        strategy="afterInteractive"
      /> */}
{/* 
      <Script id="google-analytics" strategy="afterInteractive">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'GA_MEASUREMENT_ID');
      `}
      </Script> */}
      


      <Link href="./raki" passHref>
        <div className={styles.griditem1}>
          <img
              className="photo"
              alt='food'
            src="https://res.cloudinary.com/adamaslan/image/upload/v1664330111/drinksfoodlife/raki_iaoqaw_b5103d.jpg"
          />{" "}
          <h2> On the Love of Raki and Turkish Food</h2>{" "}
          <h3>Dining at Turkish Grill in Queens</h3>
        </div>
      </Link>

      <Link href="/sherrycbasedocktailperfectforsummer" passHref>
        <div className={styles.griditem1}>
          <img
              className="photo"
              alt='cocktail'
            src="https://res.cloudinary.com/adamaslan/image/upload/v1660751024/drinksfoodlife/grandarmypunch_e9pums.jpg"
          />{" "}
          <h2> Summer Cocktails Part 2</h2>{" "}
          <h3>Grand Army Punch by @chemixtry</h3>
        </div>
      </Link>
      <Link href="./about" passHref>
        <div className={styles.griditem1}>
        <RevolvingGLBPage glbFile="/dfl-loading3.glb"     style={{ width: '90%', height: '70vh'}} />
          <h2> Think this 3D logo is cool?</h2>{" "}
          <h3>Let us make you one for an Ad on our site! Contact us today!</h3>
        </div>
      </Link>

      <Link href="/northdumplingindimessquare" passHref>
        <div className={styles.griditem1}>
        <img
            className="photo"
          alt='dumpling'
            src="https://res.cloudinary.com/adamaslan/image/upload/v1654718488/drinksfoodlife/northdump1_dptuen.jpg"
          />{" "}
          <h2> North Dumpling, the Guru of Dimes Square,</h2>{" "}
          <h3> Dumplings Shining Brightly on the Lower East Side</h3>
        </div>
      </Link>
    </div>


    <ContentCard />
<RecipeList />


 </div>

    
};

export default Home;
