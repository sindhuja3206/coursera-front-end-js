My submissions for Coursera's AngularJS course
==============================================

My submissions for [Front-End Javascript Frameworks: AngularJS](https://www.coursera.org/learn/angular-js/home/welcome) course
by The Hong Kong University of Science and Technology. Session: September 12 - October 16. Instructor: Jogesh K. Muppala

To prepare run the following commands:

```
curl -sL https://deb.nodesource.com/setup_5.x | sudo -E bash -
sudo apt-get install -y nodejs

# Just contains symlink called 'node'
sudo apt-get install nodejs-legacy

sudo apt-get install npm

npm install -g bower
```

For using Gulp prepare with the following command:

```
npm install --save-dev gulp-minify-css jshint gulp-jshint jshint-stylish gulp-uglify gulp-usemin gulp-imagemin gulp-notify gulp-cache gulp-changed gulp-rev del gulp-ng-annotate
```

Run watch and browser-sync:

```
gulp watch browser-sync
```

For running json-server install it globally with the following command:

```
sudo npm install json-server -g
```

Run it:

```
json-server --watch db.json
```

If you want json-server to serve static content (html, css, js), copy it in the `public` folder.

For unit testing type the following:

```
npm install jasmine-core --save-dev
npm install karma --save-dev
sudo npm install karma-cli -g
sudo npm install karma-jasmine --save-dev
npm install phantomjs karma-phantomjs-launcher karma-chrome-launcher --save-dev
bower install angular-mocks -S
```

To use Chromium to run Karma tests run the following command:

```
export CHROME_BIN=/usr/bin/chromium-browser
```

In the `test` folder run the following command:

```
karma start karma.conf.js
```
