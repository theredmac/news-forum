import React from 'react';

function SearchBar({ searchTerm, onSearch, setSearchTerm }) {
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search headlines and keywords"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button onClick={onSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
