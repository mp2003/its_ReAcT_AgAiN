import React, { useState } from "react";
import styled from "styled-components";

const Button = styled.button`
  padding: 1em;
  background-color: #4caf50;
  margin-left: 2em;
  color: white;
  border-radius: 20px;
  margin-top: 10px;
`;

const SearchBarWrapper = styled.div`
  position: relative;
  width: 300px;
`;

const Input = styled.input`
  width: 100%;
  padding: 1em;
  border: 2px solid #ccc;
  border-radius: 20px;
`;

const SuggestionsBox = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 10px;
  list-style: none;
  padding: 0;
  margin: 0;
  max-height: 150px;
  overflow-y: auto;
  z-index: 1000;
`;

const SuggestionItem = styled.li`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const SearchBar = () => {
  const [value, setValue] = useState("");
  const [recentSearches, setRecentSearches] = useState([]);

  const handleChange = (e) => setValue(e.target.value);

  const handleClick = (e) => {
    e.preventDefault();
    if (value === "") {
      alert("Enter a color");
    } else {
      setRecentSearches((prev) => {
        const newArray = [value, ...prev];
        return newArray.slice(0, 5); // Keep only the last 5 searches
      });
      setValue("");
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setValue(suggestion);
  };

  return (
    <>
      <form action="">
        <SearchBarWrapper>
          <Input
            type="text"
            value={value}
            placeholder="Search color..."
            onChange={handleChange}
          />
          {recentSearches.length > 0 && (
            <SuggestionsBox>
              {recentSearches.map((suggestion, index) => (
                <SuggestionItem
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  {suggestion}
                </SuggestionItem>
              ))}
            </SuggestionsBox>
          )}
        </SearchBarWrapper>
        <Button onClick={handleClick}>Add</Button>
      </form>
    </>
  );
};

export default SearchBar;
