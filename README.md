# Gulp + Less + Pug skeleton

This is a skeleton to build static websties using Pug and Less, plus a live-reload webserver for faster development. It uses:
  * **Gulp** to automate build tasks, plus Gulp Connect to provide a local server with live reload .
  * **Pug** template engine to streamline html writing.
  * **Less**, to modularize and minimize the CSS written.

Extra things to make your website faster:
 * **CSS minification**: both CSS and LESS files are automatically minified.
 * **HTML minification**: the output of Pug files is minified.

## Issues and/or questions

Please open a thread in https://github.com/OscarDCorbalan/gulp-less-pug-skeleton/issues

# Documentation

## Set-up instructions

  1. Clone locally or download this repo, e.g.:
    * `git clone https://github.com/OscarDCorbalan/gulp-less-Pug-skeleton.git`
  1. Install (if you don't have them):
    * [Node.js](http://nodejs.org): Just download v6 and install. Alternatively, if you're on OS X, you can do  `brew install node` .
    * [Gulp](http://gulpjs.com): In a shell console type `npm install -g gulp`.
    * Gulp plugins and app dependencies: Open the repo directory in the console and type `npm install` or, shorter, `npm i`.
	  * This will install any neded Node modules (cssmin, Pug, less...)

## What's included

Within the download you'll find the following directories and files:

```
├── src                   Working directory. Contains some sample files
│   ├── assets             Static assets for the site
│   │   ├── css             Yours or others' CSS files, e.g. bootstrap.css. Will be minified.
│   │   ├── fonts           Custom fonts
│   │   ├── js              Yours or others' JS files, e.j. jquery.js
│   │   └── robots.txt      Default robots.txt (allows crawling everything)
│   ├── images            Images in here get minified by gulp-imagemin.
│   │   └── *
│   ├── js                Scripts in here get minified by gulp-uglify
│   │   └── *
│   ├── pug                Pug files to be processed by gulp-pug.
│   │   ├── templates       Partial views.
│   │   ├── index.pug       Sample index.
│   │   └── *.pug           Your Pug files.
│   └── less	           LESS files to be processed by gulp-less.
│       ├── style.less	    Sample style.
│       └── *.less 	        Your less files.
├── public                Build directory. Don't put anything here, Gulp does.
│   ├── css	               Minified CSS from assets and compiled LESS.
│   ├── fonts	           Copied asset fonts.
│   ├── images	           Minfied asset images.
│   ├── js 	               Copied asset Javascript.
│   ├── robots.txt 	       Copied asset robots.txt.
│   └── *.html	           Compiled Pug files. Html is minified.
├── gulpfile.js           Gulp tasks configuration  
├── package.json          Package configuration  
└── README.md             This file
```

Note that everything in src/assets/ just gets copied to public/js. For example, src/assets/js are just copied, while src/js get processed by gulp-uglify. The same would happen with images found in src/assets instead of src/images.

## Running it

Everything is run with **Gulp**.

Defined gulp tasks are:
  * `gulp` to run all default tasks only once
  * `gulp server` to run all tasks AND start the webserver plus a watch task. This will automatically process changes, in real time, in your source files and make them available in the local web server, and will also automatically reload your browser.

### Test it

  * Run `gulp server`
  * Open `http://localhost` in your browser. This simple html files contains some hints if you don't know how to start.

### Modifying gulp tasks

  * **gulpfile.js** defines the tasks that are done.
  * To easily modify directory names and file matcher at your discretion, they're all defined in constants.

## Developing your site

* `src/` dir is where you put your code and assets.
* `public/` dir is fully auto-generated by Gulp. Your HTML files and everything else will be here.

## Deploying your site into production

Just copy into your server everything generated in the `public/` dir and you should be fine to go.

Make sure that your Pug templates generate an index.html or that your server is configured to serve any other file you want as default.

It's also possible to configure you server to automatically deploy the `/public` folder from a branch of your Git fork, but it's out of the scope of this Readme.

# Built by

(Oscar D. Corbalan)[http://www.oscardc.com]
