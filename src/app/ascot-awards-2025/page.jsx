import styles from "../styles/Layout.module.css";
import headerStyles from "../styles/Header.module.css";
import awardStyles from "../styles/Awards.module.css";
import { AwardSection } from "../(components)/AwardWinners";
import { winnersData } from "./winners";

const PAGE_TITLE = "2025 ASCOT Awards – Best in Category Winners";
const PAGE_DESCRIPTION =
  "Over 1,100 entries from five continents went in blind. These are the Best in Category champions of the 2025 ASCOT Awards.";
const FIRST_IMAGE = {
  path: "https://res.cloudinary.com/adamaslan/image/upload/v1667159646/drinksfoodlife/dfl-logo_vnu5xy.jpg",
  alt: "2025 ASCOT Awards Best in Category winners",
  width: 1200,
  height: 630,
};

export const metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [
      {
        url: FIRST_IMAGE.path,
        width: FIRST_IMAGE.width,
        height: FIRST_IMAGE.height,
        alt: FIRST_IMAGE.alt,
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    images: {
      url: FIRST_IMAGE.path,
      alt: FIRST_IMAGE.alt,
      width: FIRST_IMAGE.width,
      height: FIRST_IMAGE.height,
    },
  },
};

export default function Ascot2025Winners() {
  return (
    <div className={styles.gridcontainer4}>
      <div className={headerStyles.description}>
        🏅 2025 ASCOT Awards – Best in Category Winners<br />
      </div>

      <p className={awardStyles.byline}>By Adam Aslan</p>

      <div className={awardStyles.intro}>
        <p>
          <span className={awardStyles.introLead}>Going global:</span> The
          ASCOT Awards returned in 2025 with a vengeance. The blind-tasting
          gauntlet had gone international — over 1,100 entries from distillers
          across five continents showed up to prove their mettle. The judging
          panel, a rotating cast of 40+ of the world&apos;s most opinionated
          palates, put every drop through the wringer without mercy.
        </p>
        <p>
          By the time the smoke cleared, two bottles stood above the rest:{" "}
          <strong>Lasso Motel 18 Year American Straight Whiskey</strong> was
          crowned the overall <strong>&ldquo;Best in Show&rdquo; Ultimate
          Winner</strong>, while{" "}
          <strong>Rolling Fork 16 Year Trinidad Single Cask</strong> took home
          the <strong>&ldquo;Best in Show&rdquo; White Spirit title</strong>.
          Here are all the <strong>Best in Category</strong> champions from that
          unforgettable year — the bottles that survived the bracket and earned
          their place in ASCOT history.
        </p>
      </div>

      <AwardSection
        title="🥃 Whiskey Winners"
        data={winnersData.whiskey}
        highlightNotes
      />
      <AwardSection
        title="🍸 White Spirit Winners"
        data={winnersData.whiteSpirits}
        highlightNotes
      />

      <footer className={awardStyles.footer}>
        <p>
          Source:{" "}
          <a
            href="https://www.fredminnick.com/2025/06/24/ascot-awards-best-in-show-winners-announced/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fred Minnick – ASCOT Awards Best in Show Winners Announced
          </a>{" "}
          &amp;{" "}
          <a
            href="https://shorefire.com/releases/print/2025-best-in-show-winners-announcedfor-internationalspirits-competition-the-ascot-awards"
            target="_blank"
            rel="noopener noreferrer"
          >
            Shore Fire Media
          </a>
        </p>
        <p>© 2025 ASCOT Awards. All rights reserved.</p>
      </footer>
    </div>
  );
}
