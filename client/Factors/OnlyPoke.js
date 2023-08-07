import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
export default function OnePoke() {
    const [onlyPoke, setOnlyPoke] = useState(null);
    const { id } = useParams(); //extracting id from URLS -> backend route
    useEffect(() => {
        async function fetchPokemonDetails() {
            try {
                const { data } = await axios.get(`/api/Pokemon/${id}`);
                setOnlyPoke(data);
                console.log(data);
            } catch (error) {
                console.error('Error fetching Pokemon details:', error);
            }
        }
        fetchPokemonDetails();
    }, [id]); //array will make useeffect run once instead of infinite
    return (
        <div>
            {onlyPoke ? (
                <div>
                    OnePoke:
                    {onlyPoke.type} 

                    {onlyPoke.name}

					{onlyPoke.TrainerId}

					{onlyPoke.image}
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
}
