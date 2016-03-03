   var assert = require('assert');
  var express = require('express');
 var mongodb = require('mongodb').MongoClient;
  var app = express();
 
 var DB = null;
 var quotesjs = require('./quotes.js');
 
 mongodb.connect('mongodb://localhost:27017/diary_db', function(err, db) {
     if (err) throw err;
     DB = db;
     var quote = {
         "header": "Title added with JavaScript From DB",
         "body": "This post's body text was populated by sending a get request to /api/quote"
     };
     // http://mongodb.github.io/node-mongodb-native/2.1/api/Collection.html#updateOne
     db.collection('quote').updateOne(quote, quote, {
         upsert: true,
         w: 1
     }, function(err, result) {
         assert.equal(null, err);
         assert.equal(1, result.result.n);
         console.log('Db Connected and one post inserted');
     });
 });
 var db = require('./db.js');
  

  app.use(express.static('public'));
  
 app.get('/api/quote', function(req, res, next) {
     //DB.collection('post').findOne(function(err, post) {
       //  if (err) return next(err);
         //res.send(post);
     //});
     var q=quotesjs.getQuoteFromDB(function(err,quote){

     });
     res.send(q);
 });
 app.get('/api/quotes',function(req,res,next){
 	res.send(quotesjs.getQuotesFromDB(function(err,quotes){

 	}))
 });

 app.get('/index.html',function(req,res,next){
 	res.sendfile('./public/index.html');
 });
 app.get('/index',function(req,res,next){
 	res.sendfile('./public/index.html');
 });
 app.get('/',function(req,res,next){
 	res.sendfile('./public/index.html');

 });

 


 
 app.listen(8080, function() {
     console.log('Example app listening on port 8080!');
 });
// app.use(require('./routes/posts'));
  
 module.exports = app;