import styles from "../styles/Layout.module.css";
import ContentCard from "../(components)/ContentCard";
import headerStyles from "../styles/Header.module.css";

// Shared constants
const PAGE_TITLE = 'Tasty Tech Bytes - Your Guide to AI and Modern Development';
const FIRST_IMAGE = {
  path: '/restoration.png',
  alt: 'Technology and AI development resources',
  width: 1200,
  height: 630,
  credit: 'Tasty Tech Bytes'
};

export const metadata = {
  title: PAGE_TITLE,
  description: 'Your go-to publication for cutting-edge AI, machine learning, and web development insights.',
  openGraph: {
    title: PAGE_TITLE,
    description: 'Comprehensive coverage of AI advancements, web frameworks, and practical development guides',
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

export default function TechArticles() {
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
        We are pleased to introduce Tasty Tech Bytes, your go-to publication for the latest in technology, artificial intelligence, and software development. Our carefully curated collection of articles covers a diverse range of topics, from cutting-edge advancements in Artificial Intelligence and Machine Learning, including detailed explorations of RAG (Retrieval-Augmented Generation) and DSPy, to practical guides on web development frameworks like Astro, Vue.js, and the nuances of JavaScript.
      </p>

      <p>
        At Tasty Tech Bytes, we believe in making complex technology accessible and actionable. Our readers can delve into the specifics of enhancing AI efficiency, creating Hugging Face Spaces, and understanding the intricacies of modern web technologies. The AI-focused content provides insights into how AI is being applied in various fields, such as farmland restoration and business optimization, demonstrating the broad impact of these technologies in real-world applications.
      </p>

      <p>
        What sets Tasty Tech Bytes apart is our commitment to practical, career-focused content. Beyond the technical deep dives, our publication offers valuable advice for developers, such as essential WebStorm shortcuts and proven strategies for securing frontend and full-stack engineering jobs. We also feature unique pieces that blend technology with everyday life, like tips for using AirPods with Audacity and intriguing facts about the internet's history.
      </p>
      
      <p>
        Our content aims to equip readers with both theoretical knowledge and practical skills, fostering continuous learning and professional growth in the ever-evolving tech landscape. Tasty Tech Bytes provides a rich tapestry of information for anyone interested in technology, software development, and the transformative power of AI. We serve as your trusted resource for staying updated on industry trends, improving coding practices, and exploring the diverse applications of technology in various domains. Whether you're a seasoned developer looking to expand your expertise or an enthusiastic beginner taking your first steps into tech, Tasty Tech Bytes offers something valuable for every stage of your journey.
      </p>

      <p>
        For more insights and the latest articles visit <a href="https://tastytechbytes.com/"><u>www.tastytechbytes.com</u></a>
      </p>

      <ContentCard />
    </div>
  );
}