var additemData = require('../helpData.json');

exports.view = function(req, res){
  res.render('additem.handlebars', additemData);
};