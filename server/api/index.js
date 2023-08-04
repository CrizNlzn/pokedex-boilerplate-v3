const router = require("express").Router();
const { db } = require("../db");

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

//Part 2 BACKEND:
router.get("/Pokemon/:pokeId", async (req, res, next) => {
	try {
		const pokemon = await Pokemon.findOne({
			where: { id: req.params.PokeId },
			include: Trainer,
		});

		console.log(pokemon);
		res.send(pokemon);
	}
		catch (err) {
			next(err);
		}
});

//Part 2 BACKEND:
router.get("/Trainers", async (req, res, next) => {
	try {
		const pokemon = await trainer.FindAll();
		res.send(pokemon);
	}
			catch (err) {
			next(err);
			}
});

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