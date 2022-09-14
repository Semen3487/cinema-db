const Router = require('express');
const actorController = require('../controllers/actorController');


const router = new Router();

router.route('/actors')
.get(actorController.getAllActors)
.post(actorController.createActor)
.put(actorController.updateActor);

router.route('/actors/:id')
.get(actorController.getOneActor)
.delete(actorController.deleteActor);


module.exports = router;