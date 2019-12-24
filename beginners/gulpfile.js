const {src, dest, task, series, watch, parallel} = require('gulp');
const rm = require('gulp-rm');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const browserSync = require("browser-sync").create();
const sassGlob = require('gulp-sass-glob');
const autoprefixer = require('gulp-autoprefixer');
const media = require('gulp-group-css-media-queries');
const sourcemaps = require('gulp-sourcemaps');
const cleanCSS = require('gulp-clean-css');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const svgo = require('gulp-svgo');
const svgSprite = require('gulp-svg-sprite');
const gulpif = require('gulp-if');
const env = process.env.NODE_ENV;

const styles = [
    'node_modules/node-normalize-scss/_normalize.scss',
    'src/scss/*.scss'
];

const libs = [
    'node_modules/jquery/dist/jquery.js',
    'src/scripts/*.js'
];

sass.compiler = require('node-sass');

task( 'clean', () => {
    return src( 'dist/**/*', { read: false })
    .pipe(rm())
});

task( 'copy:html', () => {
    return src('src/*.html').pipe(dest('dist'));
});

task( 'copy:font', () => {
    return src('src/fonts/**').pipe(dest('dist/fonts'));
});
task( 'copy:img', () => {
    return src('src/img/**').pipe(dest('dist/img'));
});

task('styles', () => {
   return src(styles)
       .pipe(gulpif(env === 'dev', sourcemaps.init()))
       .pipe(concat('main.scss'))
       .pipe(sassGlob())
       .pipe(sass().on('error', sass.logError))
       .pipe(gulpif(env === 'dev', autoprefixer({
           overrideBrowserslist: ['last 2 versions'],
           cascade: false
       })))
       .pipe(gulpif(env === 'prod', media()))
       .pipe(gulpif(env === 'prod', cleanCSS({compatibility: 'ie8'})))
       .pipe(gulpif(env === 'dev', sourcemaps.write()))
       .pipe(dest('./dist/css'));
});

task('scripts', () => {
    return src(libs)
        .pipe(sourcemaps.init())
        .pipe(concat('main.min.js', {newLine: ';'}))
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(dest('./dist'))
});

task('icons', () => {
    return src('scr/img/icons/*.svg')
        .pipe(svgo({
            plugins: [
                {
                    removeAttrs: {
                        attrs: '(fill|stroke|style|width|height|data.*)'
                    }
                }
            ]
        }))
        .pipe(svgSprite({
            symbol: {
                sprite: '../sprite.svg'
            }
        }))
        .pipe(dest('dist/images/icons'));
});

task('server', () => {
    browserSync.init({
        watch: true,
        server: "./dist",
        // open: false
    });
});

task('watch', () => {
    watch('./src/*.html', series('copy:html'));
    watch('./src/style/**/*.scss', series('styles'));
    watch('./src/scripts/*.js', series('scripts'));
    watch('./src/fonts/**', series('copy:font'));
// watch('./src/images/*.svg', series('icons'));

});


task('default',
    series('clean',
        parallel('copy:html', 'copy:font', 'copy:img', 'styles', 'scripts'),
        parallel('watch', 'server')
    )
);

task('build',
    series('clean', parallel('copy:html', 'copy:font', 'copy:img', 'styles', 'scripts'))
);