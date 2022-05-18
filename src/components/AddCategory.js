import { useState } from "react";
import PropTypes from "prop-types";
export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState(""); //undefined
  const handleInputChangue = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.length > 2) {
      setCategories((categories) => [inputValue, ...categories]);
      setInputValue("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <p>Buscar: </p>
      <input type="text" value={inputValue} onChange={handleInputChangue} />
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
