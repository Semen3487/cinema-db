const Router = require('express');
const studioController = require('../controllers/studioController');


const router = new Router();

router.route('/studios')
.get(studioController.getAllStudios)
.post(studioController.createStudio)
.put(studioController.updateStudio);

router.route('/studios/:id')
.get(studioController.getOneStudio)
.delete(studioController.deleteStudio);


module.exports = router;