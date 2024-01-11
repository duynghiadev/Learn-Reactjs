var expect = require("chai").expect;
var request = require("request");
var server = require("../app/server");


describe("TESTS FOR ASYNCHRONOUS CODE OF SERVER", function() {

  // test 1       -------------------------------------------------------------------
  describe("Sever Status Checker", function() {

    var url = "http://localhost:3000/testConnection";

    var notExists = "http://localhost:3000/abcdefg12345";

    it("Response should be undefined for parameter 100", function(done) {
      request(url + "?status=100", function(error, response, body) {
        expect(response).to.equal(undefined);
        done();
      });
    });

    it("Returns status 150 and answer is empty", function(done) {
      request(url + "?status=150", function(error, response, body) {
        expect(response.statusCode).to.equal(150);
        expect(body).to.equal("");
        done();
      });
    });

    it("Returns status 200 and answer 200", function(done) {
      request(url + "?status=200", function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal("Your parameter was: 200");
        done();
      });
    });

    it("Returns status 250 and answer 250", function(done) {
      request(url + "?status=250", function(error, response, body) {
        expect(response.statusCode).to.equal(250);
        expect(body).to.equal("Your parameter was: 250");
        done();
      });
    });

    it("Returns status 600 and answer 600", function(done) {
      request(url + "?status=600", function(error, response, body) {
        expect(response.statusCode).to.equal(600);
        expect(body).to.equal("Your parameter was: 600");
        done();
      });
    });

    it("Returns status 400 if parameter is not provided", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(400);
        expect(body).to.equal("Your parameter was: undefined");
        done();
      });
    });

    it("Returns status 400 when param is not a number", function(done) {
      request(url + "?status=asd", function(error, response, body) {
        expect(response.statusCode).to.equal(400);
        expect(body).to.equal("Your parameter was: asd");
        done();
      });
    });

    it("Returns status 400 if parameter is less than 100", function(done) {
      request(url + "?status=90", function(error, response, body) {
        expect(response.statusCode).to.equal(400);
        expect(body).to.equal("Your parameter was: 90");
        done();
      });
    });

    it("Returns status 400 if parameter is more than 999", function(done) {
      request(url + "?status=1100", function(error, response, body) {
        expect(response.statusCode).to.equal(400);
        expect(body).to.equal("Your parameter was: 1100");
        done();
      });
    });

    it("Returns status 404 if url is not correct", function(done) {
      request(notExists, function(error, response, body) {
        expect(response.statusCode).to.equal(404);
        done();
      });
    });
  });



  // test 2       -------------------------------------------------------------------
  describe("Server-side Profile Constructor", function() {

    var url = "http://localhost:3000/profileConstructor";

    it("Empty query should return status 200 and give an empty object", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(JSON.parse(body)).to.deep.equal({ error: "Name and Email is required" });
        done();
      });
    });

    it("Only name is provided", function(done) {
      request(url + "?name=Dima", function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(JSON.parse(body)).to.deep.equal({ error: "Email is required" });
        done();
      });
    });

    it("Only email is provided", function(done) {
      request(url + "?email=fuflina@yandex.ru", function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(JSON.parse(body)).to.deep.equal({ error: "Name is required" });
        done();
      });
    });

    it("Everything except name provided", function(done) {
      request(url + "?email=fuflina@yandex.ru&surname=Kovalenko&age=24", function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(JSON.parse(body)).to.deep.equal({ error: "Name is required" });
        done();
      });
    });

    it("Everything except email provided", function(done) {
      request(url + "?name=Dima&surname=Kovalenko&age=24", function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(JSON.parse(body)).to.deep.equal({ error: "Email is required" });
        done();
      });
    });

    it("Only name and email provided", function(done) {
      request(url + "?name=Dima&email=fuflina@yandex.ru", function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(JSON.parse(body)).to.deep.equal({ name: "Dima", email: "fuflina@yandex.ru", filled: 50 });
        done();
      });
    });

    it("Incorrect Email provided", function(done) {
      request(url + "?name=Dima&surname=Kovalenko&email=fuflin.adyandex.ru&age=24", function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(JSON.parse(body)).to.deep.equal({ error: "Email is incorrect" });
        done();
      });
    });

    it("Incorrect (not a number) age provided", function(done) {
      request(url + "?name=Dima&surname=Kovalenko&email=fuflina@yandex.ru&age=2ds4", function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(JSON.parse(body)).to.deep.equal({ name: "Dima", surname: "Kovalenko", email: "fuflina@yandex.ru", filled: 75 });
        done();
      });
    });

    it("Negative age provided", function(done) {
      request(url + "?name=Dima&surname=Kovalenko&email=fuflina@yandex.ru&age=-24", function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(JSON.parse(body)).to.deep.equal({ name: "Dima", surname: "Kovalenko", email: "fuflina@yandex.ru", filled: 75 });
        done();
      });
    });

    it("All the data provided correctly", function(done) {
      request(url + "?name=Dima&surname=Kovalenko&email=fuflina@yandex.ru&age=24", function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(JSON.parse(body)).to.deep.equal({ name: "Dima", surname: "Kovalenko", age: 24, email: "fuflina@yandex.ru", filled: 100 });
        done();
      });
    });
  });
});
