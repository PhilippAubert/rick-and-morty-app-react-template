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
        <div className="Character-Grid" key={id}>
          <Link to={`/character/${id}`}>
            <img className="Character-Image" src={image} alt={name} />
            <h3 className="Character-Text">{name}</h3>
          </Link>
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
