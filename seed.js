  //function which syncs and seeds your database when your application starts.
  const {db, Pokemon, Trainers } = require("./db");


const seed = async () => {
  await db.sync({ force: true });

  // create some pokemon
const pikachu = await Pokemon.create({
  pokeId: 1,
    name: "Pikachu",
      type: "Electric",
        trainer: ash.trainerId,
          date: new Date(Date.now() - 15000000),
            image: null
});

const charizard = await Pokemon.create({
  pokeId: 2,
    name: "Charizard",
    type: "Fire/Flying",
      trainer: ash.trainerId,
        date: new Date(Date.now() - 90000000),
          image: null
});

const bulbasaur = await Pokemon.create({
  pokeId: 3,
    name: "Bulbasaur",
      type: "Grass/Poison",
        trainer: ash.trainerId,
          date: new Date(Date.now() - 80000000),
            image: null,
});

const azurill = await Pokemon.create({
  pokeId: 4,
    name: "Azurill",
      type: "Fairy",
        trainer: misty.trainerId,
          date: new date(Date.now() - 70000000),
          image: null,
});

  // create some trainers

const misty = await Trainers.create({
  trainerId: 1,
    name: "Misty",
      team: null,
      date: new date(Date.now() - 60000000),
        image: null,
});

const ash = await Trainers.create({
  trainerId: 2,
    name: "ash",
      team: null,
      date: new date(Date.now() - 50000000),
        image: null,
});

  
  db.close();
  console.log(`
    Seeding successful! Pokedex is ready.
    `);
};

seed().catch((err) => {
  db.close();
  console.log(`

    Error seeding:
      ${err.message}
          ${err.stack}
  `);
});
