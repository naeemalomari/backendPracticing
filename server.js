'use strict';


const express = require('express');

const cors = require('cors');
require('dotenv').config();
const app = express();
const PORT = 5600;
app.use(cors());
app.use(express.json());


const movieController =require('./controller/movie.controler');
//http://localhost:5600/movie
app.get('/movie' ,movieController.getMovieData)



//http://localhost:5600/
app.get('/', (req, res) => {
    res.send('working fine baby ! ')
});

app.listen(PORT, () => {
    console.log(`listening to the ${PORT}`);
});