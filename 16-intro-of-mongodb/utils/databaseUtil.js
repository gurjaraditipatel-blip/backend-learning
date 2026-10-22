const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const mongo = require("mongodb");

const MongoClient = mongo.MongoClient;

const Mongo_URL =
  "mongodb+srv://gurjaraditipatel_db_user:rootaditi@completecoding.hhvqirr.mongodb.net/";

let _db;

const mongoConnect = (callback) => {
  MongoClient.connect(Mongo_URL)
    .then((client) => {
      callback();
      _db = client.db("airbnb");
    })
    .catch((err) => {
      console.log("Error while connecting to mongo: ", err);
    });
};

const getDB = () => {
  if (!_db) {
    throw new Error("mongo not connect");
  }
  return _db;
};
exports.mongoConnect = mongoConnect;
exports.getDB = getDB;
