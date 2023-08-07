import React from 'react';
import AllPokemons from './AllPokemons';
import AllTrainers from './AllTrainers';

export default function home() {
  return (
	<div>
		<h1>
			All Pokemons:
		</h1>
	{/* this is how to show data from AllPokemons */}
	<AllPokemons />  
		<h1>
			All Trainers:
		</h1>
	<AllTrainers />
	</div>
  )
}
