const express = require('express');
const path = require('path');
require('dotenv').config();
const cors = require('cors');
const { Op } = require('sequelize');

const db = require('./db/models');
const router = require('./routers');
const { errorHandler } = require('./middleware');


const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', router);
app.use(errorHandler.errorHandler);

app.listen(PORT, () => console.log(`Listen on port:${PORT}`));


const checkDB = async () => {
	try {
		await db.sequelize.authenticate();
		console.log('Connection has been established successively');
	} catch (error) {
		console.error('Unable to connect to the database:', error.message);
	};
};

checkDB();












//* iife
// (async function () {
	// try {
	// 	await db.sequelize.authenticate();
	// 	console.log('Connection has been established successively');
	// } catch (error) {
	// 	console.error('Unable to connect to the database:', error.message);
	// };

	
//* magic method
	// try {
	// 	const fantasy = await db.Genre.findOne({where: {
	// 	title: ['Fantasy']
	// }});
	// console.log(JSON.stringify(fantasy, null, 2));
	// console.log(await fantasy.getMovies({raw: true}));
	// } catch (error) {
	// 	console.log('Something went wrong:', error.message);
	// };
//* drop tables
	// try {
	// 	await db.sequelize.drop({cascade:true});
	// } catch (error) {
	// 	console.log('Something went wrong:', error.message);
	// };
//* create tables
	// try {
	// 	await db.sequelize.sync({alter:true});
	// } catch (error) {
	// 	console.log('Something went wrong:', error.message);
	// };






//*join one to many
	// const userGenre = 'Drama';
	// try {
		// const someGenre = await db.Genre.findOne({
		// 	where: {
		// 		title: userGenre,
		// 	}
		// });
		// // console.log('Genre', someGenre);
		// const setBooks = await db.Books.findAll({
		// 	where: {
		// 		title:
		// 	}
		// })
		// const movies = await db.Movie.findAll({
		// 	attributes: ['title'],
		// 	include: [
				// {
				// 	model: db.Genre,
				// 	attributes: ['title'],
				// 	required: true,
				// 	// include: [
				// 	// 	{
				// 	// 		model: db.Movie_Genre,
				// 	// 		attributes: ['title'],
				// 	// 		where: {
				// 	// 			genre_id: [4]
				// 	// 		}
				// 	// 	}
				// 	// ]
					
				// },
				// {
				// 	model: db.Country,
				// 	attributes: ['title'],
				// 	required: true,
				// }
			// ],
			
		// });
		// console.log(JSON.stringify(movies, null, 2));
	// } catch (error) {
	// 	console.log('Something went wrong:', error.message);
	// };
	

	//* validation
	// try {
	// 	const studio = await db.Studio.create({
	// 		title: 'Project',
	// 		web_site: 'pppp@trmrotk.com'
	// 	}, 
	// 		{validate: false}
	// 	);
	// 	console.log(JSON.stringify(studio, null, 2));
	// } catch (error) {
	// 	console.log('Something went wrong', error.message);
	// }
	
// })();













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

