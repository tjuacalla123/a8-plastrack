var helpData = require('../helpData.json');

exports.view = function(req, res){
  res.render('help.handlebars', helpData);
};

