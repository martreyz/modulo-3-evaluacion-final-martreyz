import PropTypes from "prop-types";

const Filters = (props) => {
  const handleInputChange = (ev) => {
    const inputValue = ev.currentTarget.value;
    props.handleInputChange(inputValue);
  };

  const handleInputEnter = (ev) => {
    if (ev.keyCode === "13") {
      ev.preventDefault();
    }
  };

  return (
    <form>
      <label htmlFor="userSearch">
        Introduce el nombre del personaje a buscar:
      </label>
      <input
        placeholder="Ej. Rick Sanchez"
        onChange={handleInputChange}
        onKeyPress={handleInputEnter}
        id="userSearch"
        name="userSearch"
        type="text"
        value={props.searchValue}
      />
    </form>
  );
};

Filters.propTypes = {
  searchValue: PropTypes.string,
  handleInputChange: PropTypes.func,
};

export default Filters;
