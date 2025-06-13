import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../components/Loader";
import BackButton from "../../components/BackButton";

const ShowCaracter = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then((resp) => {
        setCharacter(resp.data);
      })
      .catch((error) => {
        if (error.status === 404) {
          navigate("/not-found");
        }
      });
  }, [id]);

  return (
    <main>
      <div className="container py-5">
        {character === null ? (
          <Loader />
        ) : (
          <>
            <div className="my-3">
              <BackButton />
            </div>
            <h1 className="text-center">{character.name}</h1>
            <div className="w-50 mx-auto">
              <img
                className="image-fluid w-100 object-fit-cover"
                src={character.image}
                alt=""
              />
            </div>
          </>
        )}
      </div>
    </main>
  );
};

export default ShowCaracter;
