module.exports = function(grunt) {	
	
	const sass = require('node-sass');

	grunt.initConfig({
	    sass: {
	        options: {
	            implementation: sass,
	            outputStyle: 'expanded',
	            indentWidth: 4,
	            sourceMap: false
	        },
	        dist: {
	            files: {
	                'css/style.css': 'css/style.scss'
	            }
	        }
	    },
        watch: {
            options: {
                spawn: false
            },
            scripts: {
                files: ['css/*.scss'],
                tasks: ['sass']
            }
        }
	});
	
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	
	grunt.registerTask('default', ['sass', 'watch']);
};


/*
		concat: {
		  dist : {
		   src : ["js/*js"],
		   dest : "js/build.js"
		  }
		}
	});
*/
// grunt.loadNpmTasks("grunt-contrib-concat");
