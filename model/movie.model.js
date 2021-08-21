'use strict';

class MovieModel {

constructor(data) {

    this.title= data.title;
    this.overview=data.overview;
    this.vote_average=data.vote_average;
}

}

module.exports = MovieModel;