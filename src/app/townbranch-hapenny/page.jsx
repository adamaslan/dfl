import Head from "next/head";
import styles from "../styles/Layout.module.css";
import ContentCard from "../(components)/ContentCard"; 
import headerStyles from "../styles/Header.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Transatlantic Collaboration and Sustainability: The Story of Town Branch and Ha'Penny</title>
        <meta
          name="description"
          content="The Story of Town Branch and Ha'Penny"
        />
        <meta
          property="og:image"
          content="/townbranch.jpeg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.gridcontainer4}>
        <div className={headerStyles.description}>
        Transatlantic Collaboration and Sustainability: The Story of Town Branch and Ha'Penny <br />
        </div>

        <div className={styles.summary}>
        A transatlantic collaboration fuses Irish whiskey heritage with modern sustainable distilling innovations.
        </div>
        <div className={styles.gridcontainer5}>
          <img
            className={styles.photo}
            alt="mole"
             src="/townbranch.jpeg"  />
            <p className={styles.caption}>Photo by Adam Aslan</p>
        </div>
        <p>
Why put whiskey in four types of barrels? For the four different flavor notes. Why are Kentucky bourbon makers collaborating with Irish whiskey distillers? Because they exclusively import it. Ha’Penny Four Cask Wheated Irish Whiskey is a flagship spirit from Pearse Lyons Distillery, crafted from 100% Irish-grown grains and aged in four types of casks—Port Pipe, Bourbon Barrel, Sherry Butt, and Double Charred Barrels. The whiskey blends 66% locally sourced wheat whiskey with 34% single malt produced at the heart of the distillery, yielding flavors of vanilla, honey, caramel, toasted oak, toffee, vanilla ice cream, and banana.
</p>


 <p>Emphasizing sustainability, the distillery opted for wheat over corn due to its superior growth in Ireland, aligning with their commitment to using local ingredients and upcycling empty barrels. This sustainable approach complements the innovative influence of Town Branch Distillery’s newly matured wheated bourbon mash bill, marking a unique partnership that bridges Irish whiskey heritage with modern bourbon techniques.</p>
 <p>Together, Lexington Brewing & Distilling Co., Pearse Lyons Distillery, and the Ha’Penny Spirits range represent a transatlantic alliance where tradition meets innovation. Rooted in the enduring legacy of Pearse Lyons—an entrepreneurial pioneer whose contributions to brewing, distilling, and sustainability have spanned generations—these entities fuse Irish heritage with American craft expertise. Lexington Brewing & Distilling Co. revitalizes time-honored practices through upcycling and local sourcing, while Pearse Lyons Distillery preserves a rich Dublin legacy in a historic setting. The Ha’Penny Spirits range, inspired by the iconic Ha’Penny Bridge, encapsulates the spirit of Dublin and the passion for craft, linking these endeavors through a shared commitment to quality, sustainability, and family tradition. 
 This Kentucky-Ireland partnership isn't just about shared techniques. It's a dialogue between histories where Lexington’s bourbon innovation elevates Dublin’s wheat-driven whiskey, creating a hybrid that honors both roots.
</p>
  </div>
     
    <ContentCard />
    </>
  );
}
