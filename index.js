/* eslint-disable filenames/no-index -- Required by ESLint */

const base = require("./rules/eslint.js");

const plugins = {
	"eslint-comments": require("./rules/eslint-comments.js"),
	"filename-rules": require("./rules/filename-rules.js"),
	"filenames": require("./rules/filenames.js"),
	"import": require("./rules/import.js"),
	"unicorn": require("./rules/unicorn.js"),
};

const rules = { ...base };
for (const plugin in plugins) Object.assign(rules, plugins[ plugin ]);

module.exports = {

	env: {
		node: true,
		es6: true,
	},
	parserOptions: {
		ecmaVersion: 2021,
		sourceType: "module",
	},
	extends: [ "eslint:recommended" ],
	plugins: Object.keys(plugins),

	reportUnusedDisableDirectives: true,
	rules: rules,

};
