# UaWebChallengeJS

Implementation of the task for UA Web Challenge VII (2015) in nomination *"Frontend Developer Junior (JavaScript)"*

Address of this repository at GitHub: [UAWebChallengeJS](https://github.com/BeatC/UaWebChallengeJS) 

Github page: [UAWebChallengeJS](beatc.github.io/UaWebChallengeJS)

## Description
Required task was done by means of two classes `Node` and `LeafNode`. The first class represents question (every question has parent - except Tree root - previous question - instance of the same `Node` class). `LeafNode` represents results of testing. In our case it is languages of programming which 'suits' to user. Difference between these two classes is following: `LeafNode` can't have any child (because it's leaf node). Implementation of these classes is placed in `bst.js` file (from *Binary Search Tree*). List of questions it's recomended to configure in `questions.js`. There has already created a list of questions and configured relations between them.

## Installation
To check developed web-app there is no need of any additional installation. But if you want to maintain this repository `npm install` should be used for downloading of all dependent packages.

List of tasks:
* _gulp_ - default task for *Gulp*. Runs compiling SCSS, Uglifying JS, copying HTML and media files, runs watcher;
* _gulp styles_ - compiles SCSS into CSS;
* _gulp views_ - copying of HTML;
* _gulp js_ - uglyfying of JavaScript files;
* _gulp images_ - copying of images to `dist` directory;
* _gulp watch_ - running of watcher.

## Project Structure
Created project has the following structure:
* __app__ directory is the entry point for web-app and has folders containing source and distribution files,
and vendor dependencies:
	* __src__ - directory which contains source files. It consists of:
		* __img__ folder in which all images can be placed;
		* __js__ folder in which all script files can be placed;
		* __styles__ folder containing *.scss style files
		* __views__ folder containing HTML.
	* __dist__ - as it's obvious from the title it contains distribution files (which can be placed on the server):
		* __css__ - contains compiled and minified CSS-files;
		* __js__ - contains uglified JavaScript;
		* __img__ - just images.
		* __index.html__ - page testing implemented data structure;
	* __vendor__ - folder which contains all vendor dependencies downloaded by *bower*;
* __node_modules__ - folder which appears after `npm install` command (See *Installing* section for information);
* __.bowerrc__ - *Bower* config file;
* __LICENSE__ - MIT license;
* __README.md__ - just the file which you are reading now;
* __gulpfile.js__ - config file for *Gulp*. Contains definition of tasks;
* __package.json__ - info about package.

## List of used technologies

Required data base was created just by means of "native JavaScript", so any JS-framework for this purpose hasn't been used.

During implementation of the test page, which is being used created data structure, were used such libraries:
* __Twitter Bootstrap__ - CSS-framework, was used primarly to simplify process of creating design for test page (by the task definition, design of the test page wouldn't be estimated, so Twitter Bootstrap in this case helped to create test page quickly and simply);
* __jQuery__ and __jQueryUI__ - was used primarily to manipulate over DOM-elements and handle on-events.

List of packages which were used for setting up of the frontend environment:
* [__Bower__](http://bower.io) - package manager for dependencies;
* [__Gulp__](http://gulpjs.com) - task runner, compiles and minifies styles, layout, scripts and copy media files;
* [__gulp-sass__](https://www.npmjs.com/package/gulp-sass) - Plugin for *Gulp* which compiles SCSS;
* [__gulp-concat__](https://www.npmjs.com/package/gulp-concat) - Plugin for *Gulp* concatenates files;
* [__gulp-uglify__](https://www.npmjs.com/package/gulp-uglify) - Plugin for *Gulp* uglifies JS-files.
