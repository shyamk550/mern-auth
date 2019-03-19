const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");
var mongoose = require('mongoose');

// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

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



router.post('/getUsersByName',(req, res) =>{
  User.findOne({ name: req.body.name })
    .then(user => {
      if (!user) {
        return res.status(404).json({ usernotfound: "user not found" });
      }
      res.json(user)
  });

})

module.exports = router;
