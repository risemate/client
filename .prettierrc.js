module.exports = {
	plugins: ['@trivago/prettier-plugin-sort-imports'],
	printWidth: 90,
	tabWidth: 2,
	useTabs: true,
	semi: true,

	singleQuote: true,
	jsxSingleQuote: true,
	quoteProps: 'as-needed',
	jsxBracketSameLine: false,

	trailingComma: 'all',
	bracketSpacing: true,
	arrowParens: 'avoid',
	endOfLine: 'auto',
	htmlWhitespaceSensitivity: 'css',
	importOrder: [
		'^[./]|<THIRD_PARTY_MODULES>',
		'^@components(.*)|^@common(.*)|^@/(.*)$',
		'^@store(.*)|^@redux(.*)|^@hooks(.*)$',
		'^@config(.*)|^@utils(.*)$',
		'^@assets(.*)$',
		'^.*\\.css|^.*\\.*css(.*)$',
	],
	importOrderSeparation: true,
	importOrderCaseInsensitive: true,
	importOrderSortSpecifiers: true,
};
