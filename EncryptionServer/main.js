var mongoClient = require("mongodb").MongoClient,
    restify = require('restify'),
    bcrypt = require("bcrypt"),
    async = require("async"),
    auth = require("./auth/auth.js");

var server = restify.createServer({
    name: "EncryptionServer",
    version: "0.1.0"
});

server.listen(8080);
server.user(restify.fullResponse());

server.get("/users", function create(req, res, next) {

})