import styles from "../styles/Layout.module.css";
import ContentCard from "../(components)/ContentCard";
import headerStyles from "../styles/Header.module.css";

// Shared constants
const PAGE_TITLE = 'New Day Rises Over Coney Island: Casino Proposal Rejected';
const FIRST_IMAGE = {
  path: '/coney4.jpg',
  alt: 'A view of the Coney Island boardwalk and amusement park at sunrise.',
  width: 1200,
  height: 630,
  credit: 'Photo by Michele Schultz'
};
const AUTHOR_INFO = {
  name: 'Michele Schultz'
};
const SECOND_IMAGE = {
  path: '/coney3.jpg',
  alt: 'Community members celebrating the rejection of the casino proposal in Coney Island.',
  width: 1200,
  height: 630,
  credit: 'Photo by Michele Schultz'
};
export const metadata = {
  title: PAGE_TITLE,
  description: 'The Community Advisory Committee rejects a $3 billion casino proposal for Coney Island, marking a victory for local culture and creativity.',
  openGraph: {
    title: PAGE_TITLE,
    description: 'A decisive "no" vote by the Community Advisory Committee sinks the casino bid, ushering in a new era for Coney Island.',
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
        <div className={styles.authorCaption}><br />
          <p>Written by {AUTHOR_INFO.name}</p>
        </div>
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
        A wave washed over Coney Island after a decisive “no” vote by the Community Advisory Committee (CAC) officially sank the $3 billion year-round casino proposal. With the high-stakes gaming bid for the seaside boardwalk district officially dead, it ushered in a new day and another tomorrow in a future for the People's Playground.
      </p>

      <h2>A Victory for Culture and Creativity</h2>
      <p>
        The opposition was not merely against a type of development perceived as antithetical to Coney Island's world-famous, quirky, and storied history. Over a thousand petition signatures were gathered during a series of public hearings, demonstrating unified opposition attributed to a collaboration of artists, local activists, and community members.
      </p>
      <p>
        The project posed a threat to Coney Island's creativity and culture, and opposition stemmed from collaboration among artists, local activists, and community members, including concerns about future development that would reflect the community's artistic and cultural values, with suggestions for more artistic spaces and community-focused projects.
      </p>
      <p>
        “This project would've just vandalized such an iconic piece of Americana, but I think that my personal belief is that to lean into the creativity that's already here—to use that creativity to come up with a comprehensive vision for the whole neighborhood,” said Maxim Ibadov, a proud New York local artist and drag performer, celebrating the victory as a stand against cultural destruction. “The community is strong right now, and the community right now understands that we have momentum, so we want to do something.”
      </p>

      <h2>Drawing a Clear Line: Thor Equities Dilemma and Future Vision</h2>
      <p>
        The aftermath prompted immediate community action, setting the stage for a town meeting hosted by Council Member Justin Brannan on Monday, October 6th, to discuss future developments. The most crucial distinction discussed was the necessary separation between the needs of the residents and the needs of the historic amusement district.
      </p>
      <p>
        “There's two separate parts to it: There's the development that we want to see in the Coney Island community for the residents that live here; and then there's the Coney Island amusement area, which we want to see protected,” said Community Advisory Committee representative Marissa Solomon, emphasizing the focus on essential services. “We like to see real economic development—we like to see the subway station cleaned up, we like to see real job training programs—a real community center for people to be able to use.”
      </p>
      <p>
        A key player in the development conversation remains Thor Equities, which has owned one-third of the amusement district for up to 15 years and already possesses zoning rights from a 2009 New York City Council approval that allows for high-rise and mixed-use developments on its property.
      </p>
      <p>
        “My response on social media was a video of two people urinating in the middle of the day on one of their properties,” said Adam Rinn, a Coney Island nonprofit arts organization business operator, referencing the casino developer's existing properties and developments. “Coney Island is a rare place in New York City! It's the only C7-zoned amusement district, so why are we going to put things that don't belong in an amusement district?”
      </p>

      <div className={styles.gridcontainer5}>
        <img
          className={styles.photo}
          alt={SECOND_IMAGE.alt}
          src={SECOND_IMAGE.path}
          width={SECOND_IMAGE.width}
          height={SECOND_IMAGE.height}
        />
        <p className={styles.caption}>{SECOND_IMAGE.credit}</p>
      </div>

      <p>
        Despite the zoning concerns, the Coney Island Alliance primarily represents stakeholders (e.g., Nathan's, Luna Park, the Brooklyn Cyclones). The most urgent priority for Coney Island's revitalization is a support system for local, small, and diverse businesses, which a long-time advocacy coalition, Save Coney Island, identified.
      </p>
      <p>
        “We're thrilled that it appears that a new day is dawning for Coney Island,” said Lola Star, a Save Coney Island representative, acknowledging the zoning approval and expressing hope for a new era. “We're hopeful that Coney Island will finally get the revitalization that it so desperately needs.”
      </p>

      <ContentCard />
    </div>
  );
}
