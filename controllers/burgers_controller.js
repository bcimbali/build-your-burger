var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("./../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
    burger.all(function(data) {
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
});

router.post("/burgers/create", function(req, res) {
  var burgerName = req.body.burger_name; 
  console.log('condition is ------:');
  console.log(burgerName);
  burger.create([
    "burger_name", "devoured"],[burgerName, false], function(result) {
    console.log(result);
    res.redirect("/");
  })
});

router.put("/burgers/:id", function(req, res) {
  var condition = 'id = ' + req.params.id;
  burger.update({
    devoured: true
  },condition, function(result) {
    console.log(result);
    // res.sendStatus(200);
    res.redirect("/");
  });
});

// Export routes for server.js to use.
module.exports = router;