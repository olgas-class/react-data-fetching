import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const EpisodesList = () => {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/episode").then((resp) => {
      setEpisodes(resp.data.results);
    });
  }, []);

  return (
    <main>
      <div className="container py-5">
        <h1>Lista di episodi</h1>

        <div className="row row-cols-1 row-cols-md-2 row-cols-md-3 g-3">
          {episodes.map((curEpisode) => (
            <div className="col" key={curEpisode.id}>
              <div className="card">
                <div className="card-body">
                  <h4>{curEpisode.name}</h4>
                  <p>Numero: {curEpisode.episode}</p>
                  <Link
                    className="btn btn-success"
                    to={`/episodi/${curEpisode.id}`}
                  >
                    Dettagli
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default EpisodesList;
