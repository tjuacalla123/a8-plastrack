var sharepageData = require('../sharepageData.json');

exports.view = function(req, res){
  res.render('share.handlebars', sharepageData);
};

