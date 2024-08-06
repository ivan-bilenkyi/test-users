import React, { useState } from 'react';
import { Input } from './SearchBar.styled.js';

export const SearchInput = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (evt) => {
    const { value } = evt.target
    setQuery(value);
    onSearch(value);
  };

  return (
    <Input
      type="text"
      placeholder="Search by name"
      value={query}
      onChange={handleChange}
    />
  );
};