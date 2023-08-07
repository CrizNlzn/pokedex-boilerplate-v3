const router = require("express").Router();
const { db } = require("../db");
//line under goes back to server -> db -> index so we can get our PokemonTable
const { Pokemon } = require("../db");
const { Trainer } = require("../db");

// Connect your API routes here!

router.get("/Pokemon", async (req, res, next) => {
	try {
		const pokemon = await Pokemon.findAll();
		res.send(pokemon);
	}
		catch (err) {
			next(err);
		}
});

//Part 2 BACKEND: work on this
router.get("/Pokemon/:id", async (req, res, next) => {
	try {
		const pokemon = await Pokemon.findOne({
			where: { id: req.params.id },
			include: Trainer,
		});

		console.log(pokemon);
		res.send(pokemon);
	}
		catch (err) {
			console.log("error");
			next(err);
		}
});

//Part 2 BACKEND:
router.get("/Trainers", async (req, res, next) => {
	try {
		const trainer = await Trainer.findAll();
		res.send(trainer);
	}
			catch (err) {
			next(err);
			}
});

//work on this
router.get("/Trainers/:trainerId", async (req, res, next) => {
	try {
		const pokemon = await Trainer.findByPk(req.params.trainerId);
		res.send(pokemon);
	} 
			catch (err) {
				next(err);
			}
});

module.exports = router;