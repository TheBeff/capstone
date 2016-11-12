module.exports = function(grunt){
	
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jshint: {
			files: ['Gruntfile.js', 'server/*.js', 'app.js', 'public/*.js'],
			options: {
				globals: {
					jQuery: true, 
					console: true,
					module: true
				},
				esversion: 6
			}
		},
		watch: {
			files: ['<%= jshint.files %>'],
			tasks: ['jshint']
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jshint');

	grunt.registerTask('default', ['jshint']);
};