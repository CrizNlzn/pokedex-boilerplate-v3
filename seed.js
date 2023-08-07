  //function which syncs and seeds your database when your application starts.
  const { Pokemon, Trainer } = require("./server/db");
const { db, Sequelize } = require("./server/db/db");

const seed = async () => {
  await db.sync({ force: true });

   // create some trainers
  const misty = await Trainer.create({
    id: 1,
      firstName: "Misty",
        lastName: " ",
            image: "https://archives.bulbagarden.net/media/upload/thumb/f/f6/Lets_Go_Pikachu_Eevee_Misty.png/183px-Lets_Go_Pikachu_Eevee_Misty.png"
  });
  
  const ash = await Trainer.create({
    id: 2,
      firstName: "Ash",
      lastName: " ",
          image: "https://archives.bulbagarden.net/media/upload/thumb/c/cd/Ash_JN.png/266px-Ash_JN.png"
  });

  // create some pokemon
const pikachu = await Pokemon.create({
  id: 1,
    name: "Pikachu",
      type: "Electric",
        TrainerId: ash.id,
          date: new Date(Date.now() - 15000000),
            image: "https://archives.bulbagarden.net/media/upload/thumb/4/4a/0025Pikachu.png/250px-0025Pikachu.png"
});

const charizard = await Pokemon.create({
  id: 2,
    name: "Charizard",
      type: "Fire/Flying",
        TrainerId: ash.id,
        date: new Date(Date.now() - 90000000),
          image: "https://archives.bulbagarden.net/media/upload/thumb/3/38/0006Charizard.png/250px-0006Charizard.png"
});

const bulbasaur = await Pokemon.create({
  id: 3,
    name: "Bulbasaur",
      type: "Grass/Poison",
        TrainerId: ash.id,
          date: new Date(Date.now() - 80000000),
            image: "https://archives.bulbagarden.net/media/upload/thumb/f/fb/0001Bulbasaur.png/250px-0001Bulbasaur.png"
});

const azurill = await Pokemon.create({
  id: 4,
    name: "Azurill",
      type: "Fairy",
        TrainerId: misty.id,
          date: new Date(Date.now() - 70000000),
            image: "https://archives.bulbagarden.net/media/upload/thumb/7/75/0298Azurill.png/250px-0298Azurill.png"
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
