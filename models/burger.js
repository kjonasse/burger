// Node Dependency
var orm = require('../config/orm.js');


// create the code that will call the ORM functions using burger specific input for the ORM.
var burger = {

  selectAll: function(callback){
    orm.selectAll("burger", function(res){
      callback(res);
    });
  },

  insertOne: function(burger_name, callback){
    orm.insertOne("burger", burger_name, function(res){
      callback(res);
    });
  },

  updateOne: function(id, callback){
    orm.updateOne("burger", id, function(res){
      callback(res);
    });
  }

};


// Export at the end of the burger.js file.
module.exports = burger;