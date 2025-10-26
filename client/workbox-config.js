module.exports = {
	globDirectory: 'dist/',
	globPatterns: [
		'**/*.{js,css,json,html,jsx,xml}'
	],
	swDest: 'dist/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};