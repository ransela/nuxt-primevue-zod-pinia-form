module.exports = {
  root: true,
  extends: ["@nuxt/eslint-config"],
  rules: {
    quotes: ["error", "double"],
    "max-len": ["error", { code: 120 }], // Adjust line length as needed
    semi: ["error", "never"],
    // ...other rules you want to include
  },
};

//     env: {
//       browser: true,
//       es2021: true,
//       node: true,
//       'vue/setup-compiler-macros': true, // Enable for Nuxt 3
//     },
//     extends: [
//       'eslint:recommended',
//       'plugin:vue/vue3-essential', // Or 'vue3-recommended' if you want stricter rules
//       'plugin:@typescript-eslint/recommended',
//     ],
//     parser: 'vue-eslint-parser',
//     parserOptions: {
//       ecmaVersion: 'latest',
//       parser: '@typescript-eslint/parser',
//       sourceType: 'module',
//     },
//     plugins: ['vue', '@typescript-eslint'],
//     rules: {
//       'quotes': ['error', 'double'],
//       'max-len': ['error', { code: 120 }], // Adjust line length as needed
//       'semi': ['error', 'never'],
//       // ...other rules you want to include
//     },
//   };
