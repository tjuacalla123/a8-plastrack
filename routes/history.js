var historyData = require('../historyData.json');

exports.view = function(req, res){
  res.render('history.handlebars', historyData);
};
