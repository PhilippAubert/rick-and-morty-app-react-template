import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

export default function CharactersId(name, image) {
  const history = useHistory();
  const [character, setCharacter] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const url = `https://rickandmortyapi.com/api/character/${id}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCharacter(data.results);
      });
  }, [id]);

  return (
    <div>
      <h3>{character.name}</h3>
      <img src={image} alt={name} />
      <button onClick={() => history.goBack()}> Back </button>
    </div>
  );
}
