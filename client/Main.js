import React,  {useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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
    <Router>
      <Routes>
        {/* goes into home and display the home page  */}
        <Route exact path = "/" element = {< home />} />
          
          
            {/* <Route exact path = "/api/trainer"> */}
              
              {/* <Trainers/> */}


              {/* <Route exact path = "/api/Pokemon/:PokeId"> */}
                {/* <OnlyPoke/> */}
              

                {/* <Route exact path = "/api/Trainers/:trainerId"> */}
                  {/* <OnlyTrainer/> */}
                
      </Routes>
        
    </Router>
  );
};

export default Main;
