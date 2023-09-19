# 🥕 Create React App Husky TSX Template

Create React App template with husky and lint-staged to automate prettier and eslint configured.

This template automates the code formatting and linting process before committing staged files using Husky and lint-staged. It excludes other non-critical files from this process, which can be derived from the template `basic-tsx`.

If you prefer a basic layout without the automation of the code formatting and linting process, please check out the <a href="https://www.npmjs.com/package/cra-template-basic-tsx">basic-tsx</a> template that we've created.

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

## Available Default Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `npm run prepare`

**Note: If you have a warning such as "husky pre-commit is not set to be executable", you should run `npm run prepare`**

Run `husky install | chmod ug+x .husky/*` to install husky in the current project and set up Git hook.

Husky creates a Git hook setup file in the project's .git directory and activates it. This will allow you to automate code checking, formatting, and test runs later using Git hooks such as pre-commit, pre-push, etc.

This command sequence is often used to ensure that the Husky hooks are not only installed but also set to be executable, which is necessary for them to run when triggered by specific Git actions.

### `npm run format`

Run `prettier --ignore-path .gitignore --write --cache .` to format the code all files that have changed.

The given command employs the Prettier code formatting tool to format code files found in the current directory and its subdirectories. It utilizes the rules specified in the ".gitignore" file to determine which files to exclude from formatting.

Additionally, it uses the "--cache" option to improve performance by avoiding reformatting of unchanged files, and the "--write" option to directly apply formatting changes to the code files.

### `npm run lint`

Run `eslint --ext .js,.jsx,.ts,.tsx src --color --cache --max-warnings=0` to apply ESLint rules for JavaScript and TypeScript files.

The command runs ESLint, a code analysis tool, on JavaScript and TypeScript files within the "src" directory and its subdirectories. It enforces a rule of zero warnings, treating any warnings as errors and preventing code with warnings from passing the linting process.

Additionally, it utilizes ESLint's caching feature and displays colorized output for improved performance and readability during the linting process.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
