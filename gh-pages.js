var ghpages = require('gh-pages');
 
ghpages.publish('out', function(err) {
  console.log('Error on publish');
  console.log(err);
  process.exit();
});

console.log('Published');
process.exit();