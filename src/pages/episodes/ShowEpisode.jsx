import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../components/Loader";

const ShowEpisode = () => {
  const { id } = useParams();
  const [episode, setEpisode] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/episode/${id}`)
      .then((resp) => {
        setEpisode(resp.data);
      })
      .catch((error) => {
        if (error.status === 404) {
          navigate("/not-found");
        }
      });
  }, [id]);

  return (
    <main>
      <div className="container">
        {episode === null ? (
          <Loader />
        ) : (
          <h1 className="mb-4">{episode.name}</h1>
        )}
      </div>
    </main>
  );
};

export default ShowEpisode;
