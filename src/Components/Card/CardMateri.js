import GambarReact from "../../assets/react1.jpg";

const Card = () => {
  return (
    <>
      <div
        className="card"
        style={{
          width: "17rem",
        }}
      >
        <img src={GambarReact} className="card-img-top" />
        <div className="card-body text-start">
          <h5 className="card-title fw-bold">Belajar React Dasar </h5>
          <p className="card-text">5.0 ⭐⭐⭐⭐⭐</p>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a
            href="#"
            className="btn text-light"
            style={{ backgroundColor: "#003060" }}
          >
            Ayo Belajar
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
