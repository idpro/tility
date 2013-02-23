// grunt watch in node - http://cobbweb.me/blog/2012/06/07/using-grunt-dot-js-to-build-your-frontend-in-a-node-dot-js-slash-express-dot-js-app/
var build = function(orig, dest, name){
  mkdir('-p', 'app/assets/stylesheets');
  mkdir('-p', 'app/assets/javascripts');
  mkdir('-p', 'public/images');
  mkdir('-p', 'public/stylesheets');
  mkdir('-p', 'public/javascripts');
  mkdir('-p', 'config/environments');
  mkdir('routes');
  mkdir('views');
  mkdir('log');

  cp('-R', orig + '/app/assets/stylesheets/*', dest + '/app/assets/stylesheets');
  cp('-R', orig + '/app/assets/javascripts/*', dest + '/app/assets/javascripts');
  cp('-R', orig + '/public/images/*', dest + '/public/images');
  cp('-R', orig + '/public/stylesheets/*', dest + '/public/stylesheets');
  cp('-R', orig + '/public/javascripts/*', dest + '/public/javascripts');
  cp('-R', orig + '/lib/node/routes/*', dest + '/routes');

  // Setup environments
  cp('-R', orig + '/lib/node/config/environment.js', dest + '/config');
  cp('-R', orig + '/lib/node/config/environments/*', dest + '/config/environments');

  // build default view
  cp(orig + '/lib/node/index.jade', dest + '/views/index.jade');
  // bring in package.json
  cp(orig + '/lib/node/app.js', dest + '/app.js');

  exec('npm install');
}

var output = function() {
  echo(("---------------------------------------").green);
  echo(("To run your server, just run: npm start").green);
  echo(("---------------------------------------").green);
}

exports.build = build;
exports.output = output;