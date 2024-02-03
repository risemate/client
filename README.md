

## Getting Started

### install

```ts
// When you want to create a folder with the name you created
npx create-react-app [foldername] --template husky-tsx

// When you want to create files in the current folder
npx create-react-app --template husky-tsx .
```

### Prettier

The pre-set Prettiter format is as follows. You can change Prettier format as you want.

```json
{
	"bracketSpacing": true,
	"jsxBracketSameLine": false,
	"jsxSingleQuote": true,
	"singleQuote": true,
	"proseWrap": "preserve",
	"semi": true,
	"printWidth": 100,
	"endOfLine": "lf",
	"useTabs": false,
	"tabWidth": 2,
	"trailingComma": "all",
	"arrowParens": "always"
}
```

### ESLint

The pre-set ESLint format is as follows. You can change Eslint format as you want.

```json
{
	"env": {
		"es2021": true,
		"browser": true
	},
	"extends": [
		"eslint:recommended",
		"prettier",
		"plugin:react/recommended",
		"plugin:@typescript-eslint/recommended"
	],
	"settings": {
		"react": {
			"version": "detect"
		}
	},
	"parser": "@typescript-eslint/parser",
	"plugins": ["react", "@typescript-eslint"],
	"rules": {
		"no-var": "error",
		"no-multiple-empty-lines": "error",
		"no-console": ["warn", { "allow": ["warn", "error", "info"] }],
		"eqeqeq": "error",
		"dot-notation": "error",
		"no-unused-vars": "error"
	}
}
```

