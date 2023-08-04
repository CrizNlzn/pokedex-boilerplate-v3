const { Sequelize, db } = require("./db");
// require each of your models
  const Pokemon = db.define("Pokemon", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  type: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  date: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  image: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

  const Trainer = db.define("Trainer", {
    firstName: {
      type: Sequelize.STRING,
        allowNull: false,
    },
    lastName: {
      type: Sequelize.STRING,
        allowNull: false,
    },
    image: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });

// place your associations here!

Trainer.hasMany(Pokemon);
Pokemon.belongsTo(Trainer, { foreignKey: "TrainerId"});

// export your models below

module.exports = {
  db,
  Trainer,
  Pokemon,
};
