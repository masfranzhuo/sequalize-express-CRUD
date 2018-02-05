var express = require('express');
var Book = require('../models').Book;
var router = express.Router();

router.get('/', function(req, res){
    console.log('getting all books');
    Book.findAll().then(books => {
        res.json(books);
    });
});

router.get('/:id', function(req, res){
    console.log('getting one book');
    Book.findById(req.params.id).then(book => {
        console.log(book);
        res.json(book);
    });
    /* another ways to do it
    Book.findOne({ where: {id: req.params.id} }).success(book => {
        console.log(book);
        res.json(book);
    }).error(err => {
        res.send('error has occured');
    });
    */
});

router.post('/', function(req, res){
    Book.create({ 
        title: req.body.title,
        author: req.body.author, 
        category: req.body.category 
    }).then(book => {
        console.log(book.get({
          plain: true
        }));
        res.send(book);
    });
});

router.put('/:id', function(req, res){
    Book.update({
        title: req.body.title,
        author: req.body.author,
        category: req.body.category
    },{ 
        where: { id: req.params.id } 
    }).then(result => {
        res.status(200).json(result);
    });
});

router.delete('/:id', function(req, res){
    Book.destroy({ 
        where: { id: req.params.id } 
    }).then(result => {
        res.status(200).json(result);
    });
});

module.exports = router;