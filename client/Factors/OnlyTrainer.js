import React from "react";

const OneTrainer = ({ trainer}) => {
	const { name, team, image } = pokemon;


	return (
		<div>
			<h3> {name} </h3>
			<p>
				 Team: {team} 
			</p>
				<p> 
					Pokemons: {pokemon} 
				</p>
						
						<img src = {image} />
		</div>
	);

};

export default OneTrainer;