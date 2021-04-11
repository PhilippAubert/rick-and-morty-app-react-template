import "./Filter.css";

export default function Filter({ searchName, searchStatus }) {
  function handleStatus(event) {
    event.preventDefault();
    const StatusInputValue = event.target.value;
    searchStatus(StatusInputValue);
  }

  function handleName(event) {
    event.preventDefault();
    const NameInputValue = event.target.character.value;
    searchName(NameInputValue);
  }

  return (
    <div className="SearchFrame">
      <div className="Filter">
        <form onSubmit={handleName} className="SubmitForm">
          <label className="LabelForName">Name </label>
          <input
            name="character"
            id="character"
            type="text"
            placeholder="Search by name"
            className="FilterArea"
          />

          <label className="LabelForStatus">Status </label>
          <select
            onClick={handleStatus}
            name="status"
            id="status"
            className="SelectArea"
          >
            <option value="All">All</option>
            <option value="Alive">Alive</option>
            <option value="Dead">Dead</option>
            <option value="Unknown">Unknown</option>
          </select>
        </form>
      </div>
      <button type="submit" className="SearchButton">
        Load New Characters
      </button>
    </div>
  );
}
