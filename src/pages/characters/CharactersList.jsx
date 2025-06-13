import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../../components/Card";
import Loader from "../../components/Loader";

const CharactersList = () => {
  const apiUrl = "https://rickandmortyapi.com/api/character";

  const [characters, setCharacters] = useState([]);
  const [totalCharacters, setTotalCharacters] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setIsLoading(true);
    axios.get(`${apiUrl}/?page=${currentPage}`).then((resp) => {
      const charactersList = resp.data.results;
      setCharacters(charactersList);
      setTotalCharacters(resp.data.info.count);
      setIsLoading(false);
      setTotalPages(resp.data.info.pages);
    });
  }, [currentPage]);

  return (
    <>
      <div className="container my-4">
        <h2 className="text-center">Rick and Morty</h2>

        {isLoading ? (
          <Loader />
        ) : (
          <>
            <div className="my-3">
              Visualizzati {characters.length} di {totalCharacters}
            </div>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 my-3">
              {characters.map((curCharacter) => (
                <div key={curCharacter.id} className="col">
                  <Card character={curCharacter} />
                </div>
              ))}
            </div>
            <div className="my-3">
              <nav aria-label="Page navigation example">
                <ul className="pagination flex-wrap">
                  <li
                    className={`page-item ${currentPage === 1 && "disabled"}`}
                  >
                    <a
                      className="page-link"
                      onClick={() => setCurrentPage(currentPage - 1)}
                    >
                      Previous
                    </a>
                  </li>

                  {new Array(totalPages).fill(null).map((elem, index) => (
                    <li
                      key={index}
                      className={`page-item ${
                        currentPage === index + 1 && "active"
                      }`}
                    >
                      <a
                        className="page-link"
                        onClick={() => setCurrentPage(index + 1)}
                        key={index}
                      >
                        {index + 1}
                      </a>
                    </li>
                  ))}

                  <li
                    className={`page-item ${
                      currentPage === totalPages && "disabled"
                    }`}
                  >
                    <a
                      className="page-link"
                      onClick={() => setCurrentPage(currentPage + 1)}
                    >
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CharactersList;
