import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Layout.module.css";

const ContentCard = () => {
  return (
    <div className={styles.cards3}>
      <Link href="/northdumpling" passHref>
        <div className={styles.card3}>
          <Image
            alt="dumpling"
            className="img2"
            width={500}
            height={500}
            src="https://res.cloudinary.com/adamaslan/image/upload/v1654718488/drinksfoodlife/northdump1_dptuen.jpg"
          />{" "}
          <h2> North Dumpling, my Guru</h2>{" "}
          <h3>I'm in love with North Dumpling, duh.</h3>
        </div>
      </Link>

      <Link href="/naturalwine">
        <div className={styles.card3}>
          <Image
            alt="wine"
            className="img2"
            width={500}
            height={500}
            src="https://res.cloudinary.com/adamaslan/image/upload/v1654718485/drinksfoodlife/coup-wine_pjdgdv.jpg"
          />{" "}
          <h2> An Awkward Quest</h2> <h3>For a Funky Natural Red</h3>
        </div>
      </Link>

      <Link href="/cafeversailles" passHref>
        <div className={styles.card3}>
          <Image
            alt="Cafe Versailles"
            className="img2"
            width={500}
            height={500}
            src="https://res.cloudinary.com/adamaslan/image/upload/v1654726367/drinksfoodlife/versailles_h25q20.jpg"
          />{" "}
          <h2> In Love with Cafe Versailles</h2>
          <h3>Especially the MIA airport location</h3>
        </div>
      </Link>
    </div>

    // const ContentCard = (props) => {
    //   return (
    //     <div className="cards3">
    //       <div className="card__body">
    //         <img src={props.img} className="card__image" alt="article" />
    //         <h2 className="card__title">{props.title}</h2>
    //         <p className="card__description">{props.description}</p>
    //       </div>{" "}
    //     </div>
    //   );
    // };
  );
};
export default ContentCard;
