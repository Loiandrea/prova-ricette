import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(query);
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar-container">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Cerca ricette..."
        className={`search-input ${query ? 'searching' : ''}`}
      />
      <button type="submit" className={`search-button ${query ? 'searching' : ''}`}>Cerca</button>
    </form>
  );
};

export default SearchBar;
