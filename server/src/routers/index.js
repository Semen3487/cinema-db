const { Router } = require('express');

const movieRouter = require('./movieRouters');
const actorRouters = require('./actorRouters');
const directorRouters = require('./directorRouters');
const studioRouters = require('./studioRouters');


const router = new Router();

router.use('/movies', movieRouter);



module.exports = router;