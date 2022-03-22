import Link from "next/link";

const ContentCard = (props) => {
  return (
    <div className="card">
      <div className="card__body">
        <img src={props.img} className="card__image" alt="article" />
        <h2 className="card__title">{props.title}</h2>
        <p className="card__description">{props.description}</p>
      </div>{" "}
    </div>
  );
};
export default ContentCard;
