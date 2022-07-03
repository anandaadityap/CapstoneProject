import DataCardMateri from "../../config/DataKursus";

const CardMateri = () => {
  return (
    <div className="container row mx-auto">
      {DataCardMateri.map((data) => (
        <div
          className="card m-3"
          style={{
            width: "230px",
          }}
        >
          <img src={data.gambar} className="card-img-top" />
          <div className="card-body text-start">
            <h4 className="card-title fw-bold ">{data.tittle} </h4>
            <p className="card-text">{data.bintang}</p>
            <p className="card-text fw-bold">by : {data.creator}</p>
            <p className="card-text">{data.desc}</p>
            <a
              href="#"
              className="btn text-light"
              style={{ backgroundColor: "#003060" }}
            >
              Ayo Belajar
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardMateri;
