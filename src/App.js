import React, { useState } from 'react';
import './App.css';
import PokemonCard from './Components/pokemoncard';
import { pokemons } from './Components/pokemondata';


const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPokemons, setFilteredPokemons] = useState(pokemons);
  const [selectedType, setSelectedType] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    const filtered = pokemons.filter(pokemon =>
      pokemon.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
      pokemon.type.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredPokemons(filtered);
  };

  const resetSearch = () => {
    setSearchTerm('');
    setFilteredPokemons(pokemons);
    setSelectedType('');
  };

  const handleSortByType = (type) => {
    if (type === selectedType) {
      setSelectedType('');
      setFilteredPokemons(pokemons);
    } else {
      setSelectedType(type);
      const filtered = pokemons.filter(pokemon => pokemon.type === type);
      setFilteredPokemons(filtered);
    }
  };

  const renderSortOptions = () => {
    const types = [...new Set(pokemons.map(pokemon => pokemon.type))];
    return (
      <div className="sort-options">
        <button onClick={() => handleSortByType('')}>All</button>
        {types.map((type, index) => (
          <button key={index} onClick={() => handleSortByType(type)}>{type}</button>
        ))}
      </div>
    );
  };

  const renderPokemons = () => {
    return filteredPokemons.map(pokemon => (
      <PokemonCard key={pokemon.id} pokemon={pokemon} />
    ));
  };

  return (
    <div className="App">
      <h1>Pokemon Card Collection</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Search by name or type"
          value={searchTerm}
          onChange={handleSearch}
        />
        <button onClick={resetSearch}>Reset</button>
      </div>
      {renderSortOptions()}
      <div className="cards">
        {renderPokemons()}
      </div>
    </div>
  );
};

export default App;
