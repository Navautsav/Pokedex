//import React from 'react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { pokemons } from './pokemondata';


const PokemonCard = ({ pokemon }) => {
  const { name, type, imageUrl,link,abilities,description,rarity,strength } = pokemon;
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="card" onClick={handleFlip}>
      <div className={`card-inner ${isFlipped ? 'flipped' : ''}`}>
        <div className="card-front">
          <img src={imageUrl} alt={name} />
          <h3>{name}</h3>
          <p>Type: {type}</p>
          <p>Abilities: {abilities.join(', ')}</p>
          <p>Rarity: {rarity}</p>
        </div>
        <div className="card-back">
          <h3>Details</h3>
          <p>Description: {description}</p>
          <p>Strength: {strength}</p>
          <a href={link} target="_blank" rel="noopener noreferrer">More Info</a>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
//<h3><a href={link} target="_blank" rel="noopener noreferrer">{name}</a></h3>