const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'));

module.exports = {
	parser: '@typescript-eslint/parser',
	extends: ['airbnb-typescript/base', 'plugin:@typescript-eslint/recommended'],
	plugins: ['@typescript-eslint', 'prettier'],
	env: {
		browser: true,
		node: true,
		commonjs: true,
		es6: true
	},
	rules: {
		"linebreak-style": 0,
		'@typescript-eslint/comma-dangle': 'off',
		'prettier/prettier': ['error', prettierOptions],
		'@typescript-eslint/no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars-experimental': [
			'error',
			{
				ignoreArgsIfArgsAfterAreUsed: true
			}
		],
		'@typescript-eslint/naming-convention': [
			'error',
			{
				selector: 'interface',
				format: ['PascalCase'],
				custom: {
					regex: '^I[A-Z]',
					match: true
				}
			}
		],
		'no-tabs': [
			'error',
			{
				allowIndentationTabs: true
			}
		],
		'@typescript-eslint/indent': [
			'error',
			'tab',
			{
				SwitchCase: 1
			}
		],
		'comma-dangle': ['error', 'never'],
		'no-multiple-empty-lines': [
			'error',
			{
				max: 1
			}
		],
		'max-len': [
			'error',
			{
				code: 120
			}
		],
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				js: 'never',
				ts: 'never'
			}
		],
		'implicit-arrow-linebreak': 'off',
		'arrow-body-style': ['error', 'as-needed'],
		'arrow-parens': ['error', 'as-needed'],
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/no-var-requires': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-throw-literal': 'off',
		'import/prefer-default-export': 'off',
		'no-useless-constructor': 'off',
		'no-underscore-dangle': 'off',
		'no-case-declarations': 'off',
		'object-curly-newline': 'off',
		'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
		'no-await-in-loop': 'off',
		strict: ['off']
	},
	ignorePatterns: ['build', '.eslintrc.js', 'node_modules/', 'src/data/migrations'],
	parserOptions: {
		sourceType: 'module',
		tsconfigRootDir: __dirname,
		project: ['./tsconfig.json']
	},
	settings: {
		'import/resolver': {
			node: {
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
				moduleDirectory: ['node_modules', 'src/']
			}
		}
	}
};
