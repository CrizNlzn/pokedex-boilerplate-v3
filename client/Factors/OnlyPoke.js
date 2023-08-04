import React from "react";

const OnePoke = ({ pokemon }) => {
	const { name, type, image } = trainer;

	return (
		<div>
			<h3> {name} </h3>
			
			<p>
				Trainer: {trainer}
			</p>
					<p>
						Type: {type}
					</p>

						<img src= {image} />
		</div>
	);
};

export default OnePoke;
