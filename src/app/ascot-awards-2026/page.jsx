import WinnerImage from "./WinnerImage";
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

const WinnerCard = ({ category, winner, image, runnersUp = [], note }) => (
  <div className="bg-gray-50 rounded-xl p-5 shadow-md hover:shadow-xl transition-all duration-200 hover:-translate-y-1 flex flex-col items-center text-center border border-gray-100">
    <div className="w-32 h-40 flex items-center justify-center mb-3 bg-white rounded-lg p-2">
      <WinnerImage src={image} alt={winner} />
    </div>
    <h3 className="text-xs font-bold text-amber-600 uppercase tracking-wider mt-2 mb-1">
      {category}
    </h3>
    <p className="text-base font-semibold text-gray-900 my-1">🏆 {winner}</p>
    {runnersUp.length > 0 && (
      <div className="text-sm text-gray-500 mt-1">
        <span className="italic">Also tasted: </span>
        <span>{runnersUp.join(" • ")}</span>
      </div>
    )}
    {note && <p className="text-xs text-gray-400 italic mt-2">📌 {note}</p>}
  </div>
);

const Section = ({ title, data }) => (
  <section className="mb-12">
    <h2 className="text-3xl font-semibold border-b-4 border-amber-500 pb-2 mb-6 text-gray-900">
      {title}
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {data.map((item) => (
        <WinnerCard key={item.category} {...item} />
      ))}
    </div>
  </section>
);

export default function Ascot2026Winners() {
  return (
    <article className="max-w-6xl mx-auto p-4 md:p-6 font-sans">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-900">
          🏅 2026 ASCOT Awards – Round 1 Winners
        </h1>
        <p className="text-md text-gray-500 mt-1">By Adam Aslan</p>

        <div className="max-w-3xl mx-auto mt-4 text-gray-700 leading-relaxed bg-amber-50 p-5 rounded-lg border border-amber-200/50 text-left">
          <p className="mb-2">
            <span className="font-bold text-amber-800">A little backstory:</span>{" "}
            The ASCOT Awards weren&apos;t forged in some stuffy corporate
            boardroom. Legend has it, the whole thing kicked off in a hidden
            Louisville speakeasy back in 2012, where a ragtag crew of distillers,
            bartenders, and gloriously opinionated drinkers got tired of watching
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
      </header>

      <Section title="🥃 Bourbon Winners" data={winnersData.bourbon} />
      <Section
        title="🇺🇸 American Whiskey Winners"
        data={winnersData.americanWhiskey}
      />
      <Section
        title="🌍 Scotch & World Whiskey Winners"
        data={winnersData.scotchAndWorld}
      />
      <Section title="🍸 White Spirit Winners" data={winnersData.whiteSpirits} />

      <footer className="text-center text-sm text-gray-400 border-t border-gray-200 pt-5 mt-8">
        <p>
          Source:{" "}
          <a
            href="https://ascotawards.com/playoffs/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-600 hover:underline"
          >
            ascotawards.com/playoffs/
          </a>
        </p>
        <p className="mt-1">© 2026 ASCOT Awards. All rights reserved.</p>
      </footer>
    </article>
  );
}
