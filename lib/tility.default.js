var step1 = function(orig, dest, env, name) {
  // load proper Gemfile
  cp(orig + '/lib/' + env + '/Gemfile', dest + '/Gemfile');

  // verify RubyGems is installed
  if (!which('gem')) {
    echo('Sorry, this script requires RubyGems');
    exit(1);
  }

  // install bundler
  echo('Checking for Bundler');
  if (!which('bundle')) {
    echo('Installing Bundler...');
    if (exec('gem install bundler').code !== 0) {
      echo('Error: Bundler install failed.');
      exit(1);
    }
  }

  // install from Gemfile
  echo('Installing from RubyGems...');
  if (exec('bundle install').code !== 0) {
    echo('Error: Bundle install failed.');
    exit(1);
  }

  if(env != 'rails') {
    echo('Copying over some files...');
    // bring in package.json
    cp(orig + '/lib/' + env + '/package.json', dest + '/package.json');
    sed('-i', '  "name": "",', '  "name": "' + name + '",', dest + '/package.json');

    // bring in Gruntfile.js for env
    cp(orig + '/lib/' + env + '/Gruntfile.js', dest + '/Gruntfile.js');
  }
}

exports.setup = step1;