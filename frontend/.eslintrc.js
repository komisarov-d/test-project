const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'));

module.exports = {
	parser: '@typescript-eslint/parser',
	extends: [
		'airbnb-typescript',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended'
	],
	plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
	env: {
		browser: true,
		node: true,
		commonjs: true,
		es6: true
	},
	rules: {
		'prettier/prettier': ['error', prettierOptions],
		'newline-per-chained-call': [1, { ignoreChainWithDepth: 1 }],
		'no-tabs': [
			'error',
			{
				allowIndentationTabs: true
			}
		],
		indent: [
			'error',
			'tab',
			{
				SwitchCase: 1,
				ignoredNodes: ['ConditionalExpression']
			}
		],
		'react/jsx-uses-react': 'error',
		'react/jsx-uses-vars': 'error',
		'react/jsx-indent': ['error', 'tab'],
		'react/jsx-indent-props': ['error', 'tab'],
		'react/jsx-filename-extension': [
			1,
			{
				extensions: ['.tsx', '.jsx']
			}
		],
		'react/display-name': 0,
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
		'react/prop-types': 'off',
		'react/jsx-props-no-spreading': 'off',
		'react/jsx-fragments': 1,
		'react/destructuring-assignment': [
			'error',
			'always',
			{
				ignoreClassFields: true
			}
		],
		'no-unused-vars': 'off',
		'@typescript-eslint/member-delimiter-style': 'error',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-unused-vars': 'error',
		'comma-dangle': ['error', 'never'],
		'no-multiple-empty-lines': [
			'error',
			{
				max: 1
			}
		],
		'max-len': ['error', { code: 120, ignoreTemplateLiterals: true, ignoreStrings: true }],
		'no-useless-constructor': 'off',
		'import/prefer-default-export': 'off',
		'no-case-declarations': 'off',
		'spaced-comment': [
			'error',
			'always',
			{
				markers: ['/']
			}
		],
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				js: 'never',
				jsx: 'never',
				ts: 'never',
				tsx: 'never'
			}
		],
		'import/no-cycle': [2, { ignoreExternal: true }],
		'object-curly-newline': 'off',
		'class-methods-use-this': 'off',
		'import/order': 'off',
		'arrow-parens': ['error', 'as-needed'],
		'newline-per-chained-call': 'off',
		'import/no-extraneous-dependencies': ['error', { devDependencies: true }]
	},
	ignorePatterns: ['.eslintrc.js', '*.config.js', 'setupProxy.js', 'config-overrides.js', 'node_modules/', '.storybook/', '/src/stories/*' ],
	parserOptions: {
		project: ['tsconfig.json'],
		tsconfigRootDir: __dirname
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
