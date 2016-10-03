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

For running json-server install it globally with the following command:

```
sudo npm install json-server -g
```

Run it:

```
json-server --watch db.json
```

If you want json-server to serve static content (html, css, js), copy it in the `public` folder.