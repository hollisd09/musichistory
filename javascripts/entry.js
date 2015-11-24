requirejs.config({
	baseUrl: "javascripts",
	paths:{
		"jquery": "../lib/bower_components/jquery/dist/jquery.min",
		"hbs": "../lib/bower_components/require-handlebars-plugin/hbs",
		"bootstrap": "../lib/bower_components/bootstrap/dist/js/bootstrap.min.js",
		"firebase": "../lib/bower_components/firebase/firebase"
		"q": "../bower_components/q/q"
	},
	shim: {
		'bootstrap': {
			"deps": ['jquery'],
			exports: 'bootstrap',
		},
		"firebase": {
			exports: "Firebase"
		}

	}
});

require(
	["bootstrap",
	"script",
	"populate-songs",
	"add-firebase",
	"user-filter",
	"delete",
	"firebase",
	"q"],
	function(bootstrap, script, populateSongs, addFirebase, filter, deleteSongs, Firebase, Q) {

	}
);