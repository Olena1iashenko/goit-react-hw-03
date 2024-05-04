import s from "./SearchBox.module.css";

export const SearchBox = ({ searchValue, setSearchValue }) => {
  return (
    <label className={s.label}>
      Find contacts by name
      <input
        className={s.input}
        type="search"
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        placeholder="Enter your search ..."
      />
    </label>
  );
};

export default SearchBox;
