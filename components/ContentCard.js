import Link from "next/link";

const ContentCard = (props) => {
  return (
    <div className="card">
      <div className="card__body">
        <img src={props.img} class="card__image" />
        <h2 className="card__title">{props.title}</h2>
        <p className="card__description">{props.description}</p>
      </div>{" "}
      <Link href="/amaromontenegro">
        <button className="card__btn">View Recipe</button>
      </Link>
    </div>
  );
};
export default ContentCard;
