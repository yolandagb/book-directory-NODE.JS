const router = require('express').Router();
const books = require ('./books_dumb');

let booksDirectory = books;

// lets build our endpoints

router.get('/books', function(req,res){
    res.send(booksDirectory);


});

router.get('/books/:id', function(req,res){


});

router.post('/books', function(req,res){


});

router.put('/books/:id', function(req,res){


});

router.delete('/books/:id', function(req,res){


});





module.exports = router