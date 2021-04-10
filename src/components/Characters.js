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
      const { id, name, image, status } = character;
      return (
        <div key={id} className="Character-Grid">
          <div
            key={id}
            className={
              status === "Alive"
                ? "Character-Grid-Alive"
                : status === "Dead"
                ? "Character-Grid-Dead"
                : "Character-Grid-Unknown"
            }
          >
            <Link to={`/character/${id}`}>
              <img className="Character-Image" src={image} alt={name} />
              <h3 className="Character-Text">{name}</h3>
            </Link>
          </div>
        </div>
      );
    });
  }

  return (
    <div className="Viewport">
      <h3 className="Title">All Rick and Morty Characters</h3>
      <section className="Character-Grid-Parent">{createCharacters()}</section>
      <button className="MoreButton" onClick={handleLoadMore}>
        {" "}
        Load More{" "}
      </button>
    </div>
  );
}
