import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import "./CharactersId.css";

export default function CharactersId() {
  const history = useHistory();
  const [character, setCharacter] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const url = `https://rickandmortyapi.com/api/character/${id}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCharacter(data);
      });
  }, [id]);

  return (
    <div className="Single-Character-Frame-Parent">
      <div className="Single-Character-Frame">
        <div
          className={
            character.status === "Alive"
              ? "Single-Character-Frame-Alive"
              : character.status === "Dead"
              ? "Single-Character-Frame-Dead"
              : "Single-Character-Frame-Unknown"
          }
        >
          <h3 className="Headline">{character.name}</h3>
          <img className="Photo" src={character.image} alt={character.name} />
          <p className="Liner-Notes">{character.status}</p>
          <p className="Liner-Notes">{character.species}</p>
          <button className="Go-Back-Button" onClick={() => history.goBack()}>
            {" "}
            Go Back{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
