// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
// Need to create the code that will call the ORM functions using burger specific input for the ORM.
    all: function(cb) {
        orm.all("burgers", function(res) {
        cb(res);
        });
    }
}

// Export the database functions for the controller (catsController.js).
module.exports = burger;