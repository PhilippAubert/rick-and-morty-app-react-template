import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

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
    <div>
      <h3>{character.name}</h3>
      <img src={character.image} alt={character.name} />
      <p>{character.status}</p>
      <p>{character.species}</p>
      <button onClick={() => history.goBack()}> Go Back </button>
    </div>
  );
}
