# POSTCSS-BEM-SUFFIX

Example:
```js
module.exports = {
    plugins: [
        require('postcss-bem-suffix')({
            blocks: ['Button', 'Select'],
            suffix: 'mysuffix',
        }),
    ],
};

// Result .Button-mysuffix, .Button-mysuffix_mod, .Button-mysuffix-Elem
```