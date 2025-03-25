"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Bubble.module.css";
import ContentCard from "../(components)/ContentCard";
import RecipeList from "../(components)/Recipes";
import RevolvingGLBPage from '../(components)/Logo3D';
import Nav from "../(components)/Nav";

const Home = () => {
  const foodItems = [
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
    }
  ];

  const culturalItems = [
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
    {
      href: "/artandfish",
      img: "https://res.cloudinary.com/adamaslan/image/upload/v1654729613/drinksfoodlife/fish_ddrxgr.jpg",
      title: "Art and Fish",
      subtitle: "The Story of Nicole Burko"
    },
    {
      href: "/stylish-in-aspen-drinking-rose-at-bonnies",
      img: "https://res.cloudinary.com/adamaslan/image/upload/v1678159115/drinksfoodlife/rose_mgk9sv.jpg",
      title: "Aspen Culture",
      subtitle: "Whispering Angel Rose at Bonnies"
    }
  ];

  const featureItems = [
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
    {
      href: "/3valuewines",
      img: "/diablo.png",
      title: "3 Value Wines",
      subtitle: "Premium Red Wines Selection"
    },
    {
      href: "/seawolf",
      img: "https://res.cloudinary.com/adamaslan/image/upload/v1654824690/drinksfoodlife/notes_bovahb.jpg",
      title: "Sea Wolf Experience",
      subtitle: "Writing Away Sunny Days"
    }
  ];

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
          <Link href="/about" className={styles.interactive3D}>
            <div className={styles.squareAspect}>
              <RevolvingGLBPage 
                glbFile="/dfl-loading3.glb"
                style={{ width: '100%', height: '100%' }}
              />
            </div>
            <div className={styles.captionBox}>
              <h2>Custom 3D Ads Available!</h2>
              <p>Contact us for immersive advertising solutions</p>
            </div>
          </Link>
        </section>

        {/* Cultural Highlights */}
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
          <div className={styles.gridCard}>
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
