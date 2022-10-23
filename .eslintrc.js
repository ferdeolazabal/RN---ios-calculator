module.exports = {
    root: true,
    extends: '@react-native-community',
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            rules: {
                '@typescript-eslint/no-shadow': ['error'],
                'no-shadow': 'off',
                'no-undef': 'off',
                // decon
                'no-trailing-whitespace': false,
                'trailing-comma': [false],
                'no-console': false,
                'prefer-const': false,
                'no-empty-interface': false,
                'no-var-requires': false,
            },
        },
    ],
};
