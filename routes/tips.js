var tipsData = require('../tipsData.json');

exports.view = function(req, res){
  res.render('tips.handlebars', tipsData);
};

