import React from 'react';

function SearchBar({
  searchTerm,
  onSearch,
  setSearchTerm,
  onCategoryChange,
  onCountryChange,
  selectedCategory,
  selectedCountry,
}) {
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
      <select onChange={(e) => onCategoryChange(e.target.value)} value={selectedCategory}>
        <option value="">Select Category</option>
        <option value="business">Business</option>
        <option value="entertainment">Entertainment</option>
        <option value="general">General</option>
        <option value="health">Health</option>
        <option value="science">Science</option>
        <option value="sports">Sports</option>
        <option value="technology">Technology</option>
      </select>
      <select onChange={(e) => onCountryChange(e.target.value)} value={selectedCountry}>
        <option value="au">Australia</option>
        <option value="be">Belgium</option>
        <option value="ca">Canada</option>
        <option value="fr">France</option>
        <option value="in">India</option>
        <option value="il">Israel</option>
        <option value="gb">United Kingdom</option>
        <option value="us">United States</option>
        
        

        {/* Add more countries here */}
      </select>
      <button onClick={onSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
