const express = require('express');
const path = require('path');
require('dotenv').config();

const movieRouters = require('./routers/movieRouters');

const PORT = process.env.PORT || 5000;

const app = express();

app.use('/api', movieRouters);

app.listen(PORT, () => console.log(`Listen on port:${PORT}`));




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