module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{html,js,css,json,png}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};