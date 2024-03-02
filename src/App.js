import React, { useState } from 'react';
import './App.css';
import PokemonCard from './Components/pokemoncard';
import { pokemons } from './Components/pokemondata';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPokemons, setFilteredPokemons] = useState(pokemons);

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
      <div className="cards">
        {renderPokemons()}
      </div>
    </div>
  );
};

export default App;