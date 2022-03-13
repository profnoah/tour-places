import "./Card.scss";
import { data } from "../../helpers/data";

const Card = () => {
  return (
    <div className="card-container">
      {data.map((card) => {
        const { id, title, image, desc } = card;
        return (
          <div className="cards" key={id}>
            <div className="title">
              <h2>{title}</h2>
            </div>
            <div className="img-div">
              <img src={image} alt={title} />
            </div>

            <div className="card-over">
              <p>{desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
