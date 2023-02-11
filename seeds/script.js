require("../db");



//send data to Data Base

const MovielModel = require("../models/Movie.model.js")
const movieArr = require("./movies.seed")
// fin send data


MovielModel.insertMany(movieArr)
.then((response)=>{

})
.catch((error)=>{
    next(error)
})