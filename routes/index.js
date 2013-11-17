
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'HELLO ROCKGEN' });
};

exports.demo = function(req, res){
  res.render('demo', { 
      title: 'this is demo page',
      header: 'demo demo demo ...'
        
  });
};

exports.app = function(req, res){
  res.render('bootstrap', { 
      title: 'this is demo bootstrap',
      content: 'yo yo yo ...'
        
  });
};