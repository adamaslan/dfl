import styles from "../styles/Layout.module.css";
import headerStyles from "../styles/Header.module.css";
import awardStyles from "../styles/Awards.module.css";
import { AwardSection } from "../(components)/AwardWinners";
import { winnersData } from "./winners";

const PAGE_TITLE = "2026 ASCOT Awards – Round 1 Winners";
const PAGE_DESCRIPTION =
  "Over 1,500 entries went in double-blind. These are the bottles that survived Round 1 to claim Best in Category at the 2026 ASCOT Awards.";
const FIRST_IMAGE = {
  path: "https://res.cloudinary.com/adamaslan/image/upload/v1667159646/drinksfoodlife/dfl-logo_vnu5xy.jpg",
  alt: "2026 ASCOT Awards Round 1 winners",
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

export default function Ascot2026Winners() {
  return (
    <div className={styles.gridcontainer4}>
      <div className={headerStyles.description}>
        🏅 2026 ASCOT Awards – Round 1 Winners<br />
      </div>

      <p className={awardStyles.byline}>By Adam Aslan</p>

      <div className={awardStyles.intro}>
        <p>
          <span className={awardStyles.introLead}>A little backstory:</span> The
          ASCOT Awards weren&apos;t forged in some stuffy corporate boardroom.
          Legend has it, the whole thing kicked off in a hidden Louisville
          speakeasy back in 2012, where a ragtag crew of distillers, bartenders,
          and gloriously opinionated drinkers got tired of watching
          shelf-trophies go to the highest bidder. Armed with Glencairn glasses
          and zero chill, they swore to build a competition where the liquid did
          the talking — blind, brutal, and totally unbiased.
        </p>
        <p>
          Fast-forward to 2026, and that clandestine tasting has exploded into
          the most relentless double-blind gauntlet in the spirits world. Over
          1,500 entries entered the arena this year, but after weeks of
          palate-pummeling brackets, only these elite bottles clawed their way
          through <strong>Round 1</strong> to claim the title of{" "}
          <strong>Best in Category</strong>. Pour yourself a dram and meet your
          champions.
        </p>
      </div>

      <AwardSection title="🥃 Bourbon Winners" data={winnersData.bourbon} />
      <AwardSection
        title="🇺🇸 American Whiskey Winners"
        data={winnersData.americanWhiskey}
      />
      <AwardSection
        title="🌍 Scotch & World Whiskey Winners"
        data={winnersData.scotchAndWorld}
      />
      <AwardSection
        title="🍸 White Spirit Winners"
        data={winnersData.whiteSpirits}
      />

      <footer className={awardStyles.footer}>
        <p>
          Source:{" "}
          <a
            href="https://ascotawards.com/playoffs/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ascotawards.com/playoffs/
          </a>
        </p>
        <p>© 2026 ASCOT Awards. All rights reserved.</p>
      </footer>
    </div>
  );
}
