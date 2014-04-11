
"use strict";

module.exports = function(grunt) {

  // Load all grunt tasks matching the `grunt-*` pattern.
  require("load-grunt-tasks")(grunt);

  // Time how long tasks take.
  require("time-grunt")(grunt);

  var config = {
    name: "SassyIcons",
    base: "./test",
    scss: "./test/sass",
    css: "./test/css",
    img: "./test/img",
    icons: "./test/img/icons",
    src: "./stylesheets",
    dist: "./dist"
  }

  grunt.initConfig({

    pkg: grunt.file.readJSON("package.json"),

    conf: config,

    sass: {
      options: {
        //trace: true,
        bundleExec: true,
        compass: true,
        style: "expanded"
      },
      test: {
        options: {
          loadPath: ["<%= conf.src %>"]
        },
        files: [{
          expand: true,
          cwd: "<%= conf.scss %>",
          src: ["*.scss"],
          dest: "<%= conf.css %>",
          ext: ".css"
        }]
      },
      dist: {
        options: {
          loadPath: ["<%= conf.dist %>"]
        },
        files: [{
          expand: true,
          cwd: "<%= conf.scss %>",
          src: ["*.scss"],
          dest: "<%= conf.css %>",
          ext: ".css"
        }]
      }
    },

    watch: {
      test: {
        files: ["<%= conf.scss %>/*.scss"],
        tasks: ["sass:test"]
      }
    },

    browserSync: {
      test: {
        bsFiles: {
          src: "<%= conf.css %>/*.css"
        },
        options: {
          watchTask: true,
          server: {
            baseDir: "<%= conf.base %>"
          }
        }
      }
    },

    autoprefixer: {
      options: {
        browsers: ["last 2 version", "> 1%", "ie 8"]
      },
      dist: {
        files: [{
          expand: true,
          cwd: "<%= conf.css %>",
          src: "{,*/}*.css",
          dest: "<%= conf.css %>"
        }]
      }
    },

    svgmin: {
      options: {
        plugins: [
          { removeViewBox: true }
        ]
      },
      icons: {
        files: [{
          expand: true,
          cwd: "<%= conf.icons %>",
          src: ["**/*.svg"],
          dest: "<%= conf.icons %>"
        }]
      }
    },

    svg2png: {
      fallback: {
        options: {
          subdir: "png"
        },
        files: [{
          expand: true,
          cwd: "<%= conf.icons %>",
          src: ["**/*.svg"],
          dest: "<%= conf.icons %>"
        }]
      },
      retina: {
        options: {
          scale: 2.0,
          subdir: "png_2x",
        },
        files: [{
          expand: true,
          cwd: "<%= conf.icons %>",
          src: ["**/*.svg"],
          dest: "<%= conf.icons %>"
        }]
      }
    },

    clean: {
      icons: {
        files: [{
          expand: true,
          cwd: "<%= conf.icons %>",
          src: ["**/png", "**/png_2x"]
        }]
      }
    },

    concat: {
      options: {
        banner: "/*! <%= conf.name %> – v<%= pkg.version %> – <%= grunt.template.today('yyyy-mm-dd') %> */\n",
      },
      dist: {
        src: [
          "<%= conf.src %>/config/_config.scss",
          "<%= conf.src %>/helpers/_helpers.scss",
          "<%= conf.src %>/icons/_sprite-map-create.scss",
          "<%= conf.src %>/icons/_icon.scss",
          "<%= conf.src %>/icons/_icon-single.scss",
          "<%= conf.src %>/icons/_generated.scss",
          "<%= conf.src %>/icons/_icon-generated.scss",
        ],
        dest: "<%= conf.dist %>/_<%= conf.name %>.scss",
      },
    }

  });


  grunt.registerTask("test", [
    "browserSync:test",
    "watch:test"
  ]);

  grunt.registerTask("dist", [
    "concat:dist",
    "sass:dist"
  ]);

  grunt.registerTask("icons_refresh", [
    "clean:icons",
    "svgmin:icons",
    "svg2png:fallback",
    "svg2png:retina"
  ]);

  grunt.registerTask("icons", [
    "newer:svgmin:icons",
    "newer:svg2png:fallback",
    "newer:svg2png:retina"
  ]);

  grunt.registerTask("prefix", [
    "autoprefixer"
  ]);

};
