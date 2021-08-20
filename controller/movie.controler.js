'use strict';


const superagent = require('superagent');
const MovieModel = require('../model/movie.model');
const getMovieData = async (req, res) => {

    const url = `https://api.themoviedb.org/3/search/movie?api_key=f8c02b501277f3b5d63116ef7f655b65&query=amman`
    superagent.get(url)
        .then(result => {

            const responseData = result.body.Results.filter(movie => {

                return new MovieModel(movie);
            })
            res.send(responseData);
        })

        .catch(err => {
            console.log("==================================");
            console.log(err);
            console.log("================================")

        })
    }

    module.exports = {

        getMovieData,
    }