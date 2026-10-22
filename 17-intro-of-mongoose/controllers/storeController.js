const Favourite = require("../models/favourite");
const Home = require("../models/home");

exports.getIndex = (req, res, next) => {
  Home.find().then((registeredHomes) => {
    res.render("store/index", {
      registeredHomes: registeredHomes,
      pageTitle: "airbnb Home",
      currentPage: "index",
    });
  });
};

exports.getHomes = (req, res, next) => {
  Home.find().then((registeredHomes) => {
    res.render("store/home-list", {
      registeredHomes: registeredHomes,
      pageTitle: "Home-list",
      currentPage: "Home",
    });
  });
};

exports.getBookings = (req, res, next) => {
  res.render("store/bookings", {
    pageTitle: "My bookings",
    currentPage: "bookings",
  });
};

exports.getFavouriteList = (req, res, next) => {
  Favourite.find()
    .populate("houseId")
    .then((favourites) => {
      const favouriteHomes = favourites.map((fav) => fav.houseId);

      res.render("store/favourite-list", {
        favouriteHomes: favouriteHomes,
        pageTitle: "My Favourites",
        currentPage: "favourites",
      });
    });
};

exports.postAddToFavourite = (req, res, next) => {
  const homeId = req.body.id;
  Favourite.findOne({ houseId: homeId })
    .then((fav) => {
      if (fav) {
        console.log("already marked as fav");
      } else {
        fav = new Favourite({ houseId: homeId });
        fav.save().then((result) => {
          console.log("fav edded:", result);
        });
      }
      res.redirect("/favourites");
    })
    .catch((err) => {
      console.log("Error while marking fav:", err);
    });
};

exports.postRemoveFromFavourite = (req, res, next) => {
  const homeId = req.params.homeId;
  Favourite.findOneAndDelete({ houseId: homeId })
    .then((result) => {
      console.log("fav removed:", result);
    })
    .catch((err) => {
      console.log("error while removing to favourite", err);
    })
    .finally(() => {
      res.redirect("/favourites");
    });
};

exports.getHomesDetails = (req, res, next) => {
  const homeId = req.params.homeId;

  Home.findById(homeId).then((home) => {
    if (!home) {
      console.log("home  page not Found");
      res.redirect("/homes");
    } else {
      res.render("store/home-detail", {
        home: home,
        pageTitle: "Home Detail",
        currentPage: "Home",
      });
    }
  });
};
