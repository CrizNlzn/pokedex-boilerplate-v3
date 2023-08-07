import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function OnePoke() {
	const [onlyPoke, setonlyPoke] = useState(null);
	const { id } = useParams(); //extracting id from URLS -> backend route

	useEffect(() => {
		async function fetchPokemonDetails() {
			const { data } = await axios.get(`/api/Pokemon/${id}`);
			setonlyPoke(data);
		 }
	  
		  fetchPokemonDetails();
		  console.log(onlyPoke);
	}, []) //array will make useeffect run once instead of infinite

  return (
	<div>OnePoke:
	{/* {onlyPoke.name}; */}
		 </div>
  )
}

