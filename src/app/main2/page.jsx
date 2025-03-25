"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Bubble2.module.css";
import ContentCard from "../(components)/ContentCard";
import RecipeList from "../(components)/Recipes";
import Nav from "../(components)/Nav";
// import dynamic from 'next/dynamic';
import RevolvingGLBPage from '../(components)/Logo3D';


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
  
  <div className={styles.gridcontainer4}>
  
  <Link href="/besttacosinbk" passHref>
    <div className={styles.gridcontainer5}>
      <img
          className={styles.photo}
          src="https://res.cloudinary.com/adamaslan/image/upload/v1685058269/tacos1_onlnoj.jpg"   width="500"
  
          alt="food"
      />
      <h2 className={styles.sect3}>Taco Poll Brooklyn <br />See the results of our hotly contested poll!</h2>
    </div>
  </Link>
  
  <Link href="/artandfish" passHref>
    <div className={styles.gridcontainer5}>
      <img
          className={styles.photo}
           src="https://res.cloudinary.com/adamaslan/image/upload/v1654729613/drinksfoodlife/fish_ddrxgr.jpg"
           alt="food"
      />
      <h2 className={styles.sect3}>Art and Fish: <br/> The Story of Nicole Burko</h2>
    </div>
  </Link>
  
  <Link href="./stylish-in-aspen-drinking-rose-at-bonnies" passHref>
    <div className={styles.gridcontainer5}>
      <img
          className={styles.photo}
          src="https://res.cloudinary.com/adamaslan/image/upload/v1678159115/drinksfoodlife/rose_mgk9sv.jpg"
          alt="Aspen"
      />
      <h2 className={styles.sect3}>Awe and Culture in Aspen:{" "}<br />
      Whispering Angel Rose at Bonnies</h2>
    </div>
  </Link>
  <Link href="/summercocktailspart1" passHref>
    <div className={styles.gridcontainer5}>
      <img
         className={styles.photo}
          alt='cocktail'
        src="https://res.cloudinary.com/adamaslan/image/upload/v1655411125/drinksfoodlife/danburydonkey_mdavxe.jpg"
      />{" "}
      <h2 className={styles.sect3}> Summer Cocktails Part 1
      The Danbury Donkey by @chemixtry</h2>{" "}
    </div>
  </Link>
  
  
  <Link href="/babydaddy" passHref>
    <div className={styles.gridcontainer5}>
      <img
          className={styles.photo}
          src="https://res.cloudinary.com/adamaslan/image/upload/v1654731696/drinksfoodlife/babydaddy2_u29dmu.png"
  
          alt="beer"
      />
      <h2 className={styles.sect3}>Baby Daddy Please<br />Baby Daddy is a great choice</h2>
    </div>
  </Link>
  
  <Link href="/cafeversailles" passHref>
    <div className={styles.gridcontainer5}>
      <img
          className={styles.photo}
           alt="cafe versailles"
            src="/versailles.jpg"
      />
      <h2 className={styles.sect3}>In Love with: <br />Cafe Versailles</h2>
    </div>
  </Link>
  
  <Link href="/mole" passHref>
  <div className={styles.gridcontainer5}>
    <img
        className={styles.photo}
        alt="mole"
  
        src="https://res.cloudinary.com/adamaslan/image/upload/v1654895312/drinksfoodlife/cdmx1_zm5yyj.jpg"
    />{" "}
          <div className={styles.card8}>
    <h2> On the Love of Mole and Mexico<br />Mole, Mexico, Oh My!</h2>
    </div>
  </div>
  </Link>
  </div>
  <div className={styles.gridcontainerb}>
  <Link href="/3valuewines" passHref>
    <div className={styles.itemb}>
      <img
          className={styles.photo}
           alt="wine"
            src="/diablo.png"
      />
      <div className={styles.card9}>
      <h2>3 High Value <br />Red Wines</h2>
      </div>
    </div>
  </Link> 
  
  <Link href="/coyoacan">
  <div className={styles.gridcontainer5}>
  <img
  className={styles.photo}
  alt="mole"
  src="https://res.cloudinary.com/adamaslan/image/upload/v1654900212/drinksfoodlife/cdmx2_u0b4mi.jpg"
  />
  <div className={styles.card5}>
  <h2>Getting Deep in Coyoacan</h2>
  <h3>Frida, the Trees, the Food..Life!</h3>
  </div>
  </div>
  </Link>
  
  <Link href="/seawolf" passHref>
    <div className={styles.gridcontainer5}>
      <img
          className={styles.photo}
        alt="Sea Wolf"
  
        src="https://res.cloudinary.com/adamaslan/image/upload/v1654824690/drinksfoodlife/notes_bovahb.jpg"
      />{" "}
    </div>
  </Link>
  <Link href="/seawolf" passHref>
    <div className={styles.card6}>
      <h2> Writing Away My Sunny Days at Sea Wolf</h2>
      <h3>Sea Wolf Brings the Boys to the Yard</h3>
    </div>
  </Link>
  <Link href="/naplesbotanicalgardenwelcomesfrida" passHref>
    <div className={styles.gridcontainer5}>
      <img
          className={styles.photo}
        alt="Frida"
  
        src="https://res.cloudinary.com/adamaslan/image/upload/v1681154705/drinksfoodlife/frida-diego_fi26ml.jpg"
      />{" "}
    </div>
  </Link>
  <Link href="/naplesbotanicalgardenwelcomesfrida" passHref>
    <div className={styles.card8}>
      <h2> Naples Botanical Garden Welcomes Frida and the Casa Azul </h2>
      <h3>
        Celebrating of Art, Nature, and Mexican Culture in Southwest
        Florida
      </h3>
    </div>
  </Link>
  <div className={styles.gridcontainerb}>


  {/* New Cell 1 */}
  <Link href="/new-eats-1" passHref>
    <div className={styles.gridcontainer5}>
      <img
        className={styles.photo}
        src="https://res.cloudinary.com/adamaslan/image/upload/v1654900212/drinksfoodlife/cdmx2_u0b4mi.jpg"
        alt="new food"
      />
      <div className={styles.card10}>
        <h2>New Culinary Adventures</h2>
        <h3>Exploring Fresh Flavors</h3>
      </div>
    </div>
  </Link>

  {/* New Cell 2 */}
  <Link href="/new-drinks-2" passHref>
    <div className={styles.gridcontainer5}>
      <img
        className={styles.photo}
        src="https://res.cloudinary.com/adamaslan/image/upload/v1655411125/drinksfoodlife/danburydonkey_mdavxe.jpg"
        alt="drinks"
      />
      <div className={styles.card11}>
        <h2>Cocktail Chronicles</h2>
      </div>
    </div>
  </Link>

  {/* New Cell 3 */}
  <Link href="/new-place-3" passHref>
    <div className={styles.gridcontainer5}>
      <img
        className={styles.photo}
        src="https://res.cloudinary.com/adamaslan/image/upload/v1681154705/drinksfoodlife/frida-diego_fi26ml.jpg"
        alt="place"
      />
      <div className={styles.card12}>
        <h2>Hidden Gems</h2>
        <h3>Secret Spots Revealed</h3>
      </div>
    </div>
  </Link>

  {/* New Cell 4 */}
  <Link href="/new-culture-4" passHref>
    <div className={styles.gridcontainer5}>
      <img
        className={styles.photo}
        src="https://res.cloudinary.com/adamaslan/image/upload/v1654729613/drinksfoodlife/fish_ddrxgr.jpg"
        alt="culture"
      />
      <div className={styles.card13}>
        <h2>Cultural Bites</h2>
      </div>
    </div>
  </Link>

  {/* New Cell 5 */}
  <Link href="/new-wine-5" passHref>
    <div className={styles.gridcontainer5}>
      <img
        className={styles.photo}
        src="https://res.cloudinary.com/adamaslan/image/upload/v1678159115/drinksfoodlife/rose_mgk9sv.jpg"
        alt="wine"
      />
      <div className={styles.card14}>
        <h2>Wine Wonders</h2>
        <h3>Best Vintage Finds</h3>
      </div>
    </div>
  </Link>

  {/* New Cell 6 */}
  <Link href="/new-food-6" passHref>
    <div className={styles.gridcontainer5}>
      <img
        className={styles.photo}
        src="https://res.cloudinary.com/adamaslan/image/upload/v1685058269/tacos1_onlnoj.jpg"
        alt="food"
      />
      <div className={styles.card15}>
        <h2>Foodie Heaven</h2>
        <h3>Taste the Magic</h3>
      </div>
    </div>
  </Link>
</div>
  {/* </div> */}
  </div>
  
   </div>
  
      
  };
  
  export default Home;
  