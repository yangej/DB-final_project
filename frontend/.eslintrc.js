module.exports = {
    root: true,
    env: {
        "node": true
    },

    parser: 'vue-eslint-parser',

    parserOptions: {
        ecmaVersion: 2017,
        sourceType: 'module',
        parser: 'babel-eslint',
    },

    rules: {
        'no-unused-vars': [
            'error',
            { vars: 'all', args: 'none', ignoreRestSiblings: false },
        ],
    },
};