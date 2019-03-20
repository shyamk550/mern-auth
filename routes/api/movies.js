const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");
var mongoose = require('mongoose');

// Load input validation
const validateMoviesInput = require("../../validation/addmovie");

// Load User model
const Movies = require("../../models/Movies");


router.get('/getmovies',(req, res) =>{
    Movies.find({}, function(err, result) {
    if (err) throw err;
    const movies = result.map((result)=>{
      return {id: result._id, name: result.name, genre: result.genre, rating: result.rating, story: result.story, cast: result.cast, releasedate: result.releasedate}
  })

  res.json(movies)

  });
})



router.post("/addmovie", (req, res) => {

  console.log(req.body.name);
  const { errors, isValid } = validateMoviesInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  Movies.findOne({ name: req.body.name }).then(movie => {
    console.log(movie);
    if (movie) {
      return res.status(400).json({ name: "Movie already exists" });
    } else {
      const newMovie = new Movies({
        name: req.body.name,
        genre: req.body.genre,
        rating: req.body.rating,
        story: req.body.story,
        cast: req.body.cast,
        releasedate: req.body.releasedate,
      });
          newMovie
            .save()
            .then(movie => res.json(movie))
            .catch(err => console.log(err));
       
     
    }
  });
});

module.exports = router;
