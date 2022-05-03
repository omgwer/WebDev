
let project_folder ='dist';
let sourse_folder = '#src';

let path = {
  build: {
    php: project_folder + '/',
    css: project_folder + '/css/',
    js: project_folder + '/js/',
    img: project_folder + '/img/',
    fonts: project_folder + '/fonts/',
    data: project_folder + '/data/',
  },
  src: {
    php: [sourse_folder + '/*.php', '!' + sourse_folder + '/_*.php'],
    css: [sourse_folder + '/scss/*.scss', '!' + sourse_folder + '/_*.scss'],
    js: sourse_folder + '/js/*.js',
    img: sourse_folder + '/img/**/*.{jpg,png,svg,gif,ico,webp}',
    fonts: sourse_folder + '/fonts/*.ttf',
    data: sourse_folder + '/data/*',
  },
  watch: {
    php: sourse_folder + '/**/*.php',
    css: sourse_folder + '/scss/**/*.scss',
    js: sourse_folder + '/js/**/*.js',
    img: sourse_folder + '/img/**/*.{jpg,png,svg,gif,ico,webp}',
  },
 // clean: './' + project_folder + '/',
  clean: ['./' + project_folder + '/', '!' + './' + project_folder + '/data']
}

let {src,dest} = require('gulp'),
  gulp = require('gulp'),
  browsersync = require('browser-sync').create(),
  fileinclude = require('gulp-file-include'),
  del = require('del'),
  scss = require('gulp-sass')(require('sass'),
  autoprefixer = require('gulp-autoprefixer'),
  group_media = require('gulp-group-css-media-queries'),
  clean_css = require('gulp-clean-css'),
  rename = require('gulp-rename'),
  uglify = require('gulp-uglify-es').default);
//  imagemin = require('gulp-imagemin');

function browserSync() {
  browsersync.init ({
    // server :{
    //   baseDir: './' + project_folder + '/',
    // },
    // startPath: "/index.php",
    proxy: "localhost:63342/WebDev/lw11/dist/index.php",
    //port: 3000,
    notify: false
  })
}

function data() {
  return src(path.src.data)
      .pipe(fileinclude())
      .pipe(dest(path.build.data))
}

function php() {
  return src(path.src.php)
    .pipe(fileinclude())
    .pipe(dest(path.build.php))
    .pipe(browsersync.stream())
}

function css() {
  return src(path.src.css)
    .pipe(fileinclude())
    .pipe(
      scss({
        outputStyle: 'expanded'
      })
    )
    .pipe(
      group_media()
    )
    .pipe(
      autoprefixer({
        overrideBrowserslist: ['last 5 versions'],
        cascade: true,
      })
    )
    .pipe(dest(path.build.css))
    .pipe(clean_css())
    .pipe(rename({
      extname: '.min.css'
    }))
    .pipe(dest(path.build.css))
    .pipe(browsersync.stream())

}

function js() {
  return src(path.src.js)
    .pipe(fileinclude())
    .pipe(dest(path.build.js))
    .pipe(
      uglify()
    )
    .pipe(
      rename({
        extname: '.min.js'
      }))
    .pipe(dest(path.build.js))
    .pipe(browsersync.stream())
}

function images() {
  return src(path.src.img)
    // .pipe(
    //   imagemin({
    //     progressive: true,
    //     svgoPlugins: [{removeViewBox: false}],
    //     interlaced: true,
    //     optimizationLevel: 3 // 0 to 7
    //   })
    // )
    .pipe(dest(path.build.img))
    .pipe(browsersync.stream())
}

function watchFiles() {
  gulp.watch([path.watch.php],php);
  gulp.watch([path.watch.css],css);
  gulp.watch([path.watch.js],js);
  gulp.watch([path.watch.img],images);
}

function clean() {
  return del(path.clean);
}

let build = gulp.series(clean, gulp.parallel(js, css, php, images, data));
let watch = gulp.parallel(build, watchFiles, browserSync);

exports.images = images;
exports.js = js;
exports.css = css;
exports.php = php;
exports.data = data;
exports.build = build;
exports.watch = watch;
exports.default = watch;

