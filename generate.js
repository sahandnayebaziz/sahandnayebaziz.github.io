//
// Generates files for each static site page.
// Sahand
//
var fs = require('fs');
var path = require('path');
var Handlebars = require('handlebars');

var pagesGenerated = 0;
var pageConfigurations = JSON.parse(fs.readFileSync('./pages.json', 'utf8'));

pageConfigurations.forEach((configuration) => {
  var destinationPath = configuration.slug + '.html';
  var templateFile = fs.readFileSync('./template.handlebars', 'utf8');
  var generatedHTML = Handlebars.compile(templateFile)(configuration);
  fs.writeFileSync(destinationPath, generatedHTML, 'utf8');
  pagesGenerated = pagesGenerated + 1;
});

console.log('Generation completed. Created ' + pagesGenerated + ' pages(s).');
