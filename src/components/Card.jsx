const Card = ({ character }) => {
  const { image, name, status, species, id } = character;
  return (
    <div className="card mb-3 h-100 bg-dark text-white">
      <div className="row g-0 h-100">
        <div className="col-md-4">
          <img
            src={image}
            className="img-fluid rounded-start h-100 object-fit-cover"
            alt={`immagine di ${name}`}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p
              className={`card-text card-status ${
                status === "Alive" && "success"
              }`}
            >
              Status: {status}
            </p>
            <p className="card-text">
              <small className="text-body-secondary">{species}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
