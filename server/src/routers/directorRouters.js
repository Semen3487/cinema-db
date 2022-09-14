const Router = require('express');
const directorController = require('../controllers/directorController');


const router = new Router();

router.route('/directors')
.get(directorController.getAllDirectors)
.post(directorController.createDirector)
.put(directorController.updateDirector);

router.route('/directors/:id')
.get(directorController.getOneDirector)
.delete(directorController.deleteDirector);


module.exports = router;