import React, { useState, useEffect } from "react";
import axios from "axios";

const AllTrainers = () => {
	const [trainerList, setTrainerList] = useState([]);

		useEffect(() => {
			axios.get("/api/Trainers").then((response) => {
				setPokeList(response.data);
			});

		}, []);

	return (
	<div>
		<h3> Trainers</h3>
		<ul>
			{trainerList.map((Trainers) => (
				<li
					key = {trainer.trainerId}>
						<img src = {Trainers.image} alt = {Trainers.name} />
						{Trainers.name}
				</li>
			))}
		</ul>
	</div>
	);
};

export default AllTrainers;