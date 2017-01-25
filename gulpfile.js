const gulp = require("gulp"),
watch = require("gulp-watch"),
postcss = require("gulp-postcss"),
imports = require("postcss-import"),
prefix = require("autoprefixer"),
browserSync = require("browser-sync");


gulp.task("default", function(){
	console.log("Default");
})

gulp.task("css", function(){
	gulp.src("./app/assets/styles/styles.css")
	.pipe(postcss([imports, prefix]))
	.on("error", function(errorStatus){
		console.log("Error: " + errorStatus);
		this.emit("end");
	})
	.pipe(gulp.dest("./app/temp/styles/"));
})

gulp.task("watch", function(){
	browserSync.init({
		notify: false,
		server: {
			baseDir: "app"
		}
	})

	watch("./app/assets/styles/**/*.css", function(){
		gulp.start("cssInjection");
	});
	watch("./app/index.html", function(){
		browserSync.reload();
	})
})

gulp.task("cssInjection", ["css"], function(){
	gulp.src("./app/temp/styles/styles.css")
	.pipe(browserSync.stream());
})