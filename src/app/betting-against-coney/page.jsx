import styles from "../styles/Layout.module.css";
import ContentCard from "../(components)/ContentCard";
import headerStyles from "../styles/Header.module.css";

// Shared constants
const PAGE_TITLE = 'Betting Against Coney: Community Fights Back on Proposed Casino Development';
const FIRST_IMAGE = {
  path: '/coney1.jpg',
  alt: 'A view of the Coney Island boardwalk and amusement park.',
  width: 1200,
  height: 630,
  credit: 'Article by Michele Schultz'
};
const SECOND_IMAGE = {
  path: '/coney2.jpg',
  alt: 'A view of the Coney Island boardwalk and amusement park.',
  width: 1200,
  height: 630,
  credit: 'Article by Michele Schultz'
};

export const metadata = {
  title: PAGE_TITLE,
  description: 'Local residents and activists are organizing to oppose a new casino project in New York\'s iconic Coney Island.',
  openGraph: {
    title: PAGE_TITLE,
    description: 'A community coalition battles to preserve the historic character of Coney Island against a new casino development.',
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

      <p>
        In a bold move that could reshape New York's iconic Coney Island, a billionaire developer's casino proposal has gained approval from the New York City Council on a rezoning plan that would remap the local streets. The latest Community Advisory Committee (CAC) public hearing reveals rising opposition, and legal challenges that could threaten to derail this development.
      </p>

      <h2>Community Support, Opposition, Preservation, and Alternative Solutions</h2>
      <p>
        Within the community engagement and advocacy expressed at the CAC public hearings, over a thousand signatures were collected petitioning against the casino development.
      </p>

      <p>
        “I think Coney Island means so much to many people,” a Save Coney Island representative said. “I think the community has definitely spoken on what they want and what they think the right way for Coney Island to be redeveloped is.”
      </p>

      <p>
        In a long-term commitment to advocating for the future and preserving the spirit of Coney, the activist group Save Coney Island was formed in 2007. The group had previously fought development battles in the early 2000s and 2009 with the same developer, Thor Equities. In that, the group is pursuing legal angles to halt the casino development process and organized a mermaid-related event to present the petition signatures similar to the one back in 2009. 
      </p>

      <p>
        The advocacy coalition, Save Coney Island is not only opposing the casino but also proposing alternative solutions to revitalize Coney Island's future through the arts, small businesses, and creativity.
      </p>

      <p>
        “We're not just saying, ‘no’, we don't want a casino— we're saying ‘no’, we don't want a casino, but here's a solution,” a Save Coney Island representative said. “Here's what we do need, here's what will revitalize Coney Island through the arts community and business owners. That's the secret to the future of Coney Island!”
      </p>

      <h2>Community Impact, Historical Neglect, Cultural and Artistic Impact</h2>
      <p>
        The southernmost part of Brooklyn is rooted in history, especially given that Coney Island is built on a sandbar, according to resident and business operator Adam Rinn, of Coney Island non-profit arts organization, the museum located on W 12th Street and Surf Avenue, responsible for the Mermaid Parade, and Circus Sideshow, among other community programs.
      </p>

      <p>
        The establishment operative had never received formal communication or meetings with the casino developers on the provided architectural renderings detailing the impact of the historic 108-year-old landmark building, which is adjacent to the proposed site, during the construction phase.
      </p>

      <p>
        “When they start driving piles deep into the ground, what is that going to do to the structural integrity of my building?” Rinn said, emphasizing that the physical risk of the casino construction posed a direct existential threat to the 108-year-old landmark building. “It's going to crumble like a sandcastle!”
      </p>
      <img
        className={styles.photo}
        alt={SECOND_IMAGE.alt}
        src={SECOND_IMAGE.path}
        width={SECOND_IMAGE.width}
        height={SECOND_IMAGE.height}
      />
      <p className={styles.caption}>{SECOND_IMAGE.credit}</p>
      <p>
        The fate of the 108-year-old landmark building recalls the demolition of two other historic buildings— the Grasshorn Building and Bank of Coney Island, which had previously been allowed to fall into disrepair and then demolished, indicating the developers' neglect and disregard for history.
      </p>

      <p>
        He speaks on behalf of the local community in the beachfront boardwalk district about the impact the proposed casino will have on the neighborhood, including an increase in traffic, crime, and a severe strain on the local power grid, specifically conserving energy during the annual summer warnings in Southern Brooklyn, in which the grid could not handle a 24/7 casino.
      </p>

      <p>
        Rinn, drawing on his expertise in community arts and cultural preservation, expressed a deep commitment to maintaining the integrity of what is Coney Island against the proposed casino development.
      </p>

      <p>
        “Our aesthetic is not what they're looking for!” Rinn said, citing the type of artist that would be excluded by a casino's aesthetic but embraced by a Coney Island non-profit arts organization. “We embrace you! You are who you are— you are a talented performer! Get on the stage.”
      </p>

      <h2>Allegations of Misconduct and Questionable Support</h2>
      <p>
        Within the support for the casino, contrasting with the opposition from the community, there were irregularities in the CAC process that Save Coney Island activists have allegedly observed at the August 26th CAC public hearing. What appeared to be individuals reading from pre-written scripts, at the top of which it said ‘The Coney’, suggesting the community voices in support of the casino are questionable.
      </p>

      <p>
        Given the community opposition, specifically the youth, at the final CAC meeting, it appears that the casino developers acquired an ice cream truck with ‘The Coney’ flyers taped to the outside of the truck to get community “support” of the casino. 
      </p>

      <p>
        An audio recording revealed from Wednesday night at the final CAC meeting, a man was identified giving instructions about what would happen and then where to go afterward to get paid, while telling him to keep it on the down low.
      </p>

      <p>
        “We've gathered evidence and affidavits from people who witnessed that,” a Save Coney Island representative said in emphasizing the misconduct in the CAC process and “support” for the casino development. “That's another angle that our lawyer is pursuing.”
      </p>

      <ContentCard />
    </div>
  );
}