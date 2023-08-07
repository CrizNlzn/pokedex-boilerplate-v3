import React, { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Home from "./Factors/Home";
import OneTrainer from "./Factors/OnlyTrainer";
import OnePoke from "./Factors/OnlyPoke";


const Main = () => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    async function fetchPoke() {
      const { data } = await axios.get("/api/pokemon");
      setPokemon(data);
    }

    fetchPoke();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path = "/poke/:id" element = {<OnePoke />} />
      <Route path = "/trainer/:id" element = {<OneTrainer />} />
    </Routes>
  );
};

export default Main;
