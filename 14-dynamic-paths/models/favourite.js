//core module
const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/pathUtil");

const favouriteDataPath = path.join(rootDir, "data", "favourite.json");

module.exports = class favourite {
  static addToFavourite(homeId, callback) {
    favourite.getFavourites((favourites) => {
      if (favourites.includes(homeId)) {
        callback("home already in favourites");
      } else {
        favourites.push(homeId);

        fs.writeFile(favouriteDataPath, JSON.stringify(favourites), callback);
      }
    });
  }
  static getFavourites(callback) {
    fs.readFile(favouriteDataPath, (err, data) => {
      callback(!err ? JSON.parse(data) : []);
    });
  }

  static deleteById(delHomeId, callback) {
    favourite.getFavourites((homeIds) => {
      homeIds = homeIds.filter((homeId) => delHomeId !== homeId);
      fs.writeFile(favouriteDataPath, JSON.stringify(homeIds), callback);
    });
  }
};
