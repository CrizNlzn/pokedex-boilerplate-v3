import React from 'react';
import AllPokemons from './AllPokemons';

export default function home() {
  return (
	<div>
		<h1>
			All Pokemons
		</h1>
	{/* this is how to show data from AllPokemons */}
	<AllPokemons />  
	</div>
  )
}
