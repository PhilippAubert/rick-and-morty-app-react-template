import "./Characters.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [allPages, setAllPages] = useState();

  useEffect(() => {
    const url = `https://rickandmortyapi.com/api/character/?page=${page}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCharacters((initialCharacter) => {
          return [...initialCharacter, ...data.results];
        });
        setAllPages(data.info.pages);
      });
  }, [page]);

  function handleLoadMore() {
    if (page < allPages) {
      setPage(page + 1);
    }
  }

  function createCharacters() {
    return characters.map((character) => {
      const { id, name, image } = character;
      return (
        <div key={id}>
          <Link to={`/characters/${id}`}>
            <div class="Character-Grid">
              <figure>
                <img className="Character-Image" src={image} alt={name} />
                <figcaption className="Character-Text">{name}</figcaption>
              </figure>
            </div>
          </Link>
        </div>
      );
    });
  }

  return (
    <div>
      <h3>All Rick and Morty Characters</h3>
      <section>{createCharacters()}</section>
      <button className="MoreButton" onClick={handleLoadMore}>
        {" "}
        Load More{" "}
      </button>
    </div>
  );
}
