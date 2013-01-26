require('shelljs/global');
require('colors');

// set root project path to var
var projRoot = pwd();
// set environment var
var env = process.env.npm_package_config_env;

// load proper Gemfile
cp('lib/tility/Gemfile.'+env, 'Gemfile');

// verify RubyGems is installed
if (!which('gem')) {
  echo('Sorry, this script requires RubyGems');
  exit(1);
}

// install bundler
if (exec('gem install bundler').code !== 0) {
  echo('Error: Bundler install failed.');
  exit(1);
}

// install from Gemfile
if (exec('bundle install').code !== 0) {
  echo('Error: Bundle install failed.');
  exit(1);
}

// verify environment
if(env === 'scratch') {

  // build default view
  cp('lib/tility/index.'+env+'.html', 'index.html');

} else if(env === 'rails') {

  // build default view
  mkdir('-p', 'app/assets/views/layouts/');
  cp('lib/tility/index.'+env+'.erb', 'app/assets/views/layouts/application.html.erb');

  // init rails in current directory
  if (exec('rails new . --skip-bundle -q -s -d mysql').code !== 0) {
    echo('Error: Rails init failed.');
    exit(1);
  }

  // remove tree from sprockets and only include default css
  sed('-i', ' *= require_tree .', ' *= require "default"', 'app/assets/stylesheets/application.css');

  // add .css extension to default.scss for sprockets
  mv('app/assets/stylesheets/default.scss', 'app/assets/stylesheets/default.css.scss');

  // moving selectivzr to be a vendor library
  mkdir('-p', 'vendor/assets/javascripts/');
  mv('public/javascripts/selectivizr-min.js', 'vendor/assets/javascripts/selectivizr-min.js');

  // no longer need these in rails
  rm('-rf', 'public/javascripts/');
  rm('-rf', 'public/stylesheets/');
  rm('-rf', 'public/images/');
  rm('app/assets/javascripts/default.js');

} else if(env === 'node') {
  echo(("---------------------------------------").red);
  echo((("ERROR!").bold + (" Still working on this environment.")).red);
  echo(("---------------------------------------").red);
  exit(1);
} else {
  echo(("---------------------------------------").red);
  echo((("ERROR!").bold + (" This is not a valid environment. (scratch, rails, node)")).red);
  echo(("---------------------------------------").red);
  exit(1);
}

// bring in correct Gruntfile.js for env
cp('lib/tility/Gruntfile.'+env+'.js', 'Gruntfile.js');

// change directory for Bourbon and Neat installs
cd('app/assets/stylesheets');

if (exec('bourbon install').code !== 0) {
  echo('Error: Bourbon install failed.');
  exit(1);
}

if (exec('neat install').code !== 0) {
  echo('Error: Neat install failed.');
  exit(1);
}

// If you get this far, you're just about golden!
echo(("---------------------------------------").green);
echo(("To run your server, just run: grunt run").green);
echo(("---------------------------------------").green);
