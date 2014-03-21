
"use strict";

module.exports = function(grunt) {

  // Load all grunt tasks matching the `grunt-*` pattern.
  require("load-grunt-tasks")(grunt);

  grunt.initConfig({

    config: {
      img: "test/img",
      icons: "test/img/icons",
      css: "test/css"
    },

    autoprefixer: {
      options: {
        browsers: ["last 2 version", "> 1%", "ie 8"]
      },
      dist: {
        files: [{
          expand: true,
          cwd: "<%= config.css %>",
          src: "{,*/}*.css",
          dest: "<%= config.css %>"
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
          cwd: "<%= config.icons %>",
          src: ["**/*.svg"],
          dest: "<%= config.icons %>"
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
          cwd: "<%= config.icons %>",
          src: ["**/*.svg"],
          dest: "<%= config.icons %>"
        }]
      },
      retina: {
        options: {
          scale: 2.0,
          subdir: "png_2x",
        },
        files: [{
          expand: true,
          cwd: "<%= config.icons %>",
          src: ["**/*.svg"],
          dest: "<%= config.icons %>"
        }]
      }
    },

    clean: {
      icons: {
        files: [{
          expand: true,
          cwd: "<%= config.icons %>",
          src: ["**/png", "**/png_2x"]
        }]
      }
    }

  });

  grunt.registerTask("prefix", [
    "autoprefixer"
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

};
