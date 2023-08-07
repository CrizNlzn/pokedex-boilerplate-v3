import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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

		<ul>
			{pokeList.map((pokemon) => (
				<li
					key = {pokemon.id}>
						<img src = {pokemon.image} alt = {pokemon.name} />
						{pokemon.name} - {pokemon.type}
				<Link to = {`/poke/${pokemon.id}`}> {pokemon.name}
				</Link> 
				</li>
			
			))}
		</ul>
	</div>
	);
};

export default AllPokemons;
