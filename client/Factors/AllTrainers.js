import React, { useState, useEffect } from "react";
import axios from "axios";

const AllTrainers = () => {
	const [trainerList, setTrainerList] = useState([]);

		useEffect(() => {
			axios.get("/api/Trainers").then((response) => {
				setTrainerList(response.data); //stores all data in backend
			});

		}, []);

	return (
	<div>
		<h3> Trainers</h3>
		<ul>
			{trainerList.map((Trainers) => ( //loops (map) all data in trainerlist and shows it in console
				<li
					key = {Trainers.id}>
						<img src = {Trainers.image}/>
						<p> {Trainers.firstName} </p>
				</li>
			))}
		</ul>
	</div>
	);
};

export default AllTrainers;