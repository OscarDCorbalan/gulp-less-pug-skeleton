'use strict';

const gulp = require('gulp');
const less = require('gulp-less');
const pug = require('gulp-pug');
const cssmin = require('gulp-cssmin');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const connect = require('gulp-connect');


// Source folder configuration
const SRC_DIR = {};
SRC_DIR.root = './src/';
SRC_DIR.assets = SRC_DIR.root + 'assets/';
SRC_DIR.img = SRC_DIR.root + 'images/';
SRC_DIR.js = SRC_DIR.root + 'js/';
SRC_DIR.less = SRC_DIR.root + 'less/';
SRC_DIR.pug = SRC_DIR.root + 'pug/';

// Source file matchers, using respective directories
const SRC_FILES = {
	less: SRC_DIR.less + '*.less',
	pugTemplates: SRC_DIR.pug + 'templates/*.pug',
	pug: SRC_DIR.pug + '*.pug',
	js: SRC_DIR.js + '**/*.js',
	images: SRC_DIR.img + '**/*',
	assets: SRC_DIR.assets + '**/*'
};

// Output directories
const PUB_DIR = {};
PUB_DIR.root = './public/';
PUB_DIR.js = PUB_DIR.root + 'js/';
PUB_DIR.css = PUB_DIR.root + 'css/';
PUB_DIR.cssFiles = PUB_DIR.root + 'css/style.css';
PUB_DIR.fnt = PUB_DIR.root + 'fonts/';
PUB_DIR.img = PUB_DIR.root + 'images/';


// TASKS

gulp.task('watch', () => {
	gulp.watch(SRC_FILES.less, ['less']);
	gulp.watch([SRC_FILES.pug,  SRC_FILES.pugTemplates], ['pug']);
	gulp.watch(SRC_FILES.images, ['imagemin']);
	gulp.watch(SRC_FILES.assets.onlyCopy, ['copyAssets']);
});

gulp.task('jsmin', () =>
	gulp.src(SRC_FILES.js)
    .pipe(uglify())
	.pipe(gulp.dest(PUB_DIR.js))
	.pipe(connect.reload())
);

gulp.task('less', () =>
	gulp.src(SRC_FILES.less)
		.pipe(less().on('error', err => console.log(err)))
		.pipe(gulp.dest(PUB_DIR.css))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(PUB_DIR.css))
		.pipe(connect.reload())
		.pipe(connect.reload())
);

gulp.task('pug', () =>
	gulp.src(SRC_FILES.pug)
		.pipe(pug({
			// pretty: true // Comment this to get minified HTML
		}))
		.pipe(gulp.dest(file => {
			var pugIndex = file.base.lastIndexOf('pug');
			var relPath = file.base.substr(pugIndex+4);
			return PUB_DIR.root + relPath;
		}))
		.pipe(connect.reload())
);

gulp.task('imagemin', () =>
    gulp.src(SRC_FILES.images)
        .pipe(imagemin())
        .pipe(gulp.dest(PUB_DIR.img))
		.pipe(connect.reload())
);

gulp.task('copyAssets', () =>
    gulp.src(SRC_FILES.assets)
        .pipe(gulp.dest(PUB_DIR.root))
		.pipe(connect.reload())
);

gulp.task('webserver', () =>
	connect.server({
    	root: 'public',
		livereload: true,
		port: 80,
		host: 'localhost'
	})
);

gulp.task('default', ['less', 'pug', 'imagemin', 'jsmin', 'copyAssets']);
gulp.task('server', ['default', 'webserver', 'watch']);
