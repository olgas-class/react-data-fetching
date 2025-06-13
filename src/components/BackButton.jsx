import { useNavigate } from "react-router-dom";

const BackButton = ({ text }) => {
  const navigate = useNavigate();
  return (
    <a
      href=""
      onClick={(e) => {
        e.preventDefault();
        navigate(-1);
      }}
      className="btn btn-outline-success mx-3"
    >
      {text || "Ritorna alla pagina precedente"}
    </a>
  );
};

export default BackButton;
