var assert = require('chai').assert;
var app = require('../app.js');
var request = require('supertest');
var Quote = require('../quotes.js');
var db = require('../db.js');
var superTest = require('supertest');
var Chai = require('chai');
var Mocha = require('mocha');
var Istanbul = require('istanbul');

before(function(done) {
    // use this after you have completed the connect function
    // db.connect(function(err, db) {
    //    if (err) return done(err);
    //    else done();
    // });
});

describe("getElementByIndexElseRandom", function() {
    var arr = [1, 2, 3, 43, 5];
    it("should return a random element that is included in the array if we omit the index", function() {
        // TODO
        var x=Quote.getElementByIndexElseRandom(arr);
        assert.include(arr,x);
    });
    it("should return the first element if we also pass the index 0", function() {
        // TODO
        var x=Quote.getElementByIndexElseRandom(arr,0);
        assert.equal(x,arr[0]);
    });
    it("should return the last element if we also pass the index", function() {
        // TODO
        var x = Quote.getElementByIndexElseRandom(arr,arr.length-1);
        assert.equal(x,arr[arr.length-1]);
    });
});

describe("getQuotesFromJSON", function() {
    it("should return an array of 102 quote", function() {
        // TODO: you know how many quotes are there
        var array = Quote.getQuotesFromJSON();
        assert.lengthOf(array,102);
    });
    it("first quote in the array's author should be Kevin Kruse", function() {
        // TODO: you know the content of first quote
        var quotes = Quote.getQuotesFromJSON();
        assert.equal(quotes[0].author,kevin kruse);
    });
});

describe("getQuoteFromJSON", function() {
    it('should return a quote object with an author and text property', function() {
        // TODO: check that the returned quote has text and author
        var quote = Quote.getQuoteFromJSON();
    });
    it('should return a random quote if index not specified', function() {
       // TODO: is the returned quote in the all quotes array?
       var quotes=Quote.getQuotesFromJSON();
       var quote=Quote.getQuoteFromJSON();
       assert.include(quotes,quote);
    });
    it('should return the first quote if we pass 0', function() {
        // TODO: you know the content of first quote
        var quote = Quote.getQuoteFromJSON(0);
        assert.equal(quote,{
    "author": "Kevin Kruse",
    "text": "Life isn’t about getting and having, it’s about giving and being"
})
    });
});

// quotes collection should be called quotes
describe('seed', function() {
    before(db.clearDB);
    it('should populate the db if db is empty returning true', function(done) {
        // TODO: assert that seeded is true
        Quote.seed(function(err,seeded){

        });

        //assert.equal(seeded,true);
        seeded.assert.isTrue;
    });
    it('should have populated the quotes collection with 102 document', function(done) {
        // TODO: check that the database contains 102 document
        Quote.seed(function(err,seeded){

        });

        assert.lengthOf(db,102);
    });
    it('should not seed db again if db is not empty returning false in the callback', function(done) {
        // TODO: assert that seeded is false
    });
    it('should not seed db again if db is not empty', function(done) {
        // TODO: The database should have 102 quote still
    });
});

describe('getQuotesFromDB', function() {
    it('should return all quote documents in the database', function(done) {
        // TODO: there should be 102 documents in the db
        var quotes= Quote.getQuotesFromDB(fucntion(err,quotes){

        });
        assert.lengthOf(quotes,102);
    });
});

describe('getQuoteFromDB', function() {
    it('should return a random quote document', function(done) {
        // TODO: see if it returns on of the quotes from all quotes
        var quotes= Quote.getQuotesFromDB(fucntion(err,quotes){

        });
        var quote = Quote.getQuoteFromDB(function(err,quote){

        });
        assert.include(quotes,quote);
    });
    it('should return the first quote if passed 0 after callback', function(done) {
        // TODO: you know the content of object in the file
        var quote = Quote.getQuoteFromDB(function(err,quote){},0);

    });
    assert.equal(quote,{"author": "Kevin Kruse",
    "text": "Life isn’t about getting and having, it’s about giving and being"}
});

describe('API', function() {
    request = request(app);
    it("should return a 404 for urls that don't exist", function(done) {
        // TODO: test with supertest
    });

    it('/api/quote should return a quote JSON object with keys [_id, text, author]', function(done) {
        // TODO: test with supertest
         request(app)
  .get('/api/quote')
  .expect('Content-Type', /json/)
  .expect('Content-Length', '1')
  .expect(200)
  .end(function(err, res){
    if (err) throw err;
  });
    });

    it('/api/quotes should return an array of JSON object when I visit', function(done) {
        // TODO: test with supertest
        request(app)
  .get('/api/quotes')
  .expect('Content-Type', /json/)
  .expect('Content-Length', '102')
  .expect(200)
  .end(function(err, res){
    if (err) throw err;
  });
    });
});
