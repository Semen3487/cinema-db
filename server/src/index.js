const express = require('express');
const path = require('path');
require('dotenv').config();
const cors = require('cors');
const {Op} = require('sequelize');

const db = require('./db/models');
const movieRouters = require('./routers/movieRouters');
const actorRouters = require('./routers/actorRouters');
const directorRouters = require('./routers/directorRouters');
const studioRouters = require('./routers/studioRouters');

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', movieRouters);
app.use('/api', actorRouters);
app.use('/api', directorRouters);
app.use('/api', studioRouters);

app.listen(PORT, () => console.log(`Listen on port:${PORT}`));




(async function () {
	try {
		await db.sequelize.authenticate();
		console.log('Connection has been established successively');
	} catch (error) {
		console.error('Unable to connect to the database:', error.message);
	};

	//* validation
	// try {
	// 	const studio = await db.Studio.create({
	// 		title: 'Project',
	// 		web_site: 'pppp@trmrotk.com'
	// 	}, 
			//{validate: false}
	//	);
	// 	console.log(JSON.stringify(studio, null, 2));
	// } catch (error) {
	// 	console.log('Something went wrong', error.message);
	// }
	
})();













//* class work
// app.use(express.static(path.join(__dirname, 'public')));
// app.get('/', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '..', 'public', 'index.html'));
// });
// app.get('/about', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '..', 'public', 'about.html'));
// });
// app.get('/download', (req, res) => {
//   res.download(path.resolve(__dirname, '..', 'public', 'about.html'));
// });
// app.use('/about', (req, res) => {
//   res.redirect('contact');
// });

// app.use('/about', (req, res) => {
//   const codes = req.query.code;
//   let resHTML = '<ul>'
//   codes.forEach((item) => {
//     resHTML += `<li>${item}</li>`;
//   });
//   res.send(resHTML);
// });


// app.get('/movie?', (req, res) => {
//   res.send(`List of movies`);
// });

// const __dirname = path.resolve();

// "type": "module"

// console.log(JSON.stringify(genres, null, 2));

// const users = await db.User.findAll({
// 	raw: true,
// 	attributes: {
// 		include: [
// 			[
// 				db.sequelize.literal(`EXTRACT(year FROM age(birthday))`),
// 				'year_old'
// 			]
// 		]
// 	},
// 	group: ['year_old', 'id'],
// 	where: {yearOld: {[Op.lt]: 28}},
// 	attributes: {exclude: ['createdAt']},
// 	limit: 3
// });

