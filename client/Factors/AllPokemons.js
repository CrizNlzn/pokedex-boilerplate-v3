import React, { useState, useEffect } from "react";
import axios from "axios";

const AllPokemons = () => {
	const [pokeList, setPokeList] = useState([]);

		useEffect(() => {
			axios.get("/api/Pokemon").then((response) => {
				setPokeList(response.data);
			});

		}, []);

	return (
	<div>
		<h3> Pokemons</h3>
		{/* <ul>
			{pokeList.map((pokemon) => (
				<li
					key = {pokemon.pokeId}>
						<img src = {pokemon.image} alt = {pokemon.name} />
						{pokemon.name} - {pokemon.type}
				</li>
			))}
		</ul> */}
	</div>
	);
};

export default AllPokemons;
