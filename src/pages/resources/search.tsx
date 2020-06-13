import React, {useState} from 'react';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchTerm(e.currentTarget.value);
  }
  return (
  <div>
    <div>Search<input type="text" onChange={onChange} /></div>
    <div>{searchTerm}</div>
  </div>
)};

export default Search;
