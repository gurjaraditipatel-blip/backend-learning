//core module
const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/pathUtil");

// fake database
//let registeredHomes = [];

module.exports = class Home {
  constructor(houseName, price, locaton, rating, photoUrl) {
    this.houseName = houseName;
    this.price = price;
    this.locaton = locaton;
    this.rating = rating;
    this.photoUrl = photoUrl;
  }

  save() {
    this.id = Math.random().toString();
    Home.fetchAll((registeredHomes) => {
      registeredHomes.push(this);
      const homeDataPath = path.join(rootDir, "data", "homes.json");
      fs.writeFile(
        homeDataPath,
        JSON.stringify(registeredHomes),
        (error) => {},
      );
    });
  }

  static fetchAll(callback) {
    const homeDataPath = path.join(rootDir, "data", "homes.json");
    fs.readFile(homeDataPath, (err, data) => {
      callback(!err ? JSON.parse(data) : []);
    });
  }
};
