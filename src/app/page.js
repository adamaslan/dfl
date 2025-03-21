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

    {/* </div> */}
    </div>

 </div>

    
};

export default Home;

// export default function Home() {
//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//       <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
//           <li className="mb-2">
//             Get started by editing{" "}
//             <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
//               src/app/page.js
//             </code>
//             .
//           </li>
//           <li>Save and see your changes instantly.</li>
//         </ol>

//         <div className="flex gap-4 items-center flex-col sm:flex-row">
//           <a
//             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }
