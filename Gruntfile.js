module.exports = function(grunt){

	//1. All configuration goes here
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		sass: {
		    dist: {
		        options: {
		            style: 'nested'
		        },
		        files: {
		            'css/global.css': 'css/global.scss'
		        }
		    } 
    	},

    	watch: {
    		options: {
        		livereload: true,
    		},
		    css: {
		        files: ['css/*.scss'],
		        tasks: ['sass'],
		        options: {
		            spawn: false,
		        },
		    },
		        
		    /*js:{
		    	files: ['js/*.js'],
		    	tasks: ['uglify'],
		    	options:{
		    		spawn; false,
		    	}
		    }*/     
		} 
	});

	//3. Where we tell Grunt we plan to use this plug-in.
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	
	//4. Where we tell Grunt what to do when we type "grunt" into the terminal.
	grunt.registerTask('default', ['sass','watch']);

}