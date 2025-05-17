import styles from "../styles/Layout.module.css";
import ContentCard from "../(components)/ContentCard";
import headerStyles from "../styles/Header.module.css";

// Shared constants
const PAGE_TITLE = 'The Most Fun...Conventions in the World';
const FIRST_IMAGE = {
  path: '/fest1.png',
  alt: 'Fun Fest',
  width: 1200,
  height: 630,
  credit: 'Article by Adam Aslan'
};

export const metadata = {
  title: PAGE_TITLE,
  description: 'Shining a light on the road to the most fun conventions in the world',
  openGraph: {
    title: PAGE_TITLE,
    description: 'Shining a light on the road to the most fun conventions in the world',
    images: [{
      url: FIRST_IMAGE.path,
      width: FIRST_IMAGE.width,
      height: FIRST_IMAGE.height,
      alt: FIRST_IMAGE.alt,
    }],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    images: {
      url: FIRST_IMAGE.path,
      alt: FIRST_IMAGE.alt,
      width: FIRST_IMAGE.width,
      height: FIRST_IMAGE.height,
    }
  }
};

export default function Home() {
  return (
    <div className={styles.gridcontainer4}>
      <div className={headerStyles.description}>
        {PAGE_TITLE}<br />
      </div>

      <div className={styles.summary}>
        {metadata.description}
      </div>

      <div className={styles.gridcontainer5}>
        <img
          className={styles.photo}
          alt={FIRST_IMAGE.alt}
          src={FIRST_IMAGE.path}
          width={FIRST_IMAGE.width}
          height={FIRST_IMAGE.height}
        />
        <p className={styles.caption}>{FIRST_IMAGE.credit}</p>
      </div>
<p>Most industries struggle to make their conventions fun, even for those deeply interested in the industry. Informative, yes. Fun, no. Well, the spirits industry is not exactly typical in this regard, and things can get a little too fun. Here are the two most fun conventions in one of the most fun industries: Tales of the Cocktail and Bar Convent Brooklyn.
</p>

<h2>Tales of the Cocktail -
 
 When & Where: July 20th - 25th, New Orleans, LA</h2>
     <p> Now in its 21st year, this five-day mixology festival offers seminars, tastings, and awards galas, drawing bartenders, brand owners, and cocktail enthusiasts from 52 countries and all U.S. states Tales of the Cocktail hosts the Spirited Awards®, one of the spirits world's most prestigious honors, recognizing excellence across professionals, bars, media, and products. Since 2007, the Awards have spotlighted categories such as "Bartender of the Year," "Best Cocktail Bar (U.S. & International)," and "Best Cocktail & Spirits Publication," with an annual ceremony held during the conference.</p>
      <p>
          For more on Tales of the Cocktail click <a href="https://talesofthecocktail.org/"><u>here</u></a>
        </p>

<h2>Bar Convent Brooklyn -
When & Where: June 10th - 11th, Industry City, Brooklyn, NY</h2>
 <p>This two-day trade show for bar and beverage professionals featuring 230 brands, educational panels, and themed activations such as an Italian Trade Agency Pavilion and a low/no-alcohol product zone, is New York City's unique answer to Tales of the Cocktail. This year will feature the Brand Accelerator Pitch Competition, presented in partnership with Women of the Vine & Spirits and Diverse Powered Brands. 
 </p> <p> Last year, BCB featured many Shōchū brands, highlighting the traditional Japanese liquor that dates back to the 16th century, an example of the unique opportunities to learn about the exciting global culture of spirits.
  </p>
   <p>
          For more on the Bar Convent Brooklyn click <a href="https://www.barconventbrooklyn.com/en-us.html#/"><u>here</u></a>
        </p>
      <p>Whether you're a seasoned industry professional or a passionate enthusiast, these conventions offer unparalleled opportunities to taste, learn, and connect with the vibrant world of spirits and cocktail culture.</p>

      <ContentCard />
    </div>
  );
}