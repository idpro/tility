# The Able Few Tility

Tility is a command line utility to help you quickly set up your development environment. I've always hated wasting time trying to remember all the little commands to just get an app to work. Also, sometimes that app is Rails and Node, other times I just need a quick test environment to build out some concept code in JS and CSS. This tool belt tries to help solve this issue. Hoping it'll help you skip the crap and get straight to the code.

Happy Hacking!!

## Install

`/bin/sh install`

## Use

  * `tility -n <app-name>`
  * Choose an environment
  * ????
  * PROFIT!!!

### You Will Need...

  * [Node.JS](http://nodejs.org) installed (0.8.18 or later)  
  * [Grunt CLI](https://github.com/gruntjs/grunt/wiki/Getting-started) installed (this is different than the original grunt.js)
  * [Live Reload browser extension](http://feedback.livereload.com/knowledgebase/articles/86242-how-do-i-install-and-use-the-browser-extensions-)  
  * [RubyGems](http://rubygems.org/pages/download) installed
  * [Ruby](http://www.ruby-lang.org/en/downloads/) installed

## Environments

### Scratch

This is a simple server and scratchpad development environment. It is fully loaded with options for installing Sass or LESS.  
You are also able to choose from different mixin libraries depending on which preprocesser you chose. Including:  

  * Bourbon  
    * Neat (optional)  
  * Compass  
    * Susy (optional)  
  * ~~LESS Hat~~  
  * ~~LESS Elements~~  

Or, skip all the CSS preprocessor nonesense and just run with straight CSS and HTML.  
You are also given the choice to install CoffeeScript as a JS preprocessor or stick with standard JS.

After all that is said and done, and everything has been installed into your new application directory, simply run `grunt run` in your Terminal and then fire up your browser and head to `http://localhost:8000`.

Code until your heart is content, save as you work, and watch your browser refresh for you!

### Rails

So, you're wanting to create a full scale application and you chose to use the Ruby language? Awesome! 

Rails has Sass built in as the default CSS preprocessor, so Tility will respect this decision to move forward. _(**Note:** there are ways to use other preprocessor, but for now, you'll have to research that on your own.)_

The only option it'll ask here is if you would like to use Bourbon, Bourbon/Neat, Compass, or Compass/Susy.

CoffeeScript is also defaulted into Rails, so no options there. _(**Note:** You don't have to use Sass or Coffee in your rails app, simply change the extension to .css or .js respectively)_

Once that's all set, you will need to load up `guard start -i` in one Terminal window and `rails server` in another. Now load your browser to `http://localhost:3000` and you're all set!

### Node.js

Let's build a real-time app!

It will provide you the same options as a Scratchpad application, and build you a multi-environment Node application complete with Express, Socket.IO, and Jade template engine.

Run `npm start` to get the server started. It will watch the changes to any core files and reboot the server as needed, it will also watch any frontend files and LiveReload your page as changes are made.

Load up `http://localhost:4000` and see your work!!

## Known Issues

* Rails Env is not fully tested
* It's opinionated on Require.JS - should require a choice
* LESS - CSS Libraries not integrated

## License 

(The MIT License)

Copyright (c) 2013 Kyle Knight (@idpro) & The Able Few (@theablefew)

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.